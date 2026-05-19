import { Router } from 'express'
import { CoordenadorController } from '../controllers/coordenador.controller'
import { ICoordenadorRepository } from '../../domain/repositories/coordenador.repository.interface'

export const createCoordenadorRouter = (repository: ICoordenadorRepository): Router => {
  const router = Router()
  const controller = new CoordenadorController(repository)

  router.post('/coordenadores', controller.create)
  router.get('/coordenadores', controller.list)
  router.get('/coordenadores/:id', controller.get)
  router.delete('/coordenadores/:id', controller.remove)

  return router
}
