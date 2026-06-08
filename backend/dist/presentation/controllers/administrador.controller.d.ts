import { Request, Response } from "express";
import { IAdministradorRepository } from "../../domain/repositories/administrador.repository.interface";
export declare class AdministradorController {
  private repository;
  constructor(repository: IAdministradorRepository);
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
//# sourceMappingURL=administrador.controller.d.ts.map
