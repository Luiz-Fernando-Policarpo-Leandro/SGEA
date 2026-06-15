import { Request, Response, NextFunction } from "express";
type UserRole = "participante" | "coordenador" | "administrador";
export declare function roleMiddleware(allowedRoles: UserRole[]): (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export {};
//# sourceMappingURL=role.middleware.d.ts.map