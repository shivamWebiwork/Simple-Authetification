"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
console.log(process.env.PORT);
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use("/", indexRouter_1.default);
app.listen(process.env.PORT, () => {
    return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=app.js.map