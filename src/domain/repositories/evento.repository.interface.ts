import { Evento } from '../entities/evento.entity'

export interface IEventoRepository {
  create(data: Omit<Evento, 'id'>): Promise<Evento>
  findAll(): Promise<Evento[]>
  findById(id: number): Promise<Evento | null>
  update(id: number, data: Partial<Evento>): Promise<Evento | null>
  delete(id: number): Promise<boolean>
}
