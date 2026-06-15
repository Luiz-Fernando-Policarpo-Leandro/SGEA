"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoRepository = void 0;
const connection_1 = require("../../infra/database/connection");
class EventoRepository {
    async create(data) {
        const { nome, instituicao, modalidade, dataInicio, dataFim, status } = data;
        const result = await connection_1.pool.query("INSERT INTO eventos (nome, instituicao, modalidade, dataInicio, dataFim, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [nome, instituicao, modalidade, dataInicio, dataFim, status]);
        return result.rows[0];
    }
    async findAll() {
        const result = await connection_1.pool.query("SELECT * FROM eventos");
        return result.rows;
    }
    async findById(id) {
        const result = await connection_1.pool.query("SELECT * FROM eventos WHERE id = $1", [
            id,
        ]);
        return result.rows[0] || null;
    }
    async update(id, data) {
        const { nome, instituicao, modalidade, dataInicio, dataFim, status } = data;
        const result = await connection_1.pool.query("UPDATE eventos SET nome=$1, instituicao=$2, modalidade=$3, dataInicio=$4, dataFim=$5, status=$6 WHERE id=$7 RETURNING *", [nome, instituicao, modalidade, dataInicio, dataFim, status, id]);
        return result.rows[0] || null;
    }
    async delete(id) {
        const result = await connection_1.pool.query("DELETE FROM eventos WHERE id = $1 RETURNING id", [id]);
        return !!result.rows[0];
    }
}
exports.EventoRepository = EventoRepository;
//# sourceMappingURL=evento.repository.js.map