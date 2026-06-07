import { pool } from '../../infra/database/connection'
import { IAtividadeRepository } from '../../domain/repositories/atividade.repository.interface'
import { Atividade } from '../../domain/entities/atividade.entity'

export class AtividadeRepository implements IAtividadeRepository {
async create(data: Omit<Atividade, 'id'>): Promise<Atividade> {
const { titulo, cargaHoraria, vagas, local, evento_id } = data
const result = await pool.query(
'INSERT INTO atividades (titulo, cargaHoraria, vagas, local, evento_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
[titulo, cargaHoraria, vagas, local, evento_id],
)
return result.rows[0]
}

async findAll(): Promise<Atividade[]> {
const result = await pool.query('SELECT * FROM atividades')
return result.rows
}

async findById(id: number): Promise<Atividade | null> {
const result = await pool.query('SELECT * FROM atividades WHERE id = $1', [id])
return result.rows[0] || null
}

async findByEventoId(evento_id: number): Promise<Atividade[]> {
const result = await pool.query('SELECT * FROM atividades WHERE evento_id = $1', [evento_id])
return result.rows
}

async update(id: number, data: Partial<Atividade>): Promise<Atividade | null> {
const { titulo, cargaHoraria, vagas, local, evento_id } = data
const result = await pool.query(
'UPDATE atividades SET titulo=$1, cargaHoraria=$2, vagas=$3, local=$4, evento_id=$5 WHERE id=$6 RETURNING *',
[titulo, cargaHoraria, vagas, local, evento_id, id],
)
return result.rows[0] || null
}

async delete(id: number): Promise<boolean> {
const result = await pool.query('DELETE FROM atividades WHERE id = $1 RETURNING id', [id])
return !!result.rows[0]
}

async exists(id: number): Promise<boolean> {
const result = await pool.query('SELECT id FROM atividades WHERE id = $1', [id])
return !!result.rows[0]
}
}
