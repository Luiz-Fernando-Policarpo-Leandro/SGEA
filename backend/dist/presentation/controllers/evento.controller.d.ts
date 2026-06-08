import { Request, Response } from "express";
import { IEventoRepository } from "../../domain/repositories/evento.repository.interface";
export declare class EventoController {
  private repository;
  constructor(repository: IEventoRepository);
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
  update: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
  remove: (
    req: Request,
    res: Response,
  ) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=evento.controller.d.ts.map
