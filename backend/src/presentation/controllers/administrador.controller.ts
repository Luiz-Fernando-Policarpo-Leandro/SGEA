import { Request, Response } from "express";
import {
  CreateAdministradorUseCase,
  ListAdministradoresUseCase,
  GetAdministradorUseCase,
  DeleteAdministradorUseCase,
} from "../../domain/use-cases/administrador.use-cases";
import { IAdministradorRepository } from "../../domain/repositories/administrador.repository.interface";

export class AdministradorController {
  constructor(private repository: IAdministradorRepository) {}

  create = async (req: Request, res: Response) => {
    try {
      const useCase = new CreateAdministradorUseCase(this.repository);
      const result = await useCase.execute(req.body);
      return res.status(201).json(result);
    } catch (error: any) {
      if (error.message === "Administrador ja cadastrado")
        return res.status(400).json({ error: error.message });
      return res.status(500).json({ error: error.message });
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const useCase = new ListAdministradoresUseCase(this.repository);
      const result = await useCase.execute();
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const useCase = new GetAdministradorUseCase(this.repository);
      const result = await useCase.execute(Number(req.params.id));
      if (!result)
        return res.status(404).json({ error: "Administrador nao encontrado" });
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const useCase = new DeleteAdministradorUseCase(this.repository);
      const deleted = await useCase.execute(Number(req.params.id));
      if (!deleted)
        return res.status(404).json({ error: "Administrador nao encontrado" });
      return res.status(204).send();
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };
}
