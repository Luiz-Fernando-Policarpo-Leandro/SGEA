import { pool } from '../../infra/database/connection'
import { IUsuarioRepository } from '../../domain/repositories/usuario.repository.interface'
import { Usuario, UsuarioWithTipo } from '../../domain/entities/usuario.entity'

export class UsuarioRepository implements IUsuarioRepository {
  async create(data: Omit<Usuario, 'id'>): Promise<Usuario> {
    const { nome, email, senha } = data
    const result = await pool.query(
      'INSERT INTO Usuario (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
      [nome, email, senha],
    )
    return result.rows[0]
  }

  async findAll(): Promise<UsuarioWithTipo[]> {
    const result = await pool.query('SELECT id, nome, email, tipo FROM vw_usuario_tipo ORDER BY id')
    return result.rows
  }

  async findById(id: number): Promise<UsuarioWithTipo | null> {
    const result = await pool.query('SELECT id, nome, email, tipo FROM vw_usuario_tipo WHERE id = $1', [id])
    return result.rows[0] || null
  }

  async update(id: number, data: Partial<Usuario>): Promise<Usuario | null> {
    const { nome, email, senha } = data
    const result = await pool.query(
      'UPDATE Usuario SET nome=$1, email=$2, senha=COALESCE($3, senha) WHERE id=$4 RETURNING id, nome, email',
      [nome, email, senha || null, id],
    )
    return result.rows[0] || null
  }

  async delete(id: number): Promise<boolean> {
    const result = await pool.query('DELETE FROM Usuario WHERE id = $1 RETURNING id', [id])
    return !!result.rows[0]
  }
}
