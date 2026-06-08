import { Router } from "express";
import { EventoController } from "../controllers/evento.controller";
import { IEventoRepository } from "../../domain/repositories/evento.repository.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";

export const createEventoRouter = (repository: IEventoRepository): Router => {
  const router = Router();
  const controller = new EventoController(repository);

  router.get("/eventos", authMiddleware, controller.list);
  router.get("/eventos/:id", authMiddleware, controller.get);
  router.post(
    "/eventos",
    authMiddleware,
    roleMiddleware(["coordenador", "administrador"]),
    controller.create,
  );
  router.put(
    "/eventos/:id",
    authMiddleware,
    roleMiddleware(["coordenador", "administrador"]),
    controller.update,
  );
  router.delete(
    "/eventos/:id",
    authMiddleware,
    roleMiddleware(["administrador"]),
    controller.remove,
  );

  return router;
};
