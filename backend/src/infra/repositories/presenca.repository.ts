import { pool } from '../../infra/database/connection'
import { IPresencaRepository } from '../../domain/repositories/presenca.repository.interface'
import { Presenca, PresencaWithAtividade, PresencaWithParticipante } from '../../domain/entities/presenca.entity'

export class PresencaRepository implements IPresencaRepository {
async create(data: Presenca): Promise<Presenca> {
const { checkIn, checkOut, participante_id, atividade_id } = data
const result = await pool.query(
'INSERT INTO presencas (checkIn, checkOut, participante_id, atividade_id) VALUES ($1, $2, $3, $4) RETURNING *',
[checkIn || new Date(), checkOut, participante_id, atividade_id],
)
return result.rows[0]
}

async findAll(): Promise<Presenca[]> {
const result = await pool.query('SELECT * FROM presencas')
return result.rows
}

async findByKeys(participante_id: number, atividade_id: number): Promise<Presenca | null> {
const result = await pool.query(
'SELECT * FROM presencas WHERE participante_id = $1 AND atividade_id = $2',
[participante_id, atividade_id],
)
return result.rows[0] || null
}

async findByParticipante(participante_id: number): Promise<PresencaWithAtividade[]> {
const result = await pool.query(
'SELECT p.*, a.titulo as atividade_titulo FROM presencas p JOIN atividades a ON p.atividade_id = a.id WHERE p.participante_id = $1',
[participante_id],
)
return result.rows
}

async findByAtividade(atividade_id: number): Promise<PresencaWithParticipante[]> {
const result = await pool.query(
'SELECT p.*, u.nome as participante_nome FROM presencas p JOIN participantes pa ON p.participante_id = pa.usuario_id JOIN usuarios u ON pa.usuario_id = u.id WHERE p.atividade_id = $1',
[atividade_id],
)
return result.rows
}

async update(participante_id: number, atividade_id: number, data: Partial<Presenca>): Promise<Presenca | null> {
const result = await pool.query(
'UPDATE presencas SET checkIn=$1, checkOut=$2 WHERE participante_id=$3 AND atividade_id=$4 RETURNING *',
[data.checkIn, data.checkOut, participante_id, atividade_id],
)
return result.rows[0] || null
}

async delete(participante_id: number, atividade_id: number): Promise<boolean> {
const result = await pool.query(
'DELETE FROM presencas WHERE participante_id = $1 AND atividade_id = $2 RETURNING participante_id',
[participante_id, atividade_id],
)
return !!result.rows[0]
}

async participanteExists(participante_id: number): Promise<boolean> {
const result = await pool.query('SELECT usuario_id FROM participantes WHERE usuario_id = $1', [participante_id])
return !!result.rows[0]
}

async atividadeExists(atividade_id: number): Promise<boolean> {
const result = await pool.query('SELECT id FROM atividades WHERE id = $1', [atividade_id])
return !!result.rows[0]
}
}
