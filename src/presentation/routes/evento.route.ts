import { Router } from 'express'
import { EventoController } from '../controllers/evento.controller'
import { IEventoRepository } from '../../domain/repositories/evento.repository.interface'

export const createEventoRouter = (repository: IEventoRepository): Router => {
  const router = Router()
  const controller = new EventoController(repository)

  router.post('/eventos', controller.create)
  router.get('/eventos', controller.list)
  router.get('/eventos/:id', controller.get)
  router.put('/eventos/:id', controller.update)
  router.delete('/eventos/:id', controller.remove)

  return router
}
