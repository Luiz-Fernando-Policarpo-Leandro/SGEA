import { Router } from "express";
import { CoordenadorController } from "../controllers/coordenador.controller";
import { ICoordenadorRepository } from "../../domain/repositories/coordenador.repository.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";

export const createCoordenadorRouter = (
  repository: ICoordenadorRepository,
): Router => {
  const router = Router();
  const controller = new CoordenadorController(repository);

  router.post("/coordenadores", controller.create);
  router.get(
    "/coordenadores",
    authMiddleware,
    roleMiddleware(["administrador"]),
    controller.list,
  );
  router.get(
    "/coordenadores/:id",
    authMiddleware,
    roleMiddleware(["administrador"]),
    controller.get,
  );
  router.delete(
    "/coordenadores/:id",
    authMiddleware,
    roleMiddleware(["administrador"]),
    controller.remove,
  );

  return router;
};
