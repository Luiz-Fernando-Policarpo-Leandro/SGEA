"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParticipanteRouter = void 0;
const express_1 = require("express");
const participante_controller_1 = require("../controllers/participante.controller");
const createParticipanteRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new participante_controller_1.ParticipanteController(repository);
    router.post('/participantes', controller.create);
    router.get('/participantes', controller.list);
    router.get('/participantes/:id', controller.get);
    router.put('/participantes/:id', controller.update);
    router.delete('/participantes/:id', controller.remove);
    return router;
};
exports.createParticipanteRouter = createParticipanteRouter;
//# sourceMappingURL=participante.route.js.map