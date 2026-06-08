"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCertificadoUseCase =
  exports.UpdateCertificadoUseCase =
  exports.ListCertificadosByParticipanteUseCase =
  exports.GetCertificadoUseCase =
  exports.ListCertificadosUseCase =
  exports.CreateCertificadoUseCase =
    void 0;
class CreateCertificadoUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const participanteExists = await this.repository.participanteExists(
      data.participante_id,
    );
    if (!participanteExists) throw new Error("Participante nao encontrado");
    const eventoExists = await this.repository.eventoExists(data.evento_id);
    if (!eventoExists) throw new Error("Evento nao encontrado");
    return this.repository.create(data);
  }
}
exports.CreateCertificadoUseCase = CreateCertificadoUseCase;
class ListCertificadosUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute() {
    return this.repository.findAll();
  }
}
exports.ListCertificadosUseCase = ListCertificadosUseCase;
class GetCertificadoUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(codigo) {
    return this.repository.findByCodigo(codigo);
  }
}
exports.GetCertificadoUseCase = GetCertificadoUseCase;
class ListCertificadosByParticipanteUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(participante_id) {
    return this.repository.findByParticipante(participante_id);
  }
}
exports.ListCertificadosByParticipanteUseCase =
  ListCertificadosByParticipanteUseCase;
class UpdateCertificadoUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(codigo, data) {
    return this.repository.update(codigo, data);
  }
}
exports.UpdateCertificadoUseCase = UpdateCertificadoUseCase;
class DeleteCertificadoUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(codigo) {
    return this.repository.delete(codigo);
  }
}
exports.DeleteCertificadoUseCase = DeleteCertificadoUseCase;
//# sourceMappingURL=certificado.use-cases.js.map
