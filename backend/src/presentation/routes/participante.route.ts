import { Router } from "express";
import { ParticipanteController } from "../controllers/participante.controller";
import { IParticipanteRepository } from "../../domain/repositories/participante.repository.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";

export const createParticipanteRouter = (
  repository: IParticipanteRepository,
): Router => {
  const router = Router();
  const controller = new ParticipanteController(repository);

  router.post("/participantes", controller.create);
  router.get(
    "/participantes",
    authMiddleware,
    roleMiddleware(["coordenador", "administrador"]),
    controller.list,
  );
  router.get("/participantes/:id", authMiddleware, controller.get);
  router.put(
    "/participantes/:id",
    authMiddleware,
    roleMiddleware(["coordenador", "administrador"]),
    controller.update,
  );
  router.delete(
    "/participantes/:id",
    authMiddleware,
    roleMiddleware(["administrador"]),
    controller.remove,
  );

  return router;
};
