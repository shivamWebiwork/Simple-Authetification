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
exports.userValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    firstname: joi_1.default.string().min(3).max(20).required(),
    lastname: joi_1.default.string().min(3).max(20),
    email: joi_1.default.string().email().max(256).required(),
    password: joi_1.default.string().min(3).max(20).required(),
});
class userValidator {
    static validateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield schema.validate(req.body);
            if (result && result.error) {
                res.status(500).json(result.error);
            }
            next();
        });
    }
}
exports.userValidator = userValidator;
//# sourceMappingURL=userValidation.js.map