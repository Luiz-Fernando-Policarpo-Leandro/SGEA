import { Router } from 'express'
import { UsuarioController } from '../controllers/usuario.controller'
import { IUsuarioRepository } from '../../domain/repositories/usuario.repository.interface'
import { authMiddleware } from '../middlewares/auth.middleware'
import { roleMiddleware } from '../middlewares/role.middleware'

export const createUsuarioRouter = (repository: IUsuarioRepository): Router => {
const router = Router()
const controller = new UsuarioController(repository)

router.post('/usuarios', controller.create)
router.get('/usuarios', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.list)
router.get('/usuarios/:id', authMiddleware, controller.get)
router.put('/usuarios/:id', authMiddleware, controller.update)
router.delete('/usuarios/:id', authMiddleware, roleMiddleware(['administrador']), controller.remove)

return router
}
