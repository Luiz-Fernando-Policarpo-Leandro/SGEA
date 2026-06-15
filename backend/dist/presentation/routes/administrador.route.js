"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdministradorRouter = void 0;
const express_1 = require("express");
const administrador_controller_1 = require("../controllers/administrador.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const createAdministradorRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new administrador_controller_1.AdministradorController(repository);
    router.post("/administradores", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.create);
    router.get("/administradores", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.list);
    router.get("/administradores/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.get);
    router.delete("/administradores/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.remove);
    return router;
};
exports.createAdministradorRouter = createAdministradorRouter;
//# sourceMappingURL=administrador.route.js.map