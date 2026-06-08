import { ICoordenadorRepository } from "../../domain/repositories/coordenador.repository.interface";
import {
  Coordenador,
  CoordenadorWithUser,
} from "../../domain/entities/coordenador.entity";
export declare class CreateCoordenadorUseCase {
  private repository;
  constructor(repository: ICoordenadorRepository);
  execute(data: Coordenador): Promise<Coordenador>;
}
export declare class ListCoordenadoresUseCase {
  private repository;
  constructor(repository: ICoordenadorRepository);
  execute(): Promise<CoordenadorWithUser[]>;
}
export declare class GetCoordenadorUseCase {
  private repository;
  constructor(repository: ICoordenadorRepository);
  execute(usuario_id: number): Promise<CoordenadorWithUser | null>;
}
export declare class DeleteCoordenadorUseCase {
  private repository;
  constructor(repository: ICoordenadorRepository);
  execute(usuario_id: number): Promise<boolean>;
}
//# sourceMappingURL=coordenador.use-cases.d.ts.map
