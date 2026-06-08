"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresencaRepository = void 0;
const connection_1 = require("../../infra/database/connection");
class PresencaRepository {
  async create(data) {
    const { checkIn, checkOut, participante_id, atividade_id } = data;
    const result = await connection_1.pool.query(
      "INSERT INTO Presenca (checkIn, checkOut, participante_id, atividade_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [checkIn || new Date(), checkOut, participante_id, atividade_id],
    );
    return result.rows[0];
  }
  async findAll() {
    const result = await connection_1.pool.query("SELECT * FROM Presenca");
    return result.rows;
  }
  async findByKeys(participante_id, atividade_id) {
    const result = await connection_1.pool.query(
      "SELECT * FROM Presenca WHERE participante_id = $1 AND atividade_id = $2",
      [participante_id, atividade_id],
    );
    return result.rows[0] || null;
  }
  async findByParticipante(participante_id) {
    const result = await connection_1.pool.query(
      "SELECT p.*, a.titulo as atividade_titulo FROM Presenca p JOIN Atividade a ON p.atividade_id = a.id WHERE p.participante_id = $1",
      [participante_id],
    );
    return result.rows;
  }
  async findByAtividade(atividade_id) {
    const result = await connection_1.pool.query(
      "SELECT p.*, u.nome as participante_nome FROM Presenca p JOIN Participante pa ON p.participante_id = pa.usuario_id JOIN Usuario u ON pa.usuario_id = u.id WHERE p.atividade_id = $1",
      [atividade_id],
    );
    return result.rows;
  }
  async update(participante_id, atividade_id, data) {
    const result = await connection_1.pool.query(
      "UPDATE Presenca SET checkIn=$1, checkOut=$2 WHERE participante_id=$3 AND atividade_id=$4 RETURNING *",
      [data.checkIn, data.checkOut, participante_id, atividade_id],
    );
    return result.rows[0] || null;
  }
  async delete(participante_id, atividade_id) {
    const result = await connection_1.pool.query(
      "DELETE FROM Presenca WHERE participante_id = $1 AND atividade_id = $2 RETURNING participante_id",
      [participante_id, atividade_id],
    );
    return !!result.rows[0];
  }
  async participanteExists(participante_id) {
    const result = await connection_1.pool.query(
      "SELECT usuario_id FROM Participante WHERE usuario_id = $1",
      [participante_id],
    );
    return !!result.rows[0];
  }
  async atividadeExists(atividade_id) {
    const result = await connection_1.pool.query(
      "SELECT id FROM Atividade WHERE id = $1",
      [atividade_id],
    );
    return !!result.rows[0];
  }
}
exports.PresencaRepository = PresencaRepository;
//# sourceMappingURL=presenca.repository.js.map
