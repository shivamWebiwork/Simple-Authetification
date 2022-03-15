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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../service/userService");
// import { UserService } from "../service/registerService";
class UserController {
}
exports.UserController = UserController;
_a = UserController;
UserController.user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = req.body;
        let userRegister = yield userService_1.UsersService.user(user);
        return res.send(userRegister);
    }
    catch (_b) {
        return res.send(500);
    }
});
UserController.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = req.body;
        let userRegister = yield userService_1.UsersService.createUser(user);
        if (userRegister == null) {
            res.send(403);
        }
        else {
            res.status(200).send(200);
        }
    }
    catch (error) {
        res.json(500);
    }
});
//# sourceMappingURL=userController.js.map