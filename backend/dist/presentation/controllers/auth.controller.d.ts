import { Request, Response } from "express";
import { IUsuarioRepository } from "../../domain/repositories/usuario.repository.interface";
export declare class AuthController {
    private repository;
    constructor(repository: IUsuarioRepository);
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=auth.controller.d.ts.map