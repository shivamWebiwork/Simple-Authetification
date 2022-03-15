import express, { Router } from "express";
import { AuthController } from "../Controllers/authController";
import { authValidator } from "../validation/authValidation";

const Joi = require("joi");
const authRoutes = express.Router();
authRoutes.post("/login",authValidator.authUser,(req,res)=>{    
   AuthController.authUser(req,res);
})


// userRoutes.post('/register',userValidator.validateUser,(req,res)=>{
    
//     registerController.createUser(req,res);
// }) 

export default authRoutes;
