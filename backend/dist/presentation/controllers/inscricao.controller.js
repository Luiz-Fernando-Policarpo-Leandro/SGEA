"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscricaoController = void 0;
const inscricao_use_cases_1 = require("../../domain/use-cases/inscricao.use-cases");
class InscricaoController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    create = async (req, res) => {
        try {
            const useCase = new inscricao_use_cases_1.CreateInscricaoUseCase(this.repository);
            const result = await useCase.execute(req.body);
            return res.status(201).json(result);
        }
        catch (error) {
            if (error.message === "Participante nao encontrado" ||
                error.message === "Evento nao encontrado") {
                return res.status(400).json({ error: error.message });
            }
            if (error.message === "Participante ja inscrito neste evento") {
                return res.status(409).json({ error: error.message });
            }
            return res.status(500).json({ error: error.message });
        }
    };
    list = async (req, res) => {
        try {
            const useCase = new inscricao_use_cases_1.ListInscricoesUseCase(this.repository);
            const result = await useCase.execute();
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    listByParticipante = async (req, res) => {
        try {
            const useCase = new inscricao_use_cases_1.ListInscricoesByParticipanteUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.participante_id));
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    listByEvento = async (req, res) => {
        try {
            const useCase = new inscricao_use_cases_1.ListInscricoesByEventoUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.evento_id));
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    get = async (req, res) => {
        try {
            const useCase = new inscricao_use_cases_1.GetInscricaoUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.id));
            if (!result)
                return res.status(404).json({ error: "Inscricao nao encontrada" });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    update = async (req, res) => {
        try {
            const useCase = new inscricao_use_cases_1.UpdateInscricaoUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.id), req.body);
            if (!result)
                return res.status(404).json({ error: "Inscricao nao encontrada" });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    remove = async (req, res) => {
        try {
            const inscricao = await this.repository.findById(Number(req.params.id));
            if (!inscricao)
                return res.status(404).json({ error: "Inscricao nao encontrada" });
            const isOwner = req.user?.id === inscricao.participante_id;
            const isAdmin = req.user?.tipo === "coordenador" || req.user?.tipo === "administrador";
            if (!isOwner && !isAdmin)
                return res.status(403).json({ error: "Acesso negado" });
            const useCase = new inscricao_use_cases_1.DeleteInscricaoUseCase(this.repository);
            const deleted = await useCase.execute(Number(req.params.id));
            if (!deleted)
                return res.status(404).json({ error: "Inscricao nao encontrada" });
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
}
exports.InscricaoController = InscricaoController;
//# sourceMappingURL=inscricao.controller.js.map