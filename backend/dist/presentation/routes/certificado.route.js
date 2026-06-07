"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCertificadoRouter = void 0;
const express_1 = require("express");
const certificado_controller_1 = require("../controllers/certificado.controller");
const createCertificadoRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new certificado_controller_1.CertificadoController(repository);
    router.post('/certificados', controller.create);
    router.get('/certificados', controller.list);
    router.get('/certificados/participante/:participante_id', controller.listByParticipante);
    router.get('/certificados/:codigo', controller.get);
    router.put('/certificados/:codigo', controller.update);
    router.delete('/certificados/:codigo', controller.remove);
    return router;
};
exports.createCertificadoRouter = createCertificadoRouter;
//# sourceMappingURL=certificado.route.js.map