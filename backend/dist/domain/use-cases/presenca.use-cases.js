"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePresencaUseCase =
  exports.UpdatePresencaUseCase =
  exports.ListPresencasByAtividadeUseCase =
  exports.ListPresencasByParticipanteUseCase =
  exports.GetPresencaUseCase =
  exports.ListPresencasUseCase =
  exports.CreatePresencaUseCase =
    void 0;
class CreatePresencaUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const participanteExists = await this.repository.participanteExists(
      data.participante_id,
    );
    if (!participanteExists) throw new Error("Participante nao encontrado");
    const atividadeExists = await this.repository.atividadeExists(
      data.atividade_id,
    );
    if (!atividadeExists) throw new Error("Atividade nao encontrada");
    return this.repository.create(data);
  }
}
exports.CreatePresencaUseCase = CreatePresencaUseCase;
class ListPresencasUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute() {
    return this.repository.findAll();
  }
}
exports.ListPresencasUseCase = ListPresencasUseCase;
class GetPresencaUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(participante_id, atividade_id) {
    return this.repository.findByKeys(participante_id, atividade_id);
  }
}
exports.GetPresencaUseCase = GetPresencaUseCase;
class ListPresencasByParticipanteUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(participante_id) {
    return this.repository.findByParticipante(participante_id);
  }
}
exports.ListPresencasByParticipanteUseCase = ListPresencasByParticipanteUseCase;
class ListPresencasByAtividadeUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(atividade_id) {
    return this.repository.findByAtividade(atividade_id);
  }
}
exports.ListPresencasByAtividadeUseCase = ListPresencasByAtividadeUseCase;
class UpdatePresencaUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(participante_id, atividade_id, data) {
    return this.repository.update(participante_id, atividade_id, data);
  }
}
exports.UpdatePresencaUseCase = UpdatePresencaUseCase;
class DeletePresencaUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(participante_id, atividade_id) {
    return this.repository.delete(participante_id, atividade_id);
  }
}
exports.DeletePresencaUseCase = DeletePresencaUseCase;
//# sourceMappingURL=presenca.use-cases.js.map
