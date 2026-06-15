"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipanteController = void 0;
const participante_use_cases_1 = require("../../domain/use-cases/participante.use-cases");
class ParticipanteController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    create = async (req, res) => {
        try {
            const useCase = new participante_use_cases_1.CreateParticipanteUseCase(this.repository);
            const result = await useCase.execute(req.body);
            return res.status(201).json(result);
        }
        catch (error) {
            if (error.message === "Participante ja cadastrado")
                return res.status(400).json({ error: error.message });
            return res.status(500).json({ error: error.message });
        }
    };
    list = async (req, res) => {
        try {
            const useCase = new participante_use_cases_1.ListParticipantesUseCase(this.repository);
            const result = await useCase.execute();
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    get = async (req, res) => {
        try {
            const useCase = new participante_use_cases_1.GetParticipanteUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.id));
            if (!result)
                return res.status(404).json({ error: "Participante nao encontrado" });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    update = async (req, res) => {
        try {
            const useCase = new participante_use_cases_1.UpdateParticipanteUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.id), req.body);
            if (!result)
                return res.status(404).json({ error: "Participante nao encontrado" });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    remove = async (req, res) => {
        try {
            const useCase = new participante_use_cases_1.DeleteParticipanteUseCase(this.repository);
            const deleted = await useCase.execute(Number(req.params.id));
            if (!deleted)
                return res.status(404).json({ error: "Participante nao encontrado" });
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
}
exports.ParticipanteController = ParticipanteController;
//# sourceMappingURL=participante.controller.js.map