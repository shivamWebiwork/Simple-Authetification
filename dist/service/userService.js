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
exports.UserService = void 0;
const db_1 = require("../db/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const SALT = 10;
class UserService {
    static user(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const User = yield db_1.pool.query(`SELECT firstname, lastname, email, password FROM users`);
            return User.rows;
        });
    }
    static createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const findEmail = yield db_1.pool.query(`SELECT email FROM users WHERE email='${user.email}'`);
            if (findEmail.rows.length == 0) {
                let hashPass = yield bcryptjs_1.default.hash(user.password, yield bcryptjs_1.default.genSalt(SALT));
                const insertQuery = yield db_1.pool.query(`INSERT INTO users (firstname,lastname,email,password) VALUES ('${user.firstname}','${user.lastname}','${user.email}','${hashPass}')`);
                return insertQuery;
            }
            else {
                return null;
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map