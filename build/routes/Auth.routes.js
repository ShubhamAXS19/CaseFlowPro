"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_controller_1 = require("../controllers/Auth.controller");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const Auth_schema_1 = require("../schemas/Auth.schema");
const router = express_1.default.Router();
router.post("/api/sessions", (0, validateResource_1.default)(Auth_schema_1.createSessionSchema), Auth_controller_1.createSessionHandler);
router.post("/api/sessions/refresh", Auth_controller_1.refreshAccessTokenHandler);
exports.default = router;
