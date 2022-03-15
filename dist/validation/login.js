"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// const router = require('joi');
// const Joi = router.Joi;
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().max(50).required(),
    password: joi_1.default.string().min(6).max(8).required(),
});
//# sourceMappingURL=login.js.map