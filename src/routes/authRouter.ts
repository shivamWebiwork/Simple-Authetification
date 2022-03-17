import express, { Router } from "express";
import { AuthValidation } from "../validation/indexValidation";
import { AuthController } from "../Controllers/indexController";

const Joi = require("joi");
const authRoutes = express.Router();
authRoutes.post("/login",AuthValidation.authUser,(req,res)=>{ 
      
   AuthController.authUser(req,res);
})
export default authRoutes;
