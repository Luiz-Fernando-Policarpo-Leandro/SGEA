"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuarioRouter = void 0;
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
function ownerOrAdminMiddleware(req, res, next) {
    if (!req.user)
        return res.status(401).json({ error: "Nao autenticado" });
    const targetId = Number(req.params.id);
    if (req.user.tipo === "administrador" || req.user.id === targetId) {
        return next();
    }
    return res.status(403).json({ error: "Acesso negado" });
}
const createUsuarioRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new usuario_controller_1.UsuarioController(repository);
    router.post("/usuarios", controller.create);
    router.get("/usuarios", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.list);
    router.get("/usuarios/:id", auth_middleware_1.authMiddleware, controller.get);
    router.put("/usuarios/:id", auth_middleware_1.authMiddleware, ownerOrAdminMiddleware, controller.update);
    router.delete("/usuarios/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.remove);
    return router;
};
exports.createUsuarioRouter = createUsuarioRouter;
//# sourceMappingURL=usuario.route.js.map