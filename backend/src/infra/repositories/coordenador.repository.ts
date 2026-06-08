import { pool } from "../../infra/database/connection";
import { ICoordenadorRepository } from "../../domain/repositories/coordenador.repository.interface";
import {
  Coordenador,
  CoordenadorWithUser,
} from "../../domain/entities/coordenador.entity";

export class CoordenadorRepository implements ICoordenadorRepository {
  async create(data: Coordenador): Promise<Coordenador> {
    const result = await pool.query(
      "INSERT INTO coordenadores (usuario_id) VALUES ($1) RETURNING *",
      [data.usuario_id],
    );
    return result.rows[0];
  }

  async findAll(): Promise<CoordenadorWithUser[]> {
    const result = await pool.query(
      "SELECT c.*, u.nome, u.email FROM coordenadores c JOIN usuarios u ON c.usuario_id = u.id",
    );
    return result.rows;
  }

  async findById(usuario_id: number): Promise<CoordenadorWithUser | null> {
    const result = await pool.query(
      "SELECT c.*, u.nome, u.email FROM coordenadores c JOIN usuarios u ON c.usuario_id = u.id WHERE c.usuario_id = $1",
      [usuario_id],
    );
    return result.rows[0] || null;
  }

  async delete(usuario_id: number): Promise<boolean> {
    const result = await pool.query(
      "DELETE FROM coordenadores WHERE usuario_id = $1 RETURNING usuario_id",
      [usuario_id],
    );
    return !!result.rows[0];
  }

  async exists(usuario_id: number): Promise<boolean> {
    const result = await pool.query(
      "SELECT usuario_id FROM coordenadores WHERE usuario_id = $1",
      [usuario_id],
    );
    return !!result.rows[0];
  }
}
