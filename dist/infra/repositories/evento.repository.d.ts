import { IEventoRepository } from '../../domain/repositories/evento.repository.interface';
import { Evento } from '../../domain/entities/evento.entity';
export declare class EventoRepository implements IEventoRepository {
    create(data: Omit<Evento, 'id'>): Promise<Evento>;
    findAll(): Promise<Evento[]>;
    findById(id: number): Promise<Evento | null>;
    update(id: number, data: Partial<Evento>): Promise<Evento | null>;
    delete(id: number): Promise<boolean>;
}
//# sourceMappingURL=evento.repository.d.ts.map