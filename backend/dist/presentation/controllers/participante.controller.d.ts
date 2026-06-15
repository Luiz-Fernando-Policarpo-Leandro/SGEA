import { Request, Response } from "express";
import { IParticipanteRepository } from "../../domain/repositories/participante.repository.interface";
export declare class ParticipanteController {
    private repository;
    constructor(repository: IParticipanteRepository);
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    list: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    get: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    remove: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=participante.controller.d.ts.map