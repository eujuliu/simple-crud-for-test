import { Router } from "express";
import validateFieldsMiddleware from "../middlewares/validate.js";
import { create } from "../controllers/user.controller.js";

const router = Router();

router.post("/users", validateFieldsMiddleware, create);

export default router;
