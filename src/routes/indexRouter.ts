import express, { Router } from "express";
import userRoutes from "./userRouter";
import authRoutes from "./authRouter";
const Joi = require("joi");
const router = express.Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes);

export default router;
