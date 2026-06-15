"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventoRouter = void 0;
const express_1 = require("express");
const evento_controller_1 = require("../controllers/evento.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const createEventoRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new evento_controller_1.EventoController(repository);
    router.get("/eventos", auth_middleware_1.authMiddleware, controller.list);
    router.get("/eventos/:id", auth_middleware_1.authMiddleware, controller.get);
    router.post("/eventos", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.create);
    router.put("/eventos/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.update);
    router.delete("/eventos/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.remove);
    return router;
};
exports.createEventoRouter = createEventoRouter;
//# sourceMappingURL=evento.route.js.map