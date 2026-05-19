import { Router } from 'express'
import { ParticipanteController } from '../controllers/participante.controller'
import { IParticipanteRepository } from '../../domain/repositories/participante.repository.interface'

export const createParticipanteRouter = (repository: IParticipanteRepository): Router => {
  const router = Router()
  const controller = new ParticipanteController(repository)

  router.post('/participantes', controller.create)
  router.get('/participantes', controller.list)
  router.get('/participantes/:id', controller.get)
  router.put('/participantes/:id', controller.update)
  router.delete('/participantes/:id', controller.remove)

  return router
}
