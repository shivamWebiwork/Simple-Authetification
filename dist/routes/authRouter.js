"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../Controllers/authController");
const authValidation_1 = require("../validation/authValidation");
const Joi = require("joi");
const authRoutes = express_1.default.Router();
authRoutes.post("/login", authValidation_1.authValidator.authUser, (req, res) => {
    authController_1.AuthController.authUser(req, res);
});
// userRoutes.post('/register',userValidator.validateUser,(req,res)=>{
//     registerController.createUser(req,res);
// }) 
exports.default = authRoutes;
//# sourceMappingURL=authRouter.js.map