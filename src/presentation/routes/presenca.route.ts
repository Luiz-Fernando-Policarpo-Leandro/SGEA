import { Router } from 'express'
import { PresencaController } from '../controllers/presenca.controller'
import { IPresencaRepository } from '../../domain/repositories/presenca.repository.interface'

export const createPresencaRouter = (repository: IPresencaRepository): Router => {
  const router = Router()
  const controller = new PresencaController(repository)

  router.post('/presencas', controller.create)
  router.get('/presencas', controller.list)
  router.get('/presencas/participante/:participante_id', controller.listByParticipante)
  router.get('/presencas/atividade/:atividade_id', controller.listByAtividade)
  router.get('/presencas/:participante_id/:atividade_id', controller.get)
  router.put('/presencas/:participante_id/:atividade_id', controller.update)
  router.delete('/presencas/:participante_id/:atividade_id', controller.remove)

  return router
}
