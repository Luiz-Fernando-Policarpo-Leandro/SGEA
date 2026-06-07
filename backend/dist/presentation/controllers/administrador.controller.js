"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministradorController = void 0;
const administrador_use_cases_1 = require("../../domain/use-cases/administrador.use-cases");
class AdministradorController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    create = async (req, res) => {
        try {
            const useCase = new administrador_use_cases_1.CreateAdministradorUseCase(this.repository);
            const result = await useCase.execute(req.body);
            return res.status(201).json(result);
        }
        catch (error) {
            if (error.message === 'Administrador ja cadastrado')
                return res.status(400).json({ error: error.message });
            return res.status(500).json({ error: error.message });
        }
    };
    list = async (req, res) => {
        try {
            const useCase = new administrador_use_cases_1.ListAdministradoresUseCase(this.repository);
            const result = await useCase.execute();
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    get = async (req, res) => {
        try {
            const useCase = new administrador_use_cases_1.GetAdministradorUseCase(this.repository);
            const result = await useCase.execute(Number(req.params.id));
            if (!result)
                return res.status(404).json({ error: 'Administrador nao encontrado' });
            return res.json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    remove = async (req, res) => {
        try {
            const useCase = new administrador_use_cases_1.DeleteAdministradorUseCase(this.repository);
            const deleted = await useCase.execute(Number(req.params.id));
            if (!deleted)
                return res.status(404).json({ error: 'Administrador nao encontrado' });
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
}
exports.AdministradorController = AdministradorController;
//# sourceMappingURL=administrador.controller.js.map