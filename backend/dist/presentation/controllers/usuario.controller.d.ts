import { Request, Response } from "express";
import { IUsuarioRepository } from "../../domain/repositories/usuario.repository.interface";
export declare class UsuarioController {
    private repository;
    constructor(repository: IUsuarioRepository);
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    list: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    get: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    remove: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=usuario.controller.d.ts.map