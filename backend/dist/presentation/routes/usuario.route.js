"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuarioRouter = void 0;
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const createUsuarioRouter = (repository) => {
  const router = (0, express_1.Router)();
  const controller = new usuario_controller_1.UsuarioController(repository);
  router.post("/usuarios", controller.create);
  router.get("/usuarios", controller.list);
  router.get("/usuarios/:id", controller.get);
  router.put("/usuarios/:id", controller.update);
  router.delete("/usuarios/:id", controller.remove);
  return router;
};
exports.createUsuarioRouter = createUsuarioRouter;
//# sourceMappingURL=usuario.route.js.map
