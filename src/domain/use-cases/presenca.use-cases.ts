import { IPresencaRepository } from '../../domain/repositories/presenca.repository.interface'
import { Presenca, PresencaWithAtividade, PresencaWithParticipante } from '../../domain/entities/presenca.entity'

export class CreatePresencaUseCase {
  constructor(private repository: IPresencaRepository) {}

  async execute(data: Presenca): Promise<Presenca> {
    const participanteExists = await this.repository.participanteExists(data.participante_id)
    if (!participanteExists) throw new Error('Participante nao encontrado')

    const atividadeExists = await this.repository.atividadeExists(data.atividade_id)
    if (!atividadeExists) throw new Error('Atividade nao encontrada')

    return this.repository.create(data)
  }
}

export class ListPresencasUseCase {
  constructor(private repository: IPresencaRepository) {}

  async execute(): Promise<Presenca[]> {
    return this.repository.findAll()
  }
}

export class GetPresencaUseCase {
  constructor(private repository: IPresencaRepository) {}

  async execute(participante_id: number, atividade_id: number): Promise<Presenca | null> {
    return this.repository.findByKeys(participante_id, atividade_id)
  }
}

export class ListPresencasByParticipanteUseCase {
  constructor(private repository: IPresencaRepository) {}

  async execute(participante_id: number): Promise<PresencaWithAtividade[]> {
    return this.repository.findByParticipante(participante_id)
  }
}

export class ListPresencasByAtividadeUseCase {
  constructor(private repository: IPresencaRepository) {}

  async execute(atividade_id: number): Promise<PresencaWithParticipante[]> {
    return this.repository.findByAtividade(atividade_id)
  }
}

export class UpdatePresencaUseCase {
  constructor(private repository: IPresencaRepository) {}

  async execute(participante_id: number, atividade_id: number, data: Partial<Presenca>): Promise<Presenca | null> {
    return this.repository.update(participante_id, atividade_id, data)
  }
}

export class DeletePresencaUseCase {
  constructor(private repository: IPresencaRepository) {}

  async execute(participante_id: number, atividade_id: number): Promise<boolean> {
    return this.repository.delete(participante_id, atividade_id)
  }
}
