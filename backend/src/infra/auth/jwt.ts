import jwt, { SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface TokenPayload {
  id: number;
  email: string;
  tipo: string;
}

const SECRET: jwt.Secret = process.env.JWT_SECRET || "default_secret";

export function generateToken(payload: TokenPayload): string {
  const options: SignOptions = { expiresIn: "24h" };
  return jwt.sign(payload, SECRET, options);
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, SECRET) as TokenPayload;
}
