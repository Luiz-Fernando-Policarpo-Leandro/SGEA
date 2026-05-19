"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtividadeController = void 0;
const atividade_use_cases_1 = require("../../domain/use-cases/atividade.use-cases");
class AtividadeController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    create = async (req, res) => {
        try {
            const useCase = new atividade_use_cases_1.CreateAtividadeUseCase(this.repository);
            const result = await useCase.execute(req.body);
            return res.status(201).json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    list = async (req, res) => {
        try {
            const useCase = new atividade_use_cases_1.ListAtividadesUseCase(this.repository);
            const result = await useCase.execute();
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    listByEvento = async (req, res) => {
        try {
            const useCase = new atividade_use_cases_1.ListAtividadesByEventoUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.evento_id));
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    get = async (req, res) => {
        try {
            const useCase = new atividade_use_cases_1.GetAtividadeUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.id));
            if (!result)
                return res.status(404).json({ error: 'Atividade nao encontrada' });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    update = async (req, res) => {
        try {
            const useCase = new atividade_use_cases_1.UpdateAtividadeUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.id), req.body);
            if (!result)
                return res.status(404).json({ error: 'Atividade nao encontrada' });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    remove = async (req, res) => {
        try {
            const useCase = new atividade_use_cases_1.DeleteAtividadeUseCase(this.repository);
            const deleted = await useCase.execute(Number(req.params.id));
            if (!deleted)
                return res.status(404).json({ error: 'Atividade nao encontrada' });
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
}
exports.AtividadeController = AtividadeController;
//# sourceMappingURL=atividade.controller.js.map