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
exports.AuthService = void 0;
const db_1 = require("../db/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt = require("jsonwebtoken");
class AuthService {
    static authUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const authEmail = yield db_1.pool.query(`SELECT email,password FROM users WHERE email='${user.email}'`);
            if (authEmail.rows.length > 0) {
                let compare = yield bcryptjs_1.default.compare(user.password, authEmail.rows[0].password);
                if (compare) {
                    const token = jwt.sign({ email: user.email }, process.env.SECRET, {
                        expiresIn: process.env.TOKEN_LIFE,
                    });
                    const refreshToken = jwt.sign({ email: user.email }, process.env.REFRESHTOKEN, {});
                    const obj = {
                        token: token,
                        refreshToken: refreshToken,
                    };
                    return obj;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=authService.js.map