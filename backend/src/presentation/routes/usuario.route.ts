import { Router, Request, Response, NextFunction } from 'express'
import { UsuarioController } from '../controllers/usuario.controller'
import { IUsuarioRepository } from '../../domain/repositories/usuario.repository.interface'
import { authMiddleware } from '../middlewares/auth.middleware'
import { roleMiddleware } from '../middlewares/role.middleware'

function ownerOrAdminMiddleware(req: Request, res: Response, next: NextFunction) {
  if (!req.user) return res.status(401).json({ error: 'Nao autenticado' })
  const targetId = Number(req.params.id)
  if (req.user.tipo === 'administrador' || req.user.id === targetId) {
    return next()
  }
  return res.status(403).json({ error: 'Acesso negado' })
}

export const createUsuarioRouter = (repository: IUsuarioRepository): Router => {
  const router = Router()
  const controller = new UsuarioController(repository)

  router.post('/usuarios', controller.create)
  router.get('/usuarios', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.list)
  router.get('/usuarios/:id', authMiddleware, controller.get)
  router.put('/usuarios/:id', authMiddleware, ownerOrAdminMiddleware, controller.update)
  router.delete('/usuarios/:id', authMiddleware, roleMiddleware(['administrador']), controller.remove)

  return router
}
