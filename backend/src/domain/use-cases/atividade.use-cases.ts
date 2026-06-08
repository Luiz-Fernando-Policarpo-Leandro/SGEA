import { IAtividadeRepository } from "../../domain/repositories/atividade.repository.interface";
import { Atividade } from "../../domain/entities/atividade.entity";

export class CreateAtividadeUseCase {
  constructor(private repository: IAtividadeRepository) {}

  async execute(data: Omit<Atividade, "id">): Promise<Atividade> {
    return this.repository.create(data);
  }
}

export class ListAtividadesUseCase {
  constructor(private repository: IAtividadeRepository) {}

  async execute(): Promise<Atividade[]> {
    return this.repository.findAll();
  }
}

export class GetAtividadeUseCase {
  constructor(private repository: IAtividadeRepository) {}

  async execute(id: number): Promise<Atividade | null> {
    return this.repository.findById(id);
  }
}

export class ListAtividadesByEventoUseCase {
  constructor(private repository: IAtividadeRepository) {}

  async execute(evento_id: number): Promise<Atividade[]> {
    return this.repository.findByEventoId(evento_id);
  }
}

export class UpdateAtividadeUseCase {
  constructor(private repository: IAtividadeRepository) {}

  async execute(
    id: number,
    data: Partial<Atividade>,
  ): Promise<Atividade | null> {
    return this.repository.update(id, data);
  }
}

export class DeleteAtividadeUseCase {
  constructor(private repository: IAtividadeRepository) {}

  async execute(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}
