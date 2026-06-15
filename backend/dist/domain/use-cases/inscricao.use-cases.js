"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInscricaoUseCase = exports.UpdateInscricaoUseCase = exports.ListInscricoesByEventoUseCase = exports.ListInscricoesByParticipanteUseCase = exports.GetInscricaoUseCase = exports.ListInscricoesUseCase = exports.CreateInscricaoUseCase = void 0;
class CreateInscricaoUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const participanteExists = await this.repository.participanteExists(data.participante_id);
        if (!participanteExists)
            throw new Error("Participante nao encontrado");
        const eventoExists = await this.repository.eventoExists(data.evento_id);
        if (!eventoExists)
            throw new Error("Evento nao encontrado");
        const existing = await this.repository.findByParticipanteAndEvento(data.participante_id, data.evento_id);
        if (existing)
            throw new Error("Participante ja inscrito neste evento");
        return this.repository.create(data);
    }
}
exports.CreateInscricaoUseCase = CreateInscricaoUseCase;
class ListInscricoesUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return this.repository.findAll();
    }
}
exports.ListInscricoesUseCase = ListInscricoesUseCase;
class GetInscricaoUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        return this.repository.findById(id);
    }
}
exports.GetInscricaoUseCase = GetInscricaoUseCase;
class ListInscricoesByParticipanteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(participante_id) {
        return this.repository.findByParticipante(participante_id);
    }
}
exports.ListInscricoesByParticipanteUseCase = ListInscricoesByParticipanteUseCase;
class ListInscricoesByEventoUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(evento_id) {
        return this.repository.findByEvento(evento_id);
    }
}
exports.ListInscricoesByEventoUseCase = ListInscricoesByEventoUseCase;
class UpdateInscricaoUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id, data) {
        return this.repository.update(id, data);
    }
}
exports.UpdateInscricaoUseCase = UpdateInscricaoUseCase;
class DeleteInscricaoUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteInscricaoUseCase = DeleteInscricaoUseCase;
//# sourceMappingURL=inscricao.use-cases.js.map