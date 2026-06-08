import { Router } from 'express'
import { CertificadoController } from '../controllers/certificado.controller'
import { ICertificadoRepository } from '../../domain/repositories/certificado.repository.interface'
import { authMiddleware } from '../middlewares/auth.middleware'
import { roleMiddleware } from '../middlewares/role.middleware'

export const createCertificadoRouter = (repository: ICertificadoRepository): Router => {
const router = Router()
const controller = new CertificadoController(repository)

router.post('/certificados', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.create)
router.get('/certificados', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.list)
router.get('/certificados/participante/:participante_id', authMiddleware, controller.listByParticipante)
  router.get('/certificados/:codigo', controller.get)
router.put('/certificados/:codigo', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.update)
router.delete('/certificados/:codigo', authMiddleware, roleMiddleware(['administrador']), controller.remove)

return router
}
