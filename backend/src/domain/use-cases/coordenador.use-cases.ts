import { ICoordenadorRepository } from "../../domain/repositories/coordenador.repository.interface";
import {
  Coordenador,
  CoordenadorWithUser,
} from "../../domain/entities/coordenador.entity";

export class CreateCoordenadorUseCase {
  constructor(private repository: ICoordenadorRepository) {}

  async execute(data: Coordenador): Promise<Coordenador> {
    const exists = await this.repository.exists(data.usuario_id);
    if (exists) throw new Error("Coordenador ja cadastrado");

    return this.repository.create(data);
  }
}

export class ListCoordenadoresUseCase {
  constructor(private repository: ICoordenadorRepository) {}

  async execute(): Promise<CoordenadorWithUser[]> {
    return this.repository.findAll();
  }
}

export class GetCoordenadorUseCase {
  constructor(private repository: ICoordenadorRepository) {}

  async execute(usuario_id: number): Promise<CoordenadorWithUser | null> {
    return this.repository.findById(usuario_id);
  }
}

export class DeleteCoordenadorUseCase {
  constructor(private repository: ICoordenadorRepository) {}

  async execute(usuario_id: number): Promise<boolean> {
    return this.repository.delete(usuario_id);
  }
}
