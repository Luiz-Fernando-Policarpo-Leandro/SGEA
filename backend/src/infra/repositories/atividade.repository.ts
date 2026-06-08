import { pool } from "../../infra/database/connection";
import { IAtividadeRepository } from "../../domain/repositories/atividade.repository.interface";
import { Atividade } from "../../domain/entities/atividade.entity";

export class AtividadeRepository implements IAtividadeRepository {
  async create(data: Omit<Atividade, "id">): Promise<Atividade> {
    const {
      titulo,
      tipo,
      cargaHoraria,
      vagas,
      local,
      horario_inicio,
      horario_fim,
      responsavel,
      evento_id,
    } = data;
    const result = await pool.query(
      "INSERT INTO atividades (titulo, tipo, cargaHoraria, vagas, local, horario_inicio, horario_fim, responsavel, evento_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        titulo,
        tipo,
        cargaHoraria,
        vagas,
        local,
        horario_inicio,
        horario_fim,
        responsavel,
        evento_id,
      ],
    );
    return result.rows[0];
  }

  async findAll(): Promise<Atividade[]> {
    const result = await pool.query("SELECT * FROM atividades");
    return result.rows;
  }

  async findById(id: number): Promise<Atividade | null> {
    const result = await pool.query("SELECT * FROM atividades WHERE id = $1", [
      id,
    ]);
    return result.rows[0] || null;
  }

  async findByEventoId(evento_id: number): Promise<Atividade[]> {
    const result = await pool.query(
      "SELECT * FROM atividades WHERE evento_id = $1",
      [evento_id],
    );
    return result.rows;
  }

  async update(
    id: number,
    data: Partial<Atividade>,
  ): Promise<Atividade | null> {
    const {
      titulo,
      tipo,
      cargaHoraria,
      vagas,
      local,
      horario_inicio,
      horario_fim,
      responsavel,
      evento_id,
    } = data;
    const result = await pool.query(
      "UPDATE atividades SET titulo=$1, tipo=$2, cargaHoraria=$3, vagas=$4, local=$5, horario_inicio=$6, horario_fim=$7, responsavel=$8, evento_id=$9 WHERE id=$10 RETURNING *",
      [
        titulo,
        tipo,
        cargaHoraria,
        vagas,
        local,
        horario_inicio,
        horario_fim,
        responsavel,
        evento_id,
        id,
      ],
    );
    return result.rows[0] || null;
  }

  async delete(id: number): Promise<boolean> {
    const result = await pool.query(
      "DELETE FROM atividades WHERE id = $1 RETURNING id",
      [id],
    );
    return !!result.rows[0];
  }

  async exists(id: number): Promise<boolean> {
    const result = await pool.query("SELECT id FROM atividades WHERE id = $1", [
      id,
    ]);
    return !!result.rows[0];
  }
}
