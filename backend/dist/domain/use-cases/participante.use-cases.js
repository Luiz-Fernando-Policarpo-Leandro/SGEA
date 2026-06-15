"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteParticipanteUseCase = exports.UpdateParticipanteUseCase = exports.GetParticipanteUseCase = exports.ListParticipantesUseCase = exports.CreateParticipanteUseCase = void 0;
class CreateParticipanteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const exists = await this.repository.exists(data.usuario_id);
        if (exists)
            throw new Error("Participante ja cadastrado");
        return this.repository.create(data);
    }
}
exports.CreateParticipanteUseCase = CreateParticipanteUseCase;
class ListParticipantesUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return this.repository.findAll();
    }
}
exports.ListParticipantesUseCase = ListParticipantesUseCase;
class GetParticipanteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(usuario_id) {
        return this.repository.findById(usuario_id);
    }
}
exports.GetParticipanteUseCase = GetParticipanteUseCase;
class UpdateParticipanteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(usuario_id, data) {
        return this.repository.update(usuario_id, data);
    }
}
exports.UpdateParticipanteUseCase = UpdateParticipanteUseCase;
class DeleteParticipanteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(usuario_id) {
        return this.repository.delete(usuario_id);
    }
}
exports.DeleteParticipanteUseCase = DeleteParticipanteUseCase;
//# sourceMappingURL=participante.use-cases.js.map