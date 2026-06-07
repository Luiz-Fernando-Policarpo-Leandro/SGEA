import { pool } from "../../infra/database/connection";
import { IAdministradorRepository } from "../../domain/repositories/administrador.repository.interface";
import {
  Administrador,
  AdministradorWithUser,
} from "../../domain/entities/administrador.entity";

export class AdministradorRepository implements IAdministradorRepository {
  async create(data: Administrador): Promise<Administrador> {
    const result = await pool.query(
      "INSERT INTO administradores (usuario_id) VALUES ($1) RETURNING *",
      [data.usuario_id],
    );
    return result.rows[0];
  }

  async findAll(): Promise<AdministradorWithUser[]> {
    const result = await pool.query(
      "SELECT a.*, u.nome, u.email FROM administradores a JOIN usuarios u ON a.usuario_id = u.id",
    );
    return result.rows;
  }

  async findById(usuario_id: number): Promise<AdministradorWithUser | null> {
    const result = await pool.query(
      "SELECT a.*, u.nome, u.email FROM administradores a JOIN usuarios u ON a.usuario_id = u.id WHERE a.usuario_id = $1",
      [usuario_id],
    );
    return result.rows[0] || null;
  }

  async delete(usuario_id: number): Promise<boolean> {
    const result = await pool.query(
      "DELETE FROM administradores WHERE usuario_id = $1 RETURNING usuario_id",
      [usuario_id],
    );
    return !!result.rows[0];
  }

  async exists(usuario_id: number): Promise<boolean> {
    const result = await pool.query(
      "SELECT usuario_id FROM administradores WHERE usuario_id = $1",
      [usuario_id],
    );
    return !!result.rows[0];
  }
}
