"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCoordenadorRouter = void 0;
const express_1 = require("express");
const coordenador_controller_1 = require("../controllers/coordenador.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const createCoordenadorRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new coordenador_controller_1.CoordenadorController(repository);
    router.post("/coordenadores", controller.create);
    router.get("/coordenadores", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.list);
    router.get("/coordenadores/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.get);
    router.delete("/coordenadores/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.remove);
    return router;
};
exports.createCoordenadorRouter = createCoordenadorRouter;
//# sourceMappingURL=coordenador.route.js.map