import { Request, Response } from "express";
import {
  CreateUsuarioUseCase,
  ListUsuariosUseCase,
  GetUsuarioUseCase,
  UpdateUsuarioUseCase,
  DeleteUsuarioUseCase,
} from "../../domain/use-cases/usuario.use-cases";
import { IUsuarioRepository } from "../../domain/repositories/usuario.repository.interface";

export class UsuarioController {
  constructor(private repository: IUsuarioRepository) {}

  create = async (req: Request, res: Response) => {
    try {
      const useCase = new CreateUsuarioUseCase(this.repository);
      const result = await useCase.execute(req.body);
      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const useCase = new ListUsuariosUseCase(this.repository);
      const result = await useCase.execute();
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const useCase = new GetUsuarioUseCase(this.repository);
      const result = await useCase.execute(Number(req.params.id));
      if (!result)
        return res.status(404).json({ error: "Usuario nao encontrado" });
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const useCase = new UpdateUsuarioUseCase(this.repository);
      const result = await useCase.execute(Number(req.params.id), req.body);
      if (!result)
        return res.status(404).json({ error: "Usuario nao encontrado" });
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const useCase = new DeleteUsuarioUseCase(this.repository);
      const deleted = await useCase.execute(Number(req.params.id));
      if (!deleted)
        return res.status(404).json({ error: "Usuario nao encontrado" });
      return res.status(204).send();
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };
}
