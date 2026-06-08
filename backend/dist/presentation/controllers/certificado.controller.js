"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificadoController = void 0;
const certificado_use_cases_1 = require("../../domain/use-cases/certificado.use-cases");
class CertificadoController {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  create = async (req, res) => {
    try {
      const useCase = new certificado_use_cases_1.CreateCertificadoUseCase(
        this.repository,
      );
      const result = await useCase.execute(req.body);
      return res.status(201).json(result);
    } catch (error) {
      if (
        error.message === "Participante nao encontrado" ||
        error.message === "Evento nao encontrado"
      ) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  };
  list = async (req, res) => {
    try {
      const useCase = new certificado_use_cases_1.ListCertificadosUseCase(
        this.repository,
      );
      const result = await useCase.execute();
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  listByParticipante = async (req, res) => {
    try {
      const useCase =
        new certificado_use_cases_1.ListCertificadosByParticipanteUseCase(
          this.repository,
        );
      const result = await useCase.execute(Number(req.params.participante_id));
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  get = async (req, res) => {
    try {
      const codigo = String(req.params.codigo);
      const useCase = new certificado_use_cases_1.GetCertificadoUseCase(
        this.repository,
      );
      const result = await useCase.execute(codigo);
      if (!result)
        return res.status(404).json({ error: "Certificado nao encontrado" });
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  update = async (req, res) => {
    try {
      const codigo = String(req.params.codigo);
      const useCase = new certificado_use_cases_1.UpdateCertificadoUseCase(
        this.repository,
      );
      const result = await useCase.execute(codigo, req.body);
      if (!result)
        return res.status(404).json({ error: "Certificado nao encontrado" });
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  remove = async (req, res) => {
    try {
      const codigo = String(req.params.codigo);
      const useCase = new certificado_use_cases_1.DeleteCertificadoUseCase(
        this.repository,
      );
      const deleted = await useCase.execute(codigo);
      if (!deleted)
        return res.status(404).json({ error: "Certificado nao encontrado" });
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
}
exports.CertificadoController = CertificadoController;
//# sourceMappingURL=certificado.controller.js.map
