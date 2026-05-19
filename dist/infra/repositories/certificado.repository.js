"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificadoRepository = void 0;
const connection_1 = require("../../infra/database/connection");
class CertificadoRepository {
    async create(data) {
        const { codigo, cargaHoraria, status, participante_id, evento_id } = data;
        const result = await connection_1.pool.query('INSERT INTO Certificado (codigo, cargaHoraria, status, participante_id, evento_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [codigo, cargaHoraria, status, participante_id, evento_id]);
        return result.rows[0];
    }
    async findAll() {
        const result = await connection_1.pool.query('SELECT * FROM Certificado');
        return result.rows;
    }
    async findByCodigo(codigo) {
        const result = await connection_1.pool.query('SELECT * FROM Certificado WHERE codigo = $1', [codigo]);
        return result.rows[0] || null;
    }
    async findByParticipante(participante_id) {
        const result = await connection_1.pool.query('SELECT c.*, e.nome as evento_nome FROM Certificado c JOIN Evento e ON c.evento_id = e.id WHERE c.participante_id = $1', [participante_id]);
        return result.rows;
    }
    async update(codigo, data) {
        const { cargaHoraria, status, participante_id, evento_id } = data;
        const result = await connection_1.pool.query('UPDATE Certificado SET cargaHoraria=$1, status=$2, participante_id=$3, evento_id=$4 WHERE codigo=$5 RETURNING *', [cargaHoraria, status, participante_id, evento_id, codigo]);
        return result.rows[0] || null;
    }
    async delete(codigo) {
        const result = await connection_1.pool.query('DELETE FROM Certificado WHERE codigo = $1 RETURNING codigo', [codigo]);
        return !!result.rows[0];
    }
    async participanteExists(participante_id) {
        const result = await connection_1.pool.query('SELECT usuario_id FROM Participante WHERE usuario_id = $1', [participante_id]);
        return !!result.rows[0];
    }
    async eventoExists(evento_id) {
        const result = await connection_1.pool.query('SELECT id FROM Evento WHERE id = $1', [evento_id]);
        return !!result.rows[0];
    }
}
exports.CertificadoRepository = CertificadoRepository;
//# sourceMappingURL=certificado.repository.js.map