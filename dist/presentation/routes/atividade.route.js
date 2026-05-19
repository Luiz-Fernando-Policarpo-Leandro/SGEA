"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAtividadeRouter = void 0;
const express_1 = require("express");
const atividade_controller_1 = require("../controllers/atividade.controller");
const createAtividadeRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new atividade_controller_1.AtividadeController(repository);
    router.post('/atividades', controller.create);
    router.get('/atividades', controller.list);
    router.get('/atividades/evento/:evento_id', controller.listByEvento);
    router.get('/atividades/:id', controller.get);
    router.put('/atividades/:id', controller.update);
    router.delete('/atividades/:id', controller.remove);
    return router;
};
exports.createAtividadeRouter = createAtividadeRouter;
//# sourceMappingURL=atividade.route.js.map