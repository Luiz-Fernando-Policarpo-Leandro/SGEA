import { pool } from '../../infra/database/connection'
import { IInscricaoRepository } from '../../domain/repositories/inscricao.repository.interface'
import { Inscricao, InscricaoWithEvento, InscricaoWithParticipante } from '../../domain/entities/inscricao.entity'

export class InscricaoRepository implements IInscricaoRepository {
async create(data: Omit<Inscricao, 'id'>): Promise<Inscricao> {
const { status, participante_id, evento_id } = data
const result = await pool.query(
'INSERT INTO inscricoes (status, participante_id, evento_id) VALUES ($1, $2, $3) RETURNING *',
[status || 'pendente', participante_id, evento_id],
)
return result.rows[0]
}

async findAll(): Promise<Inscricao[]> {
const result = await pool.query('SELECT * FROM inscricoes')
return result.rows
}

async findById(id: number): Promise<Inscricao | null> {
const result = await pool.query('SELECT * FROM inscricoes WHERE id = $1', [id])
return result.rows[0] || null
}

async findByParticipante(participante_id: number): Promise<InscricaoWithEvento[]> {
const result = await pool.query(
'SELECT i.*, e.nome as evento_nome FROM inscricoes i JOIN eventos e ON i.evento_id = e.id WHERE i.participante_id = $1',
[participante_id],
)
return result.rows
}

async findByEvento(evento_id: number): Promise<InscricaoWithParticipante[]> {
const result = await pool.query(
'SELECT i.*, u.nome as participante_nome FROM inscricoes i JOIN participantes p ON i.participante_id = p.usuario_id JOIN usuarios u ON p.usuario_id = u.id WHERE i.evento_id = $1',
[evento_id],
)
return result.rows
}

async update(id: number, data: Partial<Inscricao>): Promise<Inscricao | null> {
const result = await pool.query(
'UPDATE inscricoes SET status=$1 WHERE id=$2 RETURNING *',
[data.status, id],
)
return result.rows[0] || null
}

async delete(id: number): Promise<boolean> {
const result = await pool.query('DELETE FROM inscricoes WHERE id = $1 RETURNING id', [id])
return !!result.rows[0]
}

async participanteExists(participante_id: number): Promise<boolean> {
const result = await pool.query('SELECT usuario_id FROM participantes WHERE usuario_id = $1', [participante_id])
return !!result.rows[0]
}

  async eventoExists(evento_id: number): Promise<boolean> {
    const result = await pool.query('SELECT id FROM eventos WHERE id = $1', [evento_id])
    return !!result.rows[0]
  }

  async findByParticipanteAndEvento(participante_id: number, evento_id: number): Promise<Inscricao | null> {
    const result = await pool.query(
      'SELECT * FROM inscricoes WHERE participante_id = $1 AND evento_id = $2 AND status != $3',
      [participante_id, evento_id, 'cancelada'],
    )
    return result.rows[0] || null
  }
}
