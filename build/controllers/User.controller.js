"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUserHandler = exports.resetPasswordHandler = exports.forgotPasswordHandler = exports.verifyUserHandler = exports.createUserHandler = void 0;
const User_service_1 = require("../services/User.service");
const logger_1 = __importDefault(require("../utils/logger"));
const mailer_1 = __importDefault(require("../utils/mailer"));
function createUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        try {
            const user = yield (0, User_service_1.createUser)(body);
            yield (0, mailer_1.default)({
                to: user.email,
                from: "test@example.com",
                subject: "Verify your email",
                text: `verification code: ${user.verificationCode}. Id: ${user._id}`,
            });
            return res.send("User successfully created");
        }
        catch (e) {
            if (e.code === 11000) {
                return res.status(409).send("Account already exists");
            }
            return res.status(500).send(e);
        }
    });
}
exports.createUserHandler = createUserHandler;
function verifyUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const verificationCode = req.params.verificationCode;
        // find the user by id
        const user = yield (0, User_service_1.findUserById)(id);
        if (!user) {
            return res.send("Could not verify user");
        }
        // check to see if they are already verified
        if (user.verified) {
            return res.send("User is already verified");
        }
        // check to see if the verificationCode matches
        if (user.verificationCode === verificationCode) {
            user.verified = true;
            yield user.save();
            return res.send("User successfully verified");
        }
        return res.send("Could not verify user");
    });
}
exports.verifyUserHandler = verifyUserHandler;
function forgotPasswordHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = "If a user with that email is registered you will receive a password reset email";
        const { email } = req.body;
        const user = yield (0, User_service_1.findUserByEmail)(email);
        if (!user) {
            logger_1.default.debug(`User with email ${email} does not exists`);
            return res.send(message);
        }
        if (!user.verified) {
            return res.send("User is not verified");
        }
        const passwordResetCode = "1234"; // nanoid(6);
        user.passwordResetCode = passwordResetCode;
        yield user.save();
        yield (0, mailer_1.default)({
            to: user.email,
            from: "test@example.com",
            subject: "Reset your password",
            text: `Password reset code: ${passwordResetCode}. Id ${user._id}`,
        });
        logger_1.default.debug(`Password reset email sent to ${email}`);
        return res.send(message);
    });
}
exports.forgotPasswordHandler = forgotPasswordHandler;
function resetPasswordHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, passwordResetCode } = req.params;
        const { password } = req.body;
        const user = yield (0, User_service_1.findUserById)(id);
        if (!user ||
            !user.passwordResetCode ||
            user.passwordResetCode !== passwordResetCode) {
            return res.status(400).send("Could not reset user password");
        }
        user.passwordResetCode = null;
        user.password = password;
        yield user.save();
        return res.send("Successfully updated password");
    });
}
exports.resetPasswordHandler = resetPasswordHandler;
function getCurrentUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.send(res.locals.user);
    });
}
exports.getCurrentUserHandler = getCurrentUserHandler;
