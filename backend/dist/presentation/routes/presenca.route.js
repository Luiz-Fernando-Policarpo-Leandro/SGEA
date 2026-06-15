"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPresencaRouter = void 0;
const express_1 = require("express");
const presenca_controller_1 = require("../controllers/presenca.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const createPresencaRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new presenca_controller_1.PresencaController(repository);
    router.post("/presencas", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.create);
    router.get("/presencas", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.list);
    router.get("/presencas/participante/:participante_id", auth_middleware_1.authMiddleware, controller.listByParticipante);
    router.get("/presencas/atividade/:atividade_id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.listByAtividade);
    router.get("/presencas/:participante_id/:atividade_id", auth_middleware_1.authMiddleware, controller.get);
    router.put("/presencas/:participante_id/:atividade_id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.update);
    router.delete("/presencas/:participante_id/:atividade_id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.remove);
    return router;
};
exports.createPresencaRouter = createPresencaRouter;
//# sourceMappingURL=presenca.route.js.map