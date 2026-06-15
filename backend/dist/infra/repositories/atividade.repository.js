"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtividadeRepository = void 0;
const connection_1 = require("../../infra/database/connection");
class AtividadeRepository {
    async create(data) {
        const { titulo, tipo, cargaHoraria, vagas, local, horario_inicio, horario_fim, responsavel, evento_id, } = data;
        const result = await connection_1.pool.query("INSERT INTO atividades (titulo, tipo, cargaHoraria, vagas, local, horario_inicio, horario_fim, responsavel, evento_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [
            titulo,
            tipo,
            cargaHoraria,
            vagas,
            local,
            horario_inicio,
            horario_fim,
            responsavel,
            evento_id,
        ]);
        return result.rows[0];
    }
    async findAll() {
        const result = await connection_1.pool.query("SELECT * FROM atividades");
        return result.rows;
    }
    async findById(id) {
        const result = await connection_1.pool.query("SELECT * FROM atividades WHERE id = $1", [
            id,
        ]);
        return result.rows[0] || null;
    }
    async findByEventoId(evento_id) {
        const result = await connection_1.pool.query("SELECT * FROM atividades WHERE evento_id = $1", [evento_id]);
        return result.rows;
    }
    async update(id, data) {
        const { titulo, tipo, cargaHoraria, vagas, local, horario_inicio, horario_fim, responsavel, evento_id, } = data;
        const result = await connection_1.pool.query("UPDATE atividades SET titulo=$1, tipo=$2, cargaHoraria=$3, vagas=$4, local=$5, horario_inicio=$6, horario_fim=$7, responsavel=$8, evento_id=$9 WHERE id=$10 RETURNING *", [
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
        ]);
        return result.rows[0] || null;
    }
    async delete(id) {
        const result = await connection_1.pool.query("DELETE FROM atividades WHERE id = $1 RETURNING id", [id]);
        return !!result.rows[0];
    }
    async exists(id) {
        const result = await connection_1.pool.query("SELECT id FROM atividades WHERE id = $1", [
            id,
        ]);
        return !!result.rows[0];
    }
}
exports.AtividadeRepository = AtividadeRepository;
//# sourceMappingURL=atividade.repository.js.map