"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SECRET = process.env.JWT_SECRET || "default_secret";
function generateToken(payload) {
    const options = { expiresIn: "24h" };
    return jsonwebtoken_1.default.sign(payload, SECRET, options);
}
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, SECRET);
}
//# sourceMappingURL=jwt.js.map