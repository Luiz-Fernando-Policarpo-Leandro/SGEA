"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCoordenadorUseCase = exports.GetCoordenadorUseCase = exports.ListCoordenadoresUseCase = exports.CreateCoordenadorUseCase = void 0;
class CreateCoordenadorUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const exists = await this.repository.exists(data.usuario_id);
        if (exists)
            throw new Error('Coordenador ja cadastrado');
        return this.repository.create(data);
    }
}
exports.CreateCoordenadorUseCase = CreateCoordenadorUseCase;
class ListCoordenadoresUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return this.repository.findAll();
    }
}
exports.ListCoordenadoresUseCase = ListCoordenadoresUseCase;
class GetCoordenadorUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(usuario_id) {
        return this.repository.findById(usuario_id);
    }
}
exports.GetCoordenadorUseCase = GetCoordenadorUseCase;
class DeleteCoordenadorUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(usuario_id) {
        return this.repository.delete(usuario_id);
    }
}
exports.DeleteCoordenadorUseCase = DeleteCoordenadorUseCase;
//# sourceMappingURL=coordenador.use-cases.js.map