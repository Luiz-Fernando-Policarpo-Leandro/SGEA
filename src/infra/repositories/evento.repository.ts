import { pool } from '../../infra/database/connection'
import { IEventoRepository } from '../../domain/repositories/evento.repository.interface'
import { Evento } from '../../domain/entities/evento.entity'

export class EventoRepository implements IEventoRepository {
  async create(data: Omit<Evento, 'id'>): Promise<Evento> {
    const { nome, instituicao, modalidade, dataInicio, dataFim, status } = data
    const result = await pool.query(
      'INSERT INTO Evento (nome, instituicao, modalidade, dataInicio, dataFim, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [nome, instituicao, modalidade, dataInicio, dataFim, status],
    )
    return result.rows[0]
  }

  async findAll(): Promise<Evento[]> {
    const result = await pool.query('SELECT * FROM Evento')
    return result.rows
  }

  async findById(id: number): Promise<Evento | null> {
    const result = await pool.query('SELECT * FROM Evento WHERE id = $1', [id])
    return result.rows[0] || null
  }

  async update(id: number, data: Partial<Evento>): Promise<Evento | null> {
    const { nome, instituicao, modalidade, dataInicio, dataFim, status } = data
    const result = await pool.query(
      'UPDATE Evento SET nome=$1, instituicao=$2, modalidade=$3, dataInicio=$4, dataFim=$5, status=$6 WHERE id=$7 RETURNING *',
      [nome, instituicao, modalidade, dataInicio, dataFim, status, id],
    )
    return result.rows[0] || null
  }

  async delete(id: number): Promise<boolean> {
    const result = await pool.query('DELETE FROM Evento WHERE id = $1 RETURNING id', [id])
    return !!result.rows[0]
  }
}
