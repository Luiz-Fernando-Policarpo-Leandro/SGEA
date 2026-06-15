"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAtividadeRouter = void 0;
const express_1 = require("express");
const atividade_controller_1 = require("../controllers/atividade.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const createAtividadeRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new atividade_controller_1.AtividadeController(repository);
    router.get("/atividades", auth_middleware_1.authMiddleware, controller.list);
    router.get("/atividades/evento/:evento_id", auth_middleware_1.authMiddleware, controller.listByEvento);
    router.get("/atividades/:id", auth_middleware_1.authMiddleware, controller.get);
    router.post("/atividades", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.create);
    router.put("/atividades/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.update);
    router.delete("/atividades/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.remove);
    return router;
};
exports.createAtividadeRouter = createAtividadeRouter;
//# sourceMappingURL=atividade.route.js.map