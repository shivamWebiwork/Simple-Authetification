import express, { Router } from "express";
// import { registerController } from "../Controllers/registerController";
import { UserController } from "../Controllers/userController";
import { JWT } from "../middleware/auth";
import { userValidator } from "../validation/userValidation";

const userRoutes = express.Router();

userRoutes.get("/", JWT.verifyToken, UserController.user);
userRoutes.post("/", userValidator.validateUser, (req, res) => {
  UserController.createUser(req, res);
});

export default userRoutes;
