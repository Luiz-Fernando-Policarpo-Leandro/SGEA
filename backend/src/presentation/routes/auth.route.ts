import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller'
import { IUsuarioRepository } from '../../domain/repositories/usuario.repository.interface'

export const createAuthRouter = (repository: IUsuarioRepository): Router => {
  const router = Router()
  const controller = new AuthController(repository)

  router.post('/login', controller.login)

  return router
}
