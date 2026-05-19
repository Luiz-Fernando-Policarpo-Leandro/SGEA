"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipanteRepository = void 0;
const connection_1 = require("../../infra/database/connection");
class ParticipanteRepository {
    async create(data) {
        const result = await connection_1.pool.query('INSERT INTO Participante (usuario_id, categoria) VALUES ($1, $2) RETURNING *', [data.usuario_id, data.categoria]);
        return result.rows[0];
    }
    async findAll() {
        const result = await connection_1.pool.query('SELECT p.*, u.nome, u.email FROM Participante p JOIN Usuario u ON p.usuario_id = u.id');
        return result.rows;
    }
    async findById(usuario_id) {
        const result = await connection_1.pool.query('SELECT p.*, u.nome, u.email FROM Participante p JOIN Usuario u ON p.usuario_id = u.id WHERE p.usuario_id = $1', [usuario_id]);
        return result.rows[0] || null;
    }
    async update(usuario_id, data) {
        const result = await connection_1.pool.query('UPDATE Participante SET categoria=$1 WHERE usuario_id=$2 RETURNING *', [data.categoria, usuario_id]);
        return result.rows[0] || null;
    }
    async delete(usuario_id) {
        const result = await connection_1.pool.query('DELETE FROM Participante WHERE usuario_id = $1 RETURNING usuario_id', [usuario_id]);
        return !!result.rows[0];
    }
    async exists(usuario_id) {
        const result = await connection_1.pool.query('SELECT usuario_id FROM Participante WHERE usuario_id = $1', [usuario_id]);
        return !!result.rows[0];
    }
}
exports.ParticipanteRepository = ParticipanteRepository;
//# sourceMappingURL=participante.repository.js.map