"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const usuario_use_cases_1 = require("../../domain/use-cases/usuario.use-cases");
class UsuarioController {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  create = async (req, res) => {
    try {
      const useCase = new usuario_use_cases_1.CreateUsuarioUseCase(
        this.repository,
      );
      const result = await useCase.execute(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  list = async (req, res) => {
    try {
      const useCase = new usuario_use_cases_1.ListUsuariosUseCase(
        this.repository,
      );
      const result = await useCase.execute();
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  get = async (req, res) => {
    try {
      const useCase = new usuario_use_cases_1.GetUsuarioUseCase(
        this.repository,
      );
      const result = await useCase.execute(Number(req.params.id));
      if (!result)
        return res.status(404).json({ error: "Usuario nao encontrado" });
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  update = async (req, res) => {
    try {
      const useCase = new usuario_use_cases_1.UpdateUsuarioUseCase(
        this.repository,
      );
      const result = await useCase.execute(Number(req.params.id), req.body);
      if (!result)
        return res.status(404).json({ error: "Usuario nao encontrado" });
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  remove = async (req, res) => {
    try {
      const useCase = new usuario_use_cases_1.DeleteUsuarioUseCase(
        this.repository,
      );
      const deleted = await useCase.execute(Number(req.params.id));
      if (!deleted)
        return res.status(404).json({ error: "Usuario nao encontrado" });
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
}
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map
