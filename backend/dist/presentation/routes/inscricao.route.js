"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInscricaoRouter = void 0;
const express_1 = require("express");
const inscricao_controller_1 = require("../controllers/inscricao.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const createInscricaoRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new inscricao_controller_1.InscricaoController(repository);
    router.post("/inscricoes", auth_middleware_1.authMiddleware, controller.create);
    router.get("/inscricoes", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.list);
    router.get("/inscricoes/participante/:participante_id", auth_middleware_1.authMiddleware, controller.listByParticipante);
    router.get("/inscricoes/evento/:evento_id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.listByEvento);
    router.get("/inscricoes/:id", auth_middleware_1.authMiddleware, controller.get);
    router.put("/inscricoes/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.update);
    router.delete("/inscricoes/:id", auth_middleware_1.authMiddleware, controller.remove);
    return router;
};
exports.createInscricaoRouter = createInscricaoRouter;
//# sourceMappingURL=inscricao.route.js.map