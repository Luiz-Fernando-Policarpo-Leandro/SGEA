import { Request, Response } from "express";
import { ICoordenadorRepository } from "../../domain/repositories/coordenador.repository.interface";
export declare class CoordenadorController {
  private repository;
  constructor(repository: ICoordenadorRepository);
  create: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
  list: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
  get: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
  remove: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=coordenador.controller.d.ts.map
