import { pool } from '../../infra/database/connection'
import { IParticipanteRepository } from '../../domain/repositories/participante.repository.interface'
import { Participante, ParticipanteWithUser } from '../../domain/entities/participante.entity'

export class ParticipanteRepository implements IParticipanteRepository {
async create(data: Participante): Promise<Participante> {
const result = await pool.query(
'INSERT INTO participantes (usuario_id, categoria) VALUES ($1, $2) RETURNING *',
[data.usuario_id, data.categoria],
)
return result.rows[0]
}

async findAll(): Promise<ParticipanteWithUser[]> {
const result = await pool.query(
'SELECT p.*, u.nome, u.email FROM participantes p JOIN usuarios u ON p.usuario_id = u.id',
)
return result.rows
}

async findById(usuario_id: number): Promise<ParticipanteWithUser | null> {
const result = await pool.query(
'SELECT p.*, u.nome, u.email FROM participantes p JOIN usuarios u ON p.usuario_id = u.id WHERE p.usuario_id = $1',
[usuario_id],
)
return result.rows[0] || null
}

async update(usuario_id: number, data: Partial<Participante>): Promise<Participante | null> {
const result = await pool.query(
'UPDATE participantes SET categoria=$1 WHERE usuario_id=$2 RETURNING *',
[data.categoria, usuario_id],
)
return result.rows[0] || null
}

async delete(usuario_id: number): Promise<boolean> {
const result = await pool.query('DELETE FROM participantes WHERE usuario_id = $1 RETURNING usuario_id', [usuario_id])
return !!result.rows[0]
}

async exists(usuario_id: number): Promise<boolean> {
const result = await pool.query('SELECT usuario_id FROM participantes WHERE usuario_id = $1', [usuario_id])
return !!result.rows[0]
}
}
