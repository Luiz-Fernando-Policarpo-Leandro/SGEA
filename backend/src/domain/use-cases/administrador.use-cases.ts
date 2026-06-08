import { IAdministradorRepository } from "../../domain/repositories/administrador.repository.interface";
import {
  Administrador,
  AdministradorWithUser,
} from "../../domain/entities/administrador.entity";

export class CreateAdministradorUseCase {
  constructor(private repository: IAdministradorRepository) {}

  async execute(data: Administrador): Promise<Administrador> {
    const exists = await this.repository.exists(data.usuario_id);
    if (exists) throw new Error("Administrador ja cadastrado");

    return this.repository.create(data);
  }
}

export class ListAdministradoresUseCase {
  constructor(private repository: IAdministradorRepository) {}

  async execute(): Promise<AdministradorWithUser[]> {
    return this.repository.findAll();
  }
}

export class GetAdministradorUseCase {
  constructor(private repository: IAdministradorRepository) {}

  async execute(usuario_id: number): Promise<AdministradorWithUser | null> {
    return this.repository.findById(usuario_id);
  }
}

export class DeleteAdministradorUseCase {
  constructor(private repository: IAdministradorRepository) {}

  async execute(usuario_id: number): Promise<boolean> {
    return this.repository.delete(usuario_id);
  }
}
