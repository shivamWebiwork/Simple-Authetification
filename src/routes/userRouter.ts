import express, { Router } from "express";

import { UserController } from "../Controllers/indexController";
import { JWT } from "../middleware/auth";
import { UserValidation } from "../validation/indexValidation";

const userRoutes = express.Router();

userRoutes.get("/", JWT.verifyToken, UserController.user);
userRoutes.post("/", UserValidation.validateUser, (req, res) => {
  UserController.createUser(req, res);
});

export default userRoutes;
