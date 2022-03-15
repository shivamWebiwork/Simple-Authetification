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
exports.users = exports.login = exports.createUser = void 0;
const db_1 = require("../db/db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constant_1 = require("../constmessage/constant");
const user_1 = require("../validation/user");
const auth_1 = require("../validation/auth");
const user_service_1 = require("../service/user-service");
/**
 * This function is used to create a user being passed from payload
 * params req:Request, res:Response
 * return
 */
const createUser = (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    let result = user_1.schema.validate(req.body);
    if (result.error) {
        res.status(400).send(result.error);
        return;
    }
    else {
        // const findEmail = `SELECT email FROM users WHERE email='${email}'`;
        // const query = `INSERT INTO users (firstname,lastname,email,password) VALUES ('${firstname}','${lastname}','${email}','${password}')`;
        db_1.pool.connect((err, client, release) => {
            if (err) {
                return console.error(constant_1.CONSTANTS.errorAcquiring, err.stack);
            }
            client.query(user_service_1.findEmail, (err, result) => {
                if (err) {
                    release();
                    return console.error(constant_1.CONSTANTS.errorExcuting, err.stack);
                }
                else {
                    let existingEmail = null;
                    if (result.rows.length > 0) {
                        existingEmail = result === null || result === void 0 ? void 0 : result.rows[0].email;
                    }
                    if (existingEmail) {
                        return res.status(409).json({
                            error: constant_1.CONSTANTS.emailExist,
                        });
                    }
                    else {
                        client.query(user_service_1.query, (err, result) => {
                            release();
                            if (err) {
                                return console.error(constant_1.CONSTANTS.errorExcuting, err.stack);
                            }
                            else {
                                res.send(constant_1.CONSTANTS.registerSuccess);
                            }
                            return;
                        });
                    }
                }
            });
        });
    }
};
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    let result = auth_1.loginSchema.validate(req.body);
    if (result.error) {
        res.status(400).send();
        return;
    }
    else {
    }
    const query = `SELECT email,password FROM users WHERE email='${email}'`;
    db_1.pool.connect((err, client, release) => {
        if (err) {
            return console.error(constant_1.CONSTANTS.errorAcquiring, err.stack);
        }
        client.query(query, (err, result) => {
            release();
            if (err) {
                return console.error(constant_1.CONSTANTS.errorExcuting, err.stack);
            }
            if (result.rows.length == 0) {
                res.status(404).send(constant_1.CONSTANTS.userNotExist);
            }
            if (result.rows.length > 0) {
                if (result.rows[0].password == password) {
                    const token = jsonwebtoken_1.default.sign({ email: email }, process.env.SECRET, {
                        expiresIn: process.env.TOKEN_LIFE
                    });
                    const refreshToken = jsonwebtoken_1.default.sign({ email }, process.env.REFRESHTOKEN, {
                        expiresIn: process.env.TOKEN_LIFE
                    });
                    const obj = {
                        status: constant_1.CONSTANTS.status,
                        token: token,
                        refreshToken: refreshToken,
                    };
                    res.send(obj);
                }
                else {
                    res.status(403).send(constant_1.CONSTANTS.pswIncorrect);
                }
            }
        });
    });
    return;
});
exports.login = login;
// export const getUser = (req, res)=>{
//   res.send("email...")
// }
const users = (req, res) => {
    const query = `SELECT firstname, lastname, email, password FROM users`;
    db_1.pool.connect((err, client, release) => {
        if (err) {
            return console.error("CONSTANTS.errorAcquiring, err.stack");
        }
        client.query(query, (err, result) => {
            release();
            if (err) {
                return console.error(constant_1.CONSTANTS.errorExcuting, err.stack);
            }
            res.send(result.rows);
        });
    });
};
exports.users = users;
//# sourceMappingURL=controller.js.map