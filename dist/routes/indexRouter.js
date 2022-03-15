"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./userRouter"));
const authRouter_1 = __importDefault(require("./authRouter"));
const Joi = require("joi");
const router = express_1.default.Router();
router.use("/user", userRouter_1.default);
router.use("/auth", authRouter_1.default);
exports.default = router;
//# sourceMappingURL=indexRouter.js.map