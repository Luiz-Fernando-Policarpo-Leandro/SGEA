"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdministradorRouter = void 0;
const express_1 = require("express");
const administrador_controller_1 = require("../controllers/administrador.controller");
const createAdministradorRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new administrador_controller_1.AdministradorController(repository);
    router.post('/administradores', controller.create);
    router.get('/administradores', controller.list);
    router.get('/administradores/:id', controller.get);
    router.delete('/administradores/:id', controller.remove);
    return router;
};
exports.createAdministradorRouter = createAdministradorRouter;
//# sourceMappingURL=administrador.route.js.map