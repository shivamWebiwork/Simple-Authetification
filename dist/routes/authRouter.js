"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexValidation_1 = require("../validation/indexValidation");
const indexController_1 = require("../Controllers/indexController");
const Joi = require("joi");
const authRoutes = express_1.default.Router();
authRoutes.post("/login", indexValidation_1.AuthValidation.authUser, (req, res) => {
    indexController_1.AuthController.authUser(req, res);
});
exports.default = authRoutes;
//# sourceMappingURL=authRouter.js.map