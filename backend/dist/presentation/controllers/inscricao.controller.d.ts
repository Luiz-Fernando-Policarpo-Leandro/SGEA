import { Request, Response } from 'express';
import { IInscricaoRepository } from '../../domain/repositories/inscricao.repository.interface';
export declare class InscricaoController {
    private repository;
    constructor(repository: IInscricaoRepository);
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    list: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    listByParticipante: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    listByEvento: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    get: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    remove: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=inscricao.controller.d.ts.map