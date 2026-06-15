"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const UrlDatabase = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}/${process.env.PG_DATABASE}?sslmode=verify-full&channel_binding=${process.env.PG_CHANNELBINDING}`;
exports.pool = new pg_1.Pool({
    connectionString: UrlDatabase
});
//# sourceMappingURL=connection.js.map