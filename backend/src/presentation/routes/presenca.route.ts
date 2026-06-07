import { Router } from 'express'
import { PresencaController } from '../controllers/presenca.controller'
import { IPresencaRepository } from '../../domain/repositories/presenca.repository.interface'
import { authMiddleware } from '../middlewares/auth.middleware'
import { roleMiddleware } from '../middlewares/role.middleware'

export const createPresencaRouter = (repository: IPresencaRepository): Router => {
const router = Router()
const controller = new PresencaController(repository)

router.post('/presencas', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.create)
router.get('/presencas', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.list)
router.get('/presencas/participante/:participante_id', authMiddleware, controller.listByParticipante)
router.get('/presencas/atividade/:atividade_id', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.listByAtividade)
router.get('/presencas/:participante_id/:atividade_id', authMiddleware, controller.get)
router.put('/presencas/:participante_id/:atividade_id', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.update)
router.delete('/presencas/:participante_id/:atividade_id', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.remove)

return router
}
