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
exports.JWT = void 0;
const messageConst_1 = require("../Constant/messageConst");
const jwt = require("jsonwebtoken");
const config = process.env;
class JWT {
}
exports.JWT = JWT;
_a = JWT;
JWT.verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = req.headers.authorization;
        if (token) {
            yield jwt.verify(token, process.env.SECRET, function (err, verifiedJwt) {
                if (err) {
                    res.status(401).send(err.message); //
                }
                else {
                    req.user = verifiedJwt;
                    return next();
                }
            });
        }
        else {
            res.send(messageConst_1.CONSTANTS.verifiyTokenRequired);
        }
    }
    catch (err) {
        res.json(400);
    }
});
//# sourceMappingURL=auth.js.map