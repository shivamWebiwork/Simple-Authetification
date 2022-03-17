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
exports.AuthController = void 0;
const indexService_1 = require("../service/indexService");
class AuthController {
}
exports.AuthController = AuthController;
_a = AuthController;
AuthController.authUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = req.body;
        let userLogin = yield indexService_1.AuthService.authUser(user);
        if (userLogin == null) {
            res.send(401);
        }
        else {
            res.status(200).send(userLogin);
        }
    }
    catch (error) {
        res.send(500);
    }
});
//# sourceMappingURL=authController.js.map