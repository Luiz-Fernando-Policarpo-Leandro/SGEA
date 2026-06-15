import { Request, Response } from "express";
import { IAtividadeRepository } from "../../domain/repositories/atividade.repository.interface";
export declare class AtividadeController {
    private repository;
    constructor(repository: IAtividadeRepository);
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    list: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    listByEvento: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    get: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    remove: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=atividade.controller.d.ts.map