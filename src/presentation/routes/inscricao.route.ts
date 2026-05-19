import { Router } from 'express'
import { InscricaoController } from '../controllers/inscricao.controller'
import { IInscricaoRepository } from '../../domain/repositories/inscricao.repository.interface'

export const createInscricaoRouter = (repository: IInscricaoRepository): Router => {
  const router = Router()
  const controller = new InscricaoController(repository)

  router.post('/inscricoes', controller.create)
  router.get('/inscricoes', controller.list)
  router.get('/inscricoes/participante/:participante_id', controller.listByParticipante)
  router.get('/inscricoes/evento/:evento_id', controller.listByEvento)
  router.get('/inscricoes/:id', controller.get)
  router.put('/inscricoes/:id', controller.update)
  router.delete('/inscricoes/:id', controller.remove)

  return router
}
