"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAdministradorUseCase =
  exports.GetAdministradorUseCase =
  exports.ListAdministradoresUseCase =
  exports.CreateAdministradorUseCase =
    void 0;
class CreateAdministradorUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const exists = await this.repository.exists(data.usuario_id);
    if (exists) throw new Error("Administrador ja cadastrado");
    return this.repository.create(data);
  }
}
exports.CreateAdministradorUseCase = CreateAdministradorUseCase;
class ListAdministradoresUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute() {
    return this.repository.findAll();
  }
}
exports.ListAdministradoresUseCase = ListAdministradoresUseCase;
class GetAdministradorUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(usuario_id) {
    return this.repository.findById(usuario_id);
  }
}
exports.GetAdministradorUseCase = GetAdministradorUseCase;
class DeleteAdministradorUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  async execute(usuario_id) {
    return this.repository.delete(usuario_id);
  }
}
exports.DeleteAdministradorUseCase = DeleteAdministradorUseCase;
//# sourceMappingURL=administrador.use-cases.js.map
