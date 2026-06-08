import { IEventoRepository } from "../../domain/repositories/evento.repository.interface";
import { Evento } from "../../domain/entities/evento.entity";

export class CreateEventoUseCase {
  constructor(private repository: IEventoRepository) {}

  async execute(data: Omit<Evento, "id">): Promise<Evento> {
    return this.repository.create(data);
  }
}

export class ListEventosUseCase {
  constructor(private repository: IEventoRepository) {}

  async execute(): Promise<Evento[]> {
    return this.repository.findAll();
  }
}

export class GetEventoUseCase {
  constructor(private repository: IEventoRepository) {}

  async execute(id: number): Promise<Evento | null> {
    return this.repository.findById(id);
  }
}

export class UpdateEventoUseCase {
  constructor(private repository: IEventoRepository) {}

  async execute(id: number, data: Partial<Evento>): Promise<Evento | null> {
    return this.repository.update(id, data);
  }
}

export class DeleteEventoUseCase {
  constructor(private repository: IEventoRepository) {}

  async execute(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}
