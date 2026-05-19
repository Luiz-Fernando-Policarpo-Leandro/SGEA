import { Router } from 'express'
import { AdministradorController } from '../controllers/administrador.controller'
import { IAdministradorRepository } from '../../domain/repositories/administrador.repository.interface'

export const createAdministradorRouter = (repository: IAdministradorRepository): Router => {
  const router = Router()
  const controller = new AdministradorController(repository)

  router.post('/administradores', controller.create)
  router.get('/administradores', controller.list)
  router.get('/administradores/:id', controller.get)
  router.delete('/administradores/:id', controller.remove)

  return router
}
