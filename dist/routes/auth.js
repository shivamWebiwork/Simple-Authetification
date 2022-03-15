"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controllers/controller");
const Joi = require("joi");
const authRoutes = express_1.default.Router();
authRoutes.post("/login", controller_1.login);
exports.default = authRoutes;
//# sourceMappingURL=auth.js.map