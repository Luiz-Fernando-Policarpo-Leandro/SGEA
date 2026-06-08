import { Request, Response } from "express";
import { ICertificadoRepository } from "../../domain/repositories/certificado.repository.interface";
export declare class CertificadoController {
  private repository;
  constructor(repository: ICertificadoRepository);
  create: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
  list: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
  listByParticipante: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
  get: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
  update: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
  remove: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=certificado.controller.d.ts.map
