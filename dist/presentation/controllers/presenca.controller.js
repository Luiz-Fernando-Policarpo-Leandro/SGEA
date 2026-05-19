"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresencaController = void 0;
const presenca_use_cases_1 = require("../../domain/use-cases/presenca.use-cases");
class PresencaController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    create = async (req, res) => {
        try {
            const useCase = new presenca_use_cases_1.CreatePresencaUseCase(this.repository);
            const result = await useCase.execute(req.body);
            return res.status(201).json(result);
        }
        catch (error) {
            if (error.message === 'Participante nao encontrado' || error.message === 'Atividade nao encontrada') {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: error.message });
        }
    };
    list = async (req, res) => {
        try {
            const useCase = new presenca_use_cases_1.ListPresencasUseCase(this.repository);
            const result = await useCase.execute();
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    listByParticipante = async (req, res) => {
        try {
            const useCase = new presenca_use_cases_1.ListPresencasByParticipanteUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.participante_id));
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    listByAtividade = async (req, res) => {
        try {
            const useCase = new presenca_use_cases_1.ListPresencasByAtividadeUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.atividade_id));
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    get = async (req, res) => {
        try {
            const useCase = new presenca_use_cases_1.GetPresencaUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.participante_id), Number(req.params.atividade_id));
            if (!result)
                return res.status(404).json({ error: 'Presenca nao encontrada' });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    update = async (req, res) => {
        try {
            const useCase = new presenca_use_cases_1.UpdatePresencaUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.participante_id), Number(req.params.atividade_id), req.body);
            if (!result)
                return res.status(404).json({ error: 'Presenca nao encontrada' });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    remove = async (req, res) => {
        try {
            const useCase = new presenca_use_cases_1.DeletePresencaUseCase(this.repository);
            const deleted = await useCase.execute(Number(req.params.participante_id), Number(req.params.atividade_id));
            if (!deleted)
                return res.status(404).json({ error: 'Presenca nao encontrada' });
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
}
exports.PresencaController = PresencaController;
//# sourceMappingURL=presenca.controller.js.map