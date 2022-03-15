"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controllers/controller");
const auth_1 = require("../middleware/auth");
const userRoutes = express_1.default.Router();
userRoutes.post("/users", auth_1.verifyToken, controller_1.users);
userRoutes.post('/register', controller_1.createUser);
// userRoutes.get('/users',verifyToken)
exports.default = userRoutes;
//# sourceMappingURL=user.js.map