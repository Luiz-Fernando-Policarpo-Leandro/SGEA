import { Router } from 'express'
import { AtividadeController } from '../controllers/atividade.controller'
import { IAtividadeRepository } from '../../domain/repositories/atividade.repository.interface'

export const createAtividadeRouter = (repository: IAtividadeRepository): Router => {
  const router = Router()
  const controller = new AtividadeController(repository)

  router.post('/atividades', controller.create)
  router.get('/atividades', controller.list)
  router.get('/atividades/evento/:evento_id', controller.listByEvento)
  router.get('/atividades/:id', controller.get)
  router.put('/atividades/:id', controller.update)
  router.delete('/atividades/:id', controller.remove)

  return router
}
