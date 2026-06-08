import { IInscricaoRepository } from '../../domain/repositories/inscricao.repository.interface'
import { Inscricao, InscricaoWithEvento, InscricaoWithParticipante } from '../../domain/entities/inscricao.entity'

export class CreateInscricaoUseCase {
  constructor(private repository: IInscricaoRepository) {}

  async execute(data: Omit<Inscricao, 'id'>): Promise<Inscricao> {
    const participanteExists = await this.repository.participanteExists(data.participante_id)
    if (!participanteExists) throw new Error('Participante nao encontrado')

    const eventoExists = await this.repository.eventoExists(data.evento_id)
    if (!eventoExists) throw new Error('Evento nao encontrado')

    const existing = await this.repository.findByParticipanteAndEvento(data.participante_id, data.evento_id)
    if (existing) throw new Error('Participante ja inscrito neste evento')

    return this.repository.create(data)
  }
}

export class ListInscricoesUseCase {
  constructor(private repository: IInscricaoRepository) {}

  async execute(): Promise<Inscricao[]> {
    return this.repository.findAll()
  }
}

export class GetInscricaoUseCase {
  constructor(private repository: IInscricaoRepository) {}

  async execute(id: number): Promise<Inscricao | null> {
    return this.repository.findById(id)
  }
}

export class ListInscricoesByParticipanteUseCase {
  constructor(private repository: IInscricaoRepository) {}

  async execute(participante_id: number): Promise<InscricaoWithEvento[]> {
    return this.repository.findByParticipante(participante_id)
  }
}

export class ListInscricoesByEventoUseCase {
  constructor(private repository: IInscricaoRepository) {}

  async execute(evento_id: number): Promise<InscricaoWithParticipante[]> {
    return this.repository.findByEvento(evento_id)
  }
}

export class UpdateInscricaoUseCase {
  constructor(private repository: IInscricaoRepository) {}

  async execute(id: number, data: Partial<Inscricao>): Promise<Inscricao | null> {
    return this.repository.update(id, data)
  }
}

export class DeleteInscricaoUseCase {
  constructor(private repository: IInscricaoRepository) {}

  async execute(id: number): Promise<boolean> {
    return this.repository.delete(id)
  }
}
