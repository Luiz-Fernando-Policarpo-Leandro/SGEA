"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUsuarioUseCase = exports.UpdateUsuarioUseCase = exports.GetUsuarioUseCase = exports.ListUsuariosUseCase = exports.CreateUsuarioUseCase = void 0;
class CreateUsuarioUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        return this.repository.create(data);
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
//# sourceMappingURL=usuario.use-cases.js.map