"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexController_1 = require("../Controllers/indexController");
const auth_1 = require("../middleware/auth");
const indexValidation_1 = require("../validation/indexValidation");
const userRoutes = express_1.default.Router();
userRoutes.get("/", auth_1.JWT.verifyToken, indexController_1.UserController.user);
userRoutes.post("/", indexValidation_1.UserValidation.validateUser, (req, res) => {
    indexController_1.UserController.createUser(req, res);
});
exports.default = userRoutes;
//# sourceMappingURL=userRouter.js.map