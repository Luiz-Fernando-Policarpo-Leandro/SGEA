import { Request, Response, NextFunction } from "express";
import { TokenPayload } from "../../infra/auth/jwt";
declare global {
    namespace Express {
        interface Request {
            user?: TokenPayload;
        }
    }
}
export declare function authMiddleware(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
//# sourceMappingURL=auth.middleware.d.ts.map