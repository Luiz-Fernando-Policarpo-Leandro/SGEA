import { Request, Response } from "express";
import {
  CreateParticipanteUseCase,
  ListParticipantesUseCase,
  GetParticipanteUseCase,
  UpdateParticipanteUseCase,
  DeleteParticipanteUseCase,
} from "../../domain/use-cases/participante.use-cases";
import { IParticipanteRepository } from "../../domain/repositories/participante.repository.interface";

export class ParticipanteController {
  constructor(private repository: IParticipanteRepository) {}

  create = async (req: Request, res: Response) => {
    try {
      const useCase = new CreateParticipanteUseCase(this.repository);
      const result = await useCase.execute(req.body);
      return res.status(201).json(result);
    } catch (error: any) {
      if (error.message === "Participante ja cadastrado")
        return res.status(400).json({ error: error.message });
      return res.status(500).json({ error: error.message });
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const useCase = new ListParticipantesUseCase(this.repository);
      const result = await useCase.execute();
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const useCase = new GetParticipanteUseCase(this.repository);
      const result = await useCase.execute(Number(req.params.id));
      if (!result)
        return res.status(404).json({ error: "Participante nao encontrado" });
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const useCase = new UpdateParticipanteUseCase(this.repository);
      const result = await useCase.execute(Number(req.params.id), req.body);
      if (!result)
        return res.status(404).json({ error: "Participante nao encontrado" });
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const useCase = new DeleteParticipanteUseCase(this.repository);
      const deleted = await useCase.execute(Number(req.params.id));
      if (!deleted)
        return res.status(404).json({ error: "Participante nao encontrado" });
      return res.status(204).send();
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };
}
