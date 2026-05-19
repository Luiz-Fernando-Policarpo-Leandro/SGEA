import { Request, Response } from 'express'
import {
  CreateAtividadeUseCase,
  ListAtividadesUseCase,
  GetAtividadeUseCase,
  ListAtividadesByEventoUseCase,
  UpdateAtividadeUseCase,
  DeleteAtividadeUseCase,
} from '../../domain/use-cases/atividade.use-cases'
import { IAtividadeRepository } from '../../domain/repositories/atividade.repository.interface'

export class AtividadeController {
  constructor(private repository: IAtividadeRepository) {}

  create = async (req: Request, res: Response) => {
    try {
      const useCase = new CreateAtividadeUseCase(this.repository)
      const result = await useCase.execute(req.body)
      return res.status(201).json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  list = async (req: Request, res: Response) => {
    try {
      const useCase = new ListAtividadesUseCase(this.repository)
      const result = await useCase.execute()
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  listByEvento = async (req: Request, res: Response) => {
    try {
      const useCase = new ListAtividadesByEventoUseCase(this.repository)
      const result = await useCase.execute(Number(req.params.evento_id))
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  get = async (req: Request, res: Response) => {
    try {
      const useCase = new GetAtividadeUseCase(this.repository)
      const result = await useCase.execute(Number(req.params.id))
      if (!result) return res.status(404).json({ error: 'Atividade nao encontrada' })
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const useCase = new UpdateAtividadeUseCase(this.repository)
      const result = await useCase.execute(Number(req.params.id), req.body)
      if (!result) return res.status(404).json({ error: 'Atividade nao encontrada' })
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  remove = async (req: Request, res: Response) => {
    try {
      const useCase = new DeleteAtividadeUseCase(this.repository)
      const deleted = await useCase.execute(Number(req.params.id))
      if (!deleted) return res.status(404).json({ error: 'Atividade nao encontrada' })
      return res.status(204).send()
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}
