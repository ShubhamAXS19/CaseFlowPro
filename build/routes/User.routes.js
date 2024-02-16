"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("../controllers/User.controller");
const requireUser_1 = __importDefault(require("../middleware/requireUser"));
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const User_schema_1 = require("../schemas/User.schema");
const router = express_1.default.Router();
router.post("", (0, validateResource_1.default)(User_schema_1.createUserSchema), User_controller_1.createUserHandler);
router.post("/verify/:id/:verificationCode", (0, validateResource_1.default)(User_schema_1.verifyUserSchema), User_controller_1.verifyUserHandler);
router.post("/forgotpassword", (0, validateResource_1.default)(User_schema_1.forgotPasswordSchema), User_controller_1.forgotPasswordHandler);
router.post("/resetpassword/:id/:passwordResetCode", (0, validateResource_1.default)(User_schema_1.resetPasswordSchema), User_controller_1.resetPasswordHandler);
router.get("/me", requireUser_1.default, User_controller_1.getCurrentUserHandler);
exports.default = router;
