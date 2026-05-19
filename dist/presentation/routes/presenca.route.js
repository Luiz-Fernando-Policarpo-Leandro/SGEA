"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPresencaRouter = void 0;
const express_1 = require("express");
const presenca_controller_1 = require("../controllers/presenca.controller");
const createPresencaRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new presenca_controller_1.PresencaController(repository);
    router.post('/presencas', controller.create);
    router.get('/presencas', controller.list);
    router.get('/presencas/participante/:participante_id', controller.listByParticipante);
    router.get('/presencas/atividade/:atividade_id', controller.listByAtividade);
    router.get('/presencas/:participante_id/:atividade_id', controller.get);
    router.put('/presencas/:participante_id/:atividade_id', controller.update);
    router.delete('/presencas/:participante_id/:atividade_id', controller.remove);
    return router;
};
exports.createPresencaRouter = createPresencaRouter;
//# sourceMappingURL=presenca.route.js.map