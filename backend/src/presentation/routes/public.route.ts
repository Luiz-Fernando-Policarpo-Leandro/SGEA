import { Router, Request, Response } from "express";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  return res.json({ status: "UP" });
});

router.get("/about", (req: Request, res: Response) => {
  return res.json({
    name: "Sistema de Gerenciamento de Eventos Academicos",
    objective:
      "Centralizar e automatizar todo o ciclo de vida de eventos educacionais.",
    license: "MIT",
  });
});

export default router;
