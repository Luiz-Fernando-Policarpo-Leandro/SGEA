import { IEventoRepository } from "../../domain/repositories/evento.repository.interface";
import { Evento } from "../../domain/entities/evento.entity";
export declare class CreateEventoUseCase {
  private repository;
  constructor(repository: IEventoRepository);
  execute(data: Omit<Evento, "id">): Promise<Evento>;
}
export declare class ListEventosUseCase {
  private repository;
  constructor(repository: IEventoRepository);
  execute(): Promise<Evento[]>;
}
export declare class GetEventoUseCase {
  private repository;
  constructor(repository: IEventoRepository);
  execute(id: number): Promise<Evento | null>;
}
export declare class UpdateEventoUseCase {
  private repository;
  constructor(repository: IEventoRepository);
  execute(id: number, data: Partial<Evento>): Promise<Evento | null>;
}
export declare class DeleteEventoUseCase {
  private repository;
  constructor(repository: IEventoRepository);
  execute(id: number): Promise<boolean>;
}
//# sourceMappingURL=evento.use-cases.d.ts.map
