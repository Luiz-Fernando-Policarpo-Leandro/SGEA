"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInscricaoRouter = void 0;
const express_1 = require("express");
const inscricao_controller_1 = require("../controllers/inscricao.controller");
const createInscricaoRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new inscricao_controller_1.InscricaoController(repository);
    router.post('/inscricoes', controller.create);
    router.get('/inscricoes', controller.list);
    router.get('/inscricoes/participante/:participante_id', controller.listByParticipante);
    router.get('/inscricoes/evento/:evento_id', controller.listByEvento);
    router.get('/inscricoes/:id', controller.get);
    router.put('/inscricoes/:id', controller.update);
    router.delete('/inscricoes/:id', controller.remove);
    return router;
};
exports.createInscricaoRouter = createInscricaoRouter;
//# sourceMappingURL=inscricao.route.js.map