"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.findEmail = void 0;
exports.findEmail = `SELECT email FROM users WHERE email=$3`;
exports.query = `INSERT INTO users (firstname,lastname,email,password) VALUES ($1,$2,$3,$4)`;
//# sourceMappingURL=user-service.js.map