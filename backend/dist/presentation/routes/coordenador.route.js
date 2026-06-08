"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCoordenadorRouter = void 0;
const express_1 = require("express");
const coordenador_controller_1 = require("../controllers/coordenador.controller");
const createCoordenadorRouter = (repository) => {
  const router = (0, express_1.Router)();
  const controller = new coordenador_controller_1.CoordenadorController(
    repository,
  );
  router.post("/coordenadores", controller.create);
  router.get("/coordenadores", controller.list);
  router.get("/coordenadores/:id", controller.get);
  router.delete("/coordenadores/:id", controller.remove);
  return router;
};
exports.createCoordenadorRouter = createCoordenadorRouter;
//# sourceMappingURL=coordenador.route.js.map
