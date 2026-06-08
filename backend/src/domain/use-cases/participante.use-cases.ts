import { IParticipanteRepository } from "../../domain/repositories/participante.repository.interface";
import {
  Participante,
  ParticipanteWithUser,
} from "../../domain/entities/participante.entity";

export class CreateParticipanteUseCase {
  constructor(private repository: IParticipanteRepository) {}

  async execute(data: Participante): Promise<Participante> {
    const exists = await this.repository.exists(data.usuario_id);
    if (exists) throw new Error("Participante ja cadastrado");

    return this.repository.create(data);
  }
}

export class ListParticipantesUseCase {
  constructor(private repository: IParticipanteRepository) {}

  async execute(): Promise<ParticipanteWithUser[]> {
    return this.repository.findAll();
  }
}

export class GetParticipanteUseCase {
  constructor(private repository: IParticipanteRepository) {}

  async execute(usuario_id: number): Promise<ParticipanteWithUser | null> {
    return this.repository.findById(usuario_id);
  }
}

export class UpdateParticipanteUseCase {
  constructor(private repository: IParticipanteRepository) {}

  async execute(
    usuario_id: number,
    data: Partial<Participante>,
  ): Promise<Participante | null> {
    return this.repository.update(usuario_id, data);
  }
}

export class DeleteParticipanteUseCase {
  constructor(private repository: IParticipanteRepository) {}

  async execute(usuario_id: number): Promise<boolean> {
    return this.repository.delete(usuario_id);
  }
}
