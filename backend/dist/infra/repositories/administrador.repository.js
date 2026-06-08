"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministradorRepository = void 0;
const connection_1 = require("../../infra/database/connection");
class AdministradorRepository {
  async create(data) {
    const result = await connection_1.pool.query(
      "INSERT INTO Administrador (usuario_id) VALUES ($1) RETURNING *",
      [data.usuario_id],
    );
    return result.rows[0];
  }
  async findAll() {
    const result = await connection_1.pool.query(
      "SELECT a.*, u.nome, u.email FROM Administrador a JOIN Usuario u ON a.usuario_id = u.id",
    );
    return result.rows;
  }
  async findById(usuario_id) {
    const result = await connection_1.pool.query(
      "SELECT a.*, u.nome, u.email FROM Administrador a JOIN Usuario u ON a.usuario_id = u.id WHERE a.usuario_id = $1",
      [usuario_id],
    );
    return result.rows[0] || null;
  }
  async delete(usuario_id) {
    const result = await connection_1.pool.query(
      "DELETE FROM Administrador WHERE usuario_id = $1 RETURNING usuario_id",
      [usuario_id],
    );
    return !!result.rows[0];
  }
  async exists(usuario_id) {
    const result = await connection_1.pool.query(
      "SELECT usuario_id FROM Administrador WHERE usuario_id = $1",
      [usuario_id],
    );
    return !!result.rows[0];
  }
}
exports.AdministradorRepository = AdministradorRepository;
//# sourceMappingURL=administrador.repository.js.map
