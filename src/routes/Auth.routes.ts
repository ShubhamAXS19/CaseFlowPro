import express from "express";
import {
  createSessionHandler,
  refreshAccessTokenHandler,
} from "../controllers/Auth.controller";
import validateResource from "../middleware/validateResource";
import { createSessionSchema } from "../schemas/Auth.schema";

const router = express.Router();

router.post("/", validateResource(createSessionSchema), createSessionHandler);

router.post("/refresh", refreshAccessTokenHandler);

export default router;
