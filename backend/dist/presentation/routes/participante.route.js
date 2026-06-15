"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParticipanteRouter = void 0;
const express_1 = require("express");
const participante_controller_1 = require("../controllers/participante.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const createParticipanteRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new participante_controller_1.ParticipanteController(repository);
    router.post("/participantes", controller.create);
    router.get("/participantes", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.list);
    router.get("/participantes/:id", auth_middleware_1.authMiddleware, controller.get);
    router.put("/participantes/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.update);
    router.delete("/participantes/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.remove);
    return router;
};
exports.createParticipanteRouter = createParticipanteRouter;
//# sourceMappingURL=participante.route.js.map