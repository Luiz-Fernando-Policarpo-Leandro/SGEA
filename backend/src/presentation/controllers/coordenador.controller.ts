import { Request, Response } from "express";
import {
  CreateCoordenadorUseCase,
  ListCoordenadoresUseCase,
  GetCoordenadorUseCase,
  DeleteCoordenadorUseCase,
} from "../../domain/use-cases/coordenador.use-cases";
import { ICoordenadorRepository } from "../../domain/repositories/coordenador.repository.interface";

export class CoordenadorController {
  constructor(private repository: ICoordenadorRepository) {}

  create = async (req: Request, res: Response) => {
    try {
      const useCase = new CreateCoordenadorUseCase(this.repository);
      const result = await useCase.execute(req.body);
      return res.status(201).json(result);
    } catch (error: any) {
      if (error.message === "Coordenador ja cadastrado")
        return res.status(400).json({ error: error.message });
      return res.status(500).json({ error: error.message });
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const useCase = new ListCoordenadoresUseCase(this.repository);
      const result = await useCase.execute();
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const useCase = new GetCoordenadorUseCase(this.repository);
      const result = await useCase.execute(Number(req.params.id));
      if (!result)
        return res.status(404).json({ error: "Coordenador nao encontrado" });
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const useCase = new DeleteCoordenadorUseCase(this.repository);
      const deleted = await useCase.execute(Number(req.params.id));
      if (!deleted)
        return res.status(404).json({ error: "Coordenador nao encontrado" });
      return res.status(204).send();
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };
}
