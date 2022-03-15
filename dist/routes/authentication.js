"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controllers/controller");
// const {createUser,login,Controller} = require ('../validation/validation');
// const route = require ("../routes/index");
const Joi = require('joi');
// const {registerUser_joi } = require('../validation/validation')
const authRoutes = express_1.default.Router();
authRoutes.post('/register', controller_1.createUser); // authentication
authRoutes.post('/login', controller_1.login); // authentication
exports.default = authRoutes;
//# sourceMappingURL=authentication.js.map