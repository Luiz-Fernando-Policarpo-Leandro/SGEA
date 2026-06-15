import { Request, Response } from "express";
import { IPresencaRepository } from "../../domain/repositories/presenca.repository.interface";
export declare class PresencaController {
    private repository;
    constructor(repository: IPresencaRepository);
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    list: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    listByParticipante: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    listByAtividade: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    get: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    remove: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=presenca.controller.d.ts.map