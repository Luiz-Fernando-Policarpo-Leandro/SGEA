"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const connection_1 = require("../../infra/database/connection");
class UsuarioRepository {
    async create(data) {
        const { nome, email, senha } = data;
        const result = await connection_1.pool.query("INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *", [nome, email, senha]);
        return result.rows[0];
    }
    async findAll() {
        const result = await connection_1.pool.query("SELECT id, nome, email, tipo FROM vw_usuario_tipo ORDER BY id");
        return result.rows;
    }
    async findById(id) {
        const result = await connection_1.pool.query("SELECT id, nome, email, tipo FROM vw_usuario_tipo WHERE id = $1", [id]);
        return result.rows[0] || null;
    }
    async findByEmail(email) {
        const result = await connection_1.pool.query("SELECT id, nome, email, senha, tipo FROM vw_usuario_tipo WHERE email = $1", [email]);
        return result.rows[0] || null;
    }
    async update(id, data) {
        const { nome, email, senha } = data;
        const result = await connection_1.pool.query("UPDATE usuarios SET nome=$1, email=$2, senha=COALESCE($3, senha) WHERE id=$4 RETURNING id, nome, email", [nome, email, senha || null, id]);
        return result.rows[0] || null;
    }
    async delete(id) {
        const result = await connection_1.pool.query("DELETE FROM usuarios WHERE id = $1 RETURNING id", [id]);
        return !!result.rows[0];
    }
}
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuario.repository.js.map