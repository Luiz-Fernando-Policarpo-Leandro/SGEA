import { Router } from 'express'
import { AdministradorController } from '../controllers/administrador.controller'
import { IAdministradorRepository } from '../../domain/repositories/administrador.repository.interface'
import { authMiddleware } from '../middlewares/auth.middleware'
import { roleMiddleware } from '../middlewares/role.middleware'

export const createAdministradorRouter = (repository: IAdministradorRepository): Router => {
const router = Router()
const controller = new AdministradorController(repository)

router.post('/administradores', authMiddleware, roleMiddleware(['administrador']), controller.create)
router.get('/administradores', authMiddleware, roleMiddleware(['administrador']), controller.list)
router.get('/administradores/:id', authMiddleware, roleMiddleware(['administrador']), controller.get)
router.delete('/administradores/:id', authMiddleware, roleMiddleware(['administrador']), controller.remove)

return router
}
