"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEventoUseCase = exports.UpdateEventoUseCase = exports.GetEventoUseCase = exports.ListEventosUseCase = exports.CreateEventoUseCase = void 0;
class CreateEventoUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        return this.repository.create(data);
    }
}
exports.CreateEventoUseCase = CreateEventoUseCase;
class ListEventosUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return this.repository.findAll();
    }
}
exports.ListEventosUseCase = ListEventosUseCase;
class GetEventoUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        return this.repository.findById(id);
    }
}
exports.GetEventoUseCase = GetEventoUseCase;
class UpdateEventoUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id, data) {
        return this.repository.update(id, data);
    }
}
exports.UpdateEventoUseCase = UpdateEventoUseCase;
class DeleteEventoUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteEventoUseCase = DeleteEventoUseCase;
//# sourceMappingURL=evento.use-cases.js.map