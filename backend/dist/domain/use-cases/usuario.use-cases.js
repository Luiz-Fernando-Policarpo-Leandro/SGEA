"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = exports.DeleteUsuarioUseCase = exports.UpdateUsuarioUseCase = exports.GetUsuarioUseCase = exports.ListUsuariosUseCase = exports.CreateUsuarioUseCase = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../../infra/auth/jwt");
class CreateUsuarioUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const hashedSenha = await bcryptjs_1.default.hash(data.senha, 10);
        return this.repository.create({ ...data, senha: hashedSenha });
    }
}
exports.CreateUsuarioUseCase = CreateUsuarioUseCase;
class ListUsuariosUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return this.repository.findAll();
    }
}
exports.ListUsuariosUseCase = ListUsuariosUseCase;
class GetUsuarioUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        return this.repository.findById(id);
    }
}
exports.GetUsuarioUseCase = GetUsuarioUseCase;
class UpdateUsuarioUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id, data) {
        if (data.senha) {
            data.senha = await bcryptjs_1.default.hash(data.senha, 10);
        }
        return this.repository.update(id, data);
    }
}
exports.UpdateUsuarioUseCase = UpdateUsuarioUseCase;
class DeleteUsuarioUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteUsuarioUseCase = DeleteUsuarioUseCase;
class LoginUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(email, senha) {
        const user = await this.repository.findByEmail(email);
        if (!user) {
            throw new Error("Credenciais invalidas");
        }
        const senhaValida = await bcryptjs_1.default.compare(senha, user.senha);
        if (!senhaValida) {
            throw new Error("Credenciais invalidas");
        }
        const payload = {
            id: user.id,
            email: user.email,
            tipo: user.tipo,
        };
        const token = (0, jwt_1.generateToken)(payload);
        return {
            token,
            user: {
                id: user.id,
                nome: user.nome,
                email: user.email,
                tipo: user.tipo,
                perfil_id: user.id,
            },
        };
    }
}
exports.LoginUseCase = LoginUseCase;
//# sourceMappingURL=usuario.use-cases.js.map