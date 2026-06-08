import { Request, Response } from "express";
import {
  CreateCertificadoUseCase,
  ListCertificadosUseCase,
  GetCertificadoUseCase,
  ListCertificadosByParticipanteUseCase,
  UpdateCertificadoUseCase,
  DeleteCertificadoUseCase,
} from "../../domain/use-cases/certificado.use-cases";
import { ICertificadoRepository } from "../../domain/repositories/certificado.repository.interface";

export class CertificadoController {
  constructor(private repository: ICertificadoRepository) {}

  create = async (req: Request, res: Response) => {
    try {
      const useCase = new CreateCertificadoUseCase(this.repository);
      const result = await useCase.execute(req.body);
      return res.status(201).json(result);
    } catch (error: any) {
      if (
        error.message === "Participante nao encontrado" ||
        error.message === "Evento nao encontrado"
      ) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const useCase = new ListCertificadosUseCase(this.repository);
      const result = await useCase.execute();
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  listByParticipante = async (req: Request, res: Response) => {
    try {
      const useCase = new ListCertificadosByParticipanteUseCase(
        this.repository,
      );
      const result = await useCase.execute(Number(req.params.participante_id));
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const codigo = String(req.params.codigo);
      const useCase = new GetCertificadoUseCase(this.repository);
      const result = await useCase.execute(codigo);
      if (!result)
        return res.status(404).json({ error: "Certificado nao encontrado" });
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const codigo = String(req.params.codigo);
      const useCase = new UpdateCertificadoUseCase(this.repository);
      const result = await useCase.execute(codigo, req.body);
      if (!result)
        return res.status(404).json({ error: "Certificado nao encontrado" });
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const codigo = String(req.params.codigo);
      const useCase = new DeleteCertificadoUseCase(this.repository);
      const deleted = await useCase.execute(codigo);
      if (!deleted)
        return res.status(404).json({ error: "Certificado nao encontrado" });
      return res.status(204).send();
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };
}
