"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const db_1 = require("../db/db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const messageConst_1 = require("../Constant/messageConst");
const authValidation_1 = require("../validation/authValidation");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    let result = authValidation_1.loginSchema.validate(req.body);
    if (result.error) {
        res.status(400).send();
        return;
    }
    else {
    }
    const query = `SELECT email,password FROM users WHERE email='${email}'`;
    db_1.pool.connect((err, client, release) => {
        if (err) {
            return console.error(messageConst_1.CONSTANTS.errorAcquiring, err.stack);
        }
        client.query(query, (err, result) => {
            release();
            if (err) {
                return console.error(messageConst_1.CONSTANTS.errorExcuting, err.stack);
            }
            if (result.rows.length == 0) {
                res.status(404).send(messageConst_1.CONSTANTS.userNotExist);
            }
            if (result.rows.length > 0) {
                if (result.rows[0].password == password) {
                    const token = jsonwebtoken_1.default.sign({ email: email }, process.env.SECRET, {
                        expiresIn: process.env.TOKEN_LIFE
                    });
                    const refreshToken = jsonwebtoken_1.default.sign({ email }, process.env.REFRESHTOKEN, {
                        expiresIn: process.env.REFRESH_TOKENLIFE
                    });
                    const obj = {
                        status: messageConst_1.CONSTANTS.status,
                        token: token,
                        refreshToken: refreshToken,
                    };
                    res.send(obj);
                }
                else {
                    res.status(403).send(messageConst_1.CONSTANTS.pswIncorrect);
                }
            }
        });
    });
    return;
});
exports.login = login;
//# sourceMappingURL=authcontroller.js.map