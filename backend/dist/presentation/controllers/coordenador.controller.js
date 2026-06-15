"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordenadorController = void 0;
const coordenador_use_cases_1 = require("../../domain/use-cases/coordenador.use-cases");
class CoordenadorController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    create = async (req, res) => {
        try {
            const useCase = new coordenador_use_cases_1.CreateCoordenadorUseCase(this.repository);
            const result = await useCase.execute(req.body);
            return res.status(201).json(result);
        }
        catch (error) {
            if (error.message === "Coordenador ja cadastrado")
                return res.status(400).json({ error: error.message });
            return res.status(500).json({ error: error.message });
        }
    };
    list = async (req, res) => {
        try {
            const useCase = new coordenador_use_cases_1.ListCoordenadoresUseCase(this.repository);
            const result = await useCase.execute();
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    get = async (req, res) => {
        try {
            const useCase = new coordenador_use_cases_1.GetCoordenadorUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.id));
            if (!result)
                return res.status(404).json({ error: "Coordenador nao encontrado" });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    remove = async (req, res) => {
        try {
            const useCase = new coordenador_use_cases_1.DeleteCoordenadorUseCase(this.repository);
            const deleted = await useCase.execute(Number(req.params.id));
            if (!deleted)
                return res.status(404).json({ error: "Coordenador nao encontrado" });
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
}
exports.CoordenadorController = CoordenadorController;
//# sourceMappingURL=coordenador.controller.js.map