import { Router } from 'express'
import { UsuarioController } from '../controllers/usuario.controller'
import { IUsuarioRepository } from '../../domain/repositories/usuario.repository.interface'

export const createUsuarioRouter = (repository: IUsuarioRepository): Router => {
  const router = Router()
  const controller = new UsuarioController(repository)

  router.post('/usuarios', controller.create)
  router.get('/usuarios', controller.list)
  router.get('/usuarios/:id', controller.get)
  router.put('/usuarios/:id', controller.update)
  router.delete('/usuarios/:id', controller.remove)

  return router
}
