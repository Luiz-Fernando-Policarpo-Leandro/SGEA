"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAtividadeUseCase = exports.UpdateAtividadeUseCase = exports.ListAtividadesByEventoUseCase = exports.GetAtividadeUseCase = exports.ListAtividadesUseCase = exports.CreateAtividadeUseCase = void 0;
class CreateAtividadeUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        return this.repository.create(data);
    }
}
exports.CreateAtividadeUseCase = CreateAtividadeUseCase;
class ListAtividadesUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return this.repository.findAll();
    }
}
exports.ListAtividadesUseCase = ListAtividadesUseCase;
class GetAtividadeUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        return this.repository.findById(id);
    }
}
exports.GetAtividadeUseCase = GetAtividadeUseCase;
class ListAtividadesByEventoUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(evento_id) {
        return this.repository.findByEventoId(evento_id);
    }
}
exports.ListAtividadesByEventoUseCase = ListAtividadesByEventoUseCase;
class UpdateAtividadeUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id, data) {
        return this.repository.update(id, data);
    }
}
exports.UpdateAtividadeUseCase = UpdateAtividadeUseCase;
class DeleteAtividadeUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteAtividadeUseCase = DeleteAtividadeUseCase;
//# sourceMappingURL=atividade.use-cases.js.map