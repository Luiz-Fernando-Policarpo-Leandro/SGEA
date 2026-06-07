"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoController = void 0;
const evento_use_cases_1 = require("../../domain/use-cases/evento.use-cases");
class EventoController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    create = async (req, res) => {
        try {
            const useCase = new evento_use_cases_1.CreateEventoUseCase(this.repository);
            const result = await useCase.execute(req.body);
            return res.status(201).json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    list = async (req, res) => {
        try {
            const useCase = new evento_use_cases_1.ListEventosUseCase(this.repository);
            const result = await useCase.execute();
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    get = async (req, res) => {
        try {
            const useCase = new evento_use_cases_1.GetEventoUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.id));
            if (!result)
                return res.status(404).json({ error: 'Evento nao encontrado' });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    update = async (req, res) => {
        try {
            const useCase = new evento_use_cases_1.UpdateEventoUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.id), req.body);
            if (!result)
                return res.status(404).json({ error: 'Evento nao encontrado' });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    remove = async (req, res) => {
        try {
            const useCase = new evento_use_cases_1.DeleteEventoUseCase(this.repository);
            const deleted = await useCase.execute(Number(req.params.id));
            if (!deleted)
                return res.status(404).json({ error: 'Evento nao encontrado' });
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
}
exports.EventoController = EventoController;
//# sourceMappingURL=evento.controller.js.map