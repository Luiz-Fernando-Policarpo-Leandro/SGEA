import { Router } from 'express'
import { InscricaoController } from '../controllers/inscricao.controller'
import { IInscricaoRepository } from '../../domain/repositories/inscricao.repository.interface'
import { authMiddleware } from '../middlewares/auth.middleware'
import { roleMiddleware } from '../middlewares/role.middleware'

export const createInscricaoRouter = (repository: IInscricaoRepository): Router => {
const router = Router()
const controller = new InscricaoController(repository)

router.post('/inscricoes', authMiddleware, controller.create)
router.get('/inscricoes', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.list)
router.get('/inscricoes/participante/:participante_id', authMiddleware, controller.listByParticipante)
router.get('/inscricoes/evento/:evento_id', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.listByEvento)
router.get('/inscricoes/:id', authMiddleware, controller.get)
router.put('/inscricoes/:id', authMiddleware, roleMiddleware(['coordenador', 'administrador']), controller.update)
router.delete('/inscricoes/:id', authMiddleware, controller.remove)

return router
}
