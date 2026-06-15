"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCertificadoRouter = void 0;
const express_1 = require("express");
const certificado_controller_1 = require("../controllers/certificado.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const createCertificadoRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new certificado_controller_1.CertificadoController(repository);
    router.post("/certificados", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.create);
    router.get("/certificados", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.list);
    router.get("/certificados/participante/:participante_id", auth_middleware_1.authMiddleware, controller.listByParticipante);
    router.get("/certificados/:codigo", controller.get);
    router.put("/certificados/:codigo", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["coordenador", "administrador"]), controller.update);
    router.delete("/certificados/:codigo", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["administrador"]), controller.remove);
    return router;
};
exports.createCertificadoRouter = createCertificadoRouter;
//# sourceMappingURL=certificado.route.js.map