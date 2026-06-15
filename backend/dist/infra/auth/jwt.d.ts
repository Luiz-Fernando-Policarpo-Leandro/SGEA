export interface TokenPayload {
    id: number;
    email: string;
    tipo: string;
}
export declare function generateToken(payload: TokenPayload): string;
export declare function verifyToken(token: string): TokenPayload;
//# sourceMappingURL=jwt.d.ts.map