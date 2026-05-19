import { Atividade } from '../entities/atividade.entity'

export interface IAtividadeRepository {
  create(data: Omit<Atividade, 'id'>): Promise<Atividade>
  findAll(): Promise<Atividade[]>
  findById(id: number): Promise<Atividade | null>
  findByEventoId(evento_id: number): Promise<Atividade[]>
  update(id: number, data: Partial<Atividade>): Promise<Atividade | null>
  delete(id: number): Promise<boolean>
  exists(id: number): Promise<boolean>
}
