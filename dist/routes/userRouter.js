"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { registerController } from "../Controllers/registerController";
const userController_1 = require("../Controllers/userController");
const auth_1 = require("../middleware/auth");
const userValidation_1 = require("../validation/userValidation");
const userRoutes = express_1.default.Router();
userRoutes.get("/", auth_1.JWT.verifyToken, userController_1.UserController.user);
userRoutes.post("/", userValidation_1.userValidator.validateUser, (req, res) => {
    userController_1.UserController.createUser(req, res);
});
exports.default = userRoutes;
//# sourceMappingURL=userRouter.js.map