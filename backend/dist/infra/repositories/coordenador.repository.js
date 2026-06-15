"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordenadorRepository = void 0;
const connection_1 = require("../../infra/database/connection");
class CoordenadorRepository {
    async create(data) {
        const result = await connection_1.pool.query("INSERT INTO coordenadores (usuario_id) VALUES ($1) RETURNING *", [data.usuario_id]);
        return result.rows[0];
    }
    async findAll() {
        const result = await connection_1.pool.query("SELECT c.*, u.nome, u.email FROM coordenadores c JOIN usuarios u ON c.usuario_id = u.id");
        return result.rows;
    }
    async findById(usuario_id) {
        const result = await connection_1.pool.query("SELECT c.*, u.nome, u.email FROM coordenadores c JOIN usuarios u ON c.usuario_id = u.id WHERE c.usuario_id = $1", [usuario_id]);
        return result.rows[0] || null;
    }
    async delete(usuario_id) {
        const result = await connection_1.pool.query("DELETE FROM coordenadores WHERE usuario_id = $1 RETURNING usuario_id", [usuario_id]);
        return !!result.rows[0];
    }
    async exists(usuario_id) {
        const result = await connection_1.pool.query("SELECT usuario_id FROM coordenadores WHERE usuario_id = $1", [usuario_id]);
        return !!result.rows[0];
    }
}
exports.CoordenadorRepository = CoordenadorRepository;
//# sourceMappingURL=coordenador.repository.js.map