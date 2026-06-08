"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventoRouter = void 0;
const express_1 = require("express");
const evento_controller_1 = require("../controllers/evento.controller");
const createEventoRouter = (repository) => {
  const router = (0, express_1.Router)();
  const controller = new evento_controller_1.EventoController(repository);
  router.post("/eventos", controller.create);
  router.get("/eventos", controller.list);
  router.get("/eventos/:id", controller.get);
  router.put("/eventos/:id", controller.update);
  router.delete("/eventos/:id", controller.remove);
  return router;
};
exports.createEventoRouter = createEventoRouter;
//# sourceMappingURL=evento.route.js.map
