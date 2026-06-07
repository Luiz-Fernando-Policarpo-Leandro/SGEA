import { Request, Response } from 'express'
import {
  CreatePresencaUseCase,
  ListPresencasUseCase,
  GetPresencaUseCase,
  ListPresencasByParticipanteUseCase,
  ListPresencasByAtividadeUseCase,
  UpdatePresencaUseCase,
  DeletePresencaUseCase,
} from '../../domain/use-cases/presenca.use-cases'
import { IPresencaRepository } from '../../domain/repositories/presenca.repository.interface'

export class PresencaController {
  constructor(private repository: IPresencaRepository) {}

  create = async (req: Request, res: Response) => {
    try {
      const useCase = new CreatePresencaUseCase(this.repository)
      const result = await useCase.execute(req.body)
      return res.status(201).json(result)
    } catch (error: any) {
      if (error.message === 'Participante nao encontrado' || error.message === 'Atividade nao encontrada') {
        return res.status(400).json({ error: error.message })
      }
      return res.status(500).json({ error: error.message })
    }
  }

  list = async (req: Request, res: Response) => {
    try {
      const useCase = new ListPresencasUseCase(this.repository)
      const result = await useCase.execute()
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  listByParticipante = async (req: Request, res: Response) => {
    try {
      const useCase = new ListPresencasByParticipanteUseCase(this.repository)
      const result = await useCase.execute(Number(req.params.participante_id))
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  listByAtividade = async (req: Request, res: Response) => {
    try {
      const useCase = new ListPresencasByAtividadeUseCase(this.repository)
      const result = await useCase.execute(Number(req.params.atividade_id))
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  get = async (req: Request, res: Response) => {
    try {
      const useCase = new GetPresencaUseCase(this.repository)
      const result = await useCase.execute(Number(req.params.participante_id), Number(req.params.atividade_id))
      if (!result) return res.status(404).json({ error: 'Presenca nao encontrada' })
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const useCase = new UpdatePresencaUseCase(this.repository)
      const result = await useCase.execute(Number(req.params.participante_id), Number(req.params.atividade_id), req.body)
      if (!result) return res.status(404).json({ error: 'Presenca nao encontrada' })
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  remove = async (req: Request, res: Response) => {
    try {
      const useCase = new DeletePresencaUseCase(this.repository)
      const deleted = await useCase.execute(Number(req.params.participante_id), Number(req.params.atividade_id))
      if (!deleted) return res.status(404).json({ error: 'Presenca nao encontrada' })
      return res.status(204).send()
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}
