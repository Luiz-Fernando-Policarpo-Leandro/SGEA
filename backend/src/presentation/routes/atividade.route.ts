import { Router } from "express";
import { AtividadeController } from "../controllers/atividade.controller";
import { IAtividadeRepository } from "../../domain/repositories/atividade.repository.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";

export const createAtividadeRouter = (
  repository: IAtividadeRepository,
): Router => {
  const router = Router();
  const controller = new AtividadeController(repository);

  router.get("/atividades", authMiddleware, controller.list);
  router.get(
    "/atividades/evento/:evento_id",
    authMiddleware,
    controller.listByEvento,
  );
  router.get("/atividades/:id", authMiddleware, controller.get);
  router.post(
    "/atividades",
    authMiddleware,
    roleMiddleware(["coordenador", "administrador"]),
    controller.create,
  );
  router.put(
    "/atividades/:id",
    authMiddleware,
    roleMiddleware(["coordenador", "administrador"]),
    controller.update,
  );
  router.delete(
    "/atividades/:id",
    authMiddleware,
    roleMiddleware(["administrador"]),
    controller.remove,
  );

  return router;
};
