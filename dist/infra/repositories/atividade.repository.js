"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtividadeRepository = void 0;
const connection_1 = require("../../infra/database/connection");
class AtividadeRepository {
    async create(data) {
        const { titulo, cargaHoraria, vagas, local, evento_id } = data;
        const result = await connection_1.pool.query('INSERT INTO Atividade (titulo, cargaHoraria, vagas, local, evento_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [titulo, cargaHoraria, vagas, local, evento_id]);
        return result.rows[0];
    }
    async findAll() {
        const result = await connection_1.pool.query('SELECT * FROM Atividade');
        return result.rows;
    }
    async findById(id) {
        const result = await connection_1.pool.query('SELECT * FROM Atividade WHERE id = $1', [id]);
        return result.rows[0] || null;
    }
    async findByEventoId(evento_id) {
        const result = await connection_1.pool.query('SELECT * FROM Atividade WHERE evento_id = $1', [evento_id]);
        return result.rows;
    }
    async update(id, data) {
        const { titulo, cargaHoraria, vagas, local, evento_id } = data;
        const result = await connection_1.pool.query('UPDATE Atividade SET titulo=$1, cargaHoraria=$2, vagas=$3, local=$4, evento_id=$5 WHERE id=$6 RETURNING *', [titulo, cargaHoraria, vagas, local, evento_id, id]);
        return result.rows[0] || null;
    }
    async delete(id) {
        const result = await connection_1.pool.query('DELETE FROM Atividade WHERE id = $1 RETURNING id', [id]);
        return !!result.rows[0];
    }
    async exists(id) {
        const result = await connection_1.pool.query('SELECT id FROM Atividade WHERE id = $1', [id]);
        return !!result.rows[0];
    }
}
exports.AtividadeRepository = AtividadeRepository;
//# sourceMappingURL=atividade.repository.js.map