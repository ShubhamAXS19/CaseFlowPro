import express from "express";
import {
  createUserHandler,
  forgotPasswordHandler,
  getCurrentUserHandler,
  resetPasswordHandler,
  verifyUserHandler,
} from "../controllers/User.controller";
import requireUser from "../middleware/requireUser";
import validateResource from "../middleware/validateResource";
import {
  createUserSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyUserSchema,
} from "../schemas/User.schema";

const router = express.Router();

router.post("/register", validateResource(createUserSchema), createUserHandler);

router.post(
  "/verify/:id/:verificationCode",
  validateResource(verifyUserSchema),
  verifyUserHandler
);

router.post(
  "/forgotpassword",
  validateResource(forgotPasswordSchema),
  forgotPasswordHandler
);

router.post(
  "/resetpassword/:id/:passwordResetCode",
  validateResource(resetPasswordSchema),
  resetPasswordHandler
);

router.get("/me", requireUser, getCurrentUserHandler);

export default router;
