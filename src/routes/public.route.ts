import { Request, Response, Router } from 'express';

const publicRouter = Router();

publicRouter.get('/health', (req: Request, res: Response) => {
  return res.json({ status: 'UP' });
});

publicRouter.get('/about', (req: Request, res: Response) => {
  return res.json({
    name: 'o Sistema de Gerenciamento de Eventos Acadêmicos.', 
    objective: 'O objetivo principal deste software é centralizar e automatizar todo o ciclo de vida de eventos educacionais. O escopo abrange desde a etapa inicial de criação e governança pela instituição promotora até a fase final de emissão de certificados validados. O sistema assegura a integridade dos dados processados. Além disso, permite rastrear e auditar todas as ações.', 
    license: "MIT"})

})

export default publicRouter;