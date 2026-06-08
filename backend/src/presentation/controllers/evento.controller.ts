import { Request, Response } from "express";
import {
  CreateEventoUseCase,
  ListEventosUseCase,
  GetEventoUseCase,
  UpdateEventoUseCase,
  DeleteEventoUseCase,
} from "../../domain/use-cases/evento.use-cases";
import { IEventoRepository } from "../../domain/repositories/evento.repository.interface";

export class EventoController {
  constructor(private repository: IEventoRepository) {}

  create = async (req: Request, res: Response) => {
    try {
      const useCase = new CreateEventoUseCase(this.repository);
      const result = await useCase.execute(req.body);
      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const useCase = new ListEventosUseCase(this.repository);
      const result = await useCase.execute();
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const useCase = new GetEventoUseCase(this.repository);
      const result = await useCase.execute(Number(req.params.id));
      if (!result)
        return res.status(404).json({ error: "Evento nao encontrado" });
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const useCase = new UpdateEventoUseCase(this.repository);
      const result = await useCase.execute(Number(req.params.id), req.body);
      if (!result)
        return res.status(404).json({ error: "Evento nao encontrado" });
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const useCase = new DeleteEventoUseCase(this.repository);
      const deleted = await useCase.execute(Number(req.params.id));
      if (!deleted)
        return res.status(404).json({ error: "Evento nao encontrado" });
      return res.status(204).send();
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };
}
