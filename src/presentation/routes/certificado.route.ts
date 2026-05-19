import { Router } from 'express'
import { CertificadoController } from '../controllers/certificado.controller'
import { ICertificadoRepository } from '../../domain/repositories/certificado.repository.interface'

export const createCertificadoRouter = (repository: ICertificadoRepository): Router => {
  const router = Router()
  const controller = new CertificadoController(repository)

  router.post('/certificados', controller.create)
  router.get('/certificados', controller.list)
  router.get('/certificados/participante/:participante_id', controller.listByParticipante)
  router.get('/certificados/:codigo', controller.get)
  router.put('/certificados/:codigo', controller.update)
  router.delete('/certificados/:codigo', controller.remove)

  return router
}
