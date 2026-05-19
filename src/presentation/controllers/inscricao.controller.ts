import { Request, Response } from 'express'
import {
  CreateInscricaoUseCase,
  ListInscricoesUseCase,
  GetInscricaoUseCase,
  ListInscricoesByParticipanteUseCase,
  ListInscricoesByEventoUseCase,
  UpdateInscricaoUseCase,
  DeleteInscricaoUseCase,
} from '../../domain/use-cases/inscricao.use-cases'
import { IInscricaoRepository } from '../../domain/repositories/inscricao.repository.interface'

export class InscricaoController {
  constructor(private repository: IInscricaoRepository) {}

  create = async (req: Request, res: Response) => {
    try {
      const useCase = new CreateInscricaoUseCase(this.repository)
      const result = await useCase.execute(req.body)
      return res.status(201).json(result)
    } catch (error: any) {
      if (error.message === 'Participante nao encontrado' || error.message === 'Evento nao encontrado') {
        return res.status(400).json({ error: error.message })
      }
      return res.status(500).json({ error: error.message })
    }
  }

  list = async (req: Request, res: Response) => {
    try {
      const useCase = new ListInscricoesUseCase(this.repository)
      const result = await useCase.execute()
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  listByParticipante = async (req: Request, res: Response) => {
    try {
      const useCase = new ListInscricoesByParticipanteUseCase(this.repository)
      const result = await useCase.execute(Number(req.params.participante_id))
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  listByEvento = async (req: Request, res: Response) => {
    try {
      const useCase = new ListInscricoesByEventoUseCase(this.repository)
      const result = await useCase.execute(Number(req.params.evento_id))
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  get = async (req: Request, res: Response) => {
    try {
      const useCase = new GetInscricaoUseCase(this.repository)
      const result = await useCase.execute(Number(req.params.id))
      if (!result) return res.status(404).json({ error: 'Inscricao nao encontrada' })
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const useCase = new UpdateInscricaoUseCase(this.repository)
      const result = await useCase.execute(Number(req.params.id), req.body)
      if (!result) return res.status(404).json({ error: 'Inscricao nao encontrada' })
      return res.json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  remove = async (req: Request, res: Response) => {
    try {
      const useCase = new DeleteInscricaoUseCase(this.repository)
      const deleted = await useCase.execute(Number(req.params.id))
      if (!deleted) return res.status(404).json({ error: 'Inscricao nao encontrada' })
      return res.status(204).send()
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}
