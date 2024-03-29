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
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshAccessTokenHandler = exports.createSessionHandler = void 0;
const lodash_1 = require("lodash");
const Auth_service_1 = require("../services/Auth.service");
const User_service_1 = require("../services/User.service");
const jwt_1 = require("../utils/jwt");
function createSessionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = "Invalid email or password";
        const { email, password } = req.body;
        const user = yield (0, User_service_1.findUserByEmail)(email);
        if (!user) {
            return res.send(message);
        }
        if (!user.verified) {
            return res.send("Please verify your email");
        }
        const isValid = yield user.validatePassword(password);
        if (!isValid) {
            return res.send(message);
        }
        // sign a access token
        const accessToken = (0, Auth_service_1.signAccessToken)(user);
        // sign a refresh token
        const refreshToken = yield (0, Auth_service_1.signRefreshToken)({ userId: user._id.toString() });
        // send the tokens
        return res.send({
            accessToken,
            refreshToken,
        });
    });
}
exports.createSessionHandler = createSessionHandler;
function refreshAccessTokenHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const refreshToken = (0, lodash_1.get)(req.headers, "x-refresh");
        const decoded = (0, jwt_1.verifyJwt)(refreshToken, "refreshTokenPublicKey");
        if (!decoded) {
            return res.status(401).send("Could not refresh access token");
        }
        const session = yield (0, Auth_service_1.findSessionById)(decoded.session);
        if (!session || !session.valid) {
            return res.status(401).send("Could not refresh access token");
        }
        const user = yield (0, User_service_1.findUserById)(String(session.user));
        if (!user) {
            return res.status(401).send("Could not refresh access token");
        }
        const accessToken = (0, Auth_service_1.signAccessToken)(user);
        return res.send({ accessToken });
    });
}
exports.refreshAccessTokenHandler = refreshAccessTokenHandler;
