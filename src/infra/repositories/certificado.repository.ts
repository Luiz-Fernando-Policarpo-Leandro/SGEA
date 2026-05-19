import { pool } from '../../infra/database/connection'
import { ICertificadoRepository } from '../../domain/repositories/certificado.repository.interface'
import { Certificado, CertificadoWithEvento } from '../../domain/entities/certificado.entity'

export class CertificadoRepository implements ICertificadoRepository {
  async create(data: Certificado): Promise<Certificado> {
    const { codigo, cargaHoraria, status, participante_id, evento_id } = data
    const result = await pool.query(
      'INSERT INTO Certificado (codigo, cargaHoraria, status, participante_id, evento_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [codigo, cargaHoraria, status, participante_id, evento_id],
    )
    return result.rows[0]
  }

  async findAll(): Promise<Certificado[]> {
    const result = await pool.query('SELECT * FROM Certificado')
    return result.rows
  }

  async findByCodigo(codigo: string): Promise<Certificado | null> {
    const result = await pool.query('SELECT * FROM Certificado WHERE codigo = $1', [codigo])
    return result.rows[0] || null
  }

  async findByParticipante(participante_id: number): Promise<CertificadoWithEvento[]> {
    const result = await pool.query(
      'SELECT c.*, e.nome as evento_nome FROM Certificado c JOIN Evento e ON c.evento_id = e.id WHERE c.participante_id = $1',
      [participante_id],
    )
    return result.rows
  }

  async update(codigo: string, data: Partial<Certificado>): Promise<Certificado | null> {
    const { cargaHoraria, status, participante_id, evento_id } = data
    const result = await pool.query(
      'UPDATE Certificado SET cargaHoraria=$1, status=$2, participante_id=$3, evento_id=$4 WHERE codigo=$5 RETURNING *',
      [cargaHoraria, status, participante_id, evento_id, codigo],
    )
    return result.rows[0] || null
  }

  async delete(codigo: string): Promise<boolean> {
    const result = await pool.query('DELETE FROM Certificado WHERE codigo = $1 RETURNING codigo', [codigo])
    return !!result.rows[0]
  }

  async participanteExists(participante_id: number): Promise<boolean> {
    const result = await pool.query('SELECT usuario_id FROM Participante WHERE usuario_id = $1', [participante_id])
    return !!result.rows[0]
  }

  async eventoExists(evento_id: number): Promise<boolean> {
    const result = await pool.query('SELECT id FROM Evento WHERE id = $1', [evento_id])
    return !!result.rows[0]
  }
}
