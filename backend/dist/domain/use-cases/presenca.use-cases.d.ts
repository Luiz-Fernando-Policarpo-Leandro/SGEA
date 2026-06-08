import { IPresencaRepository } from "../../domain/repositories/presenca.repository.interface";
import {
  Presenca,
  PresencaWithAtividade,
  PresencaWithParticipante,
} from "../../domain/entities/presenca.entity";
export declare class CreatePresencaUseCase {
  private repository;
  constructor(repository: IPresencaRepository);
  execute(data: Presenca): Promise<Presenca>;
}
export declare class ListPresencasUseCase {
  private repository;
  constructor(repository: IPresencaRepository);
  execute(): Promise<Presenca[]>;
}
export declare class GetPresencaUseCase {
  private repository;
  constructor(repository: IPresencaRepository);
  execute(
    participante_id: number,
    atividade_id: number,
  ): Promise<Presenca | null>;
}
export declare class ListPresencasByParticipanteUseCase {
  private repository;
  constructor(repository: IPresencaRepository);
  execute(participante_id: number): Promise<PresencaWithAtividade[]>;
}
export declare class ListPresencasByAtividadeUseCase {
  private repository;
  constructor(repository: IPresencaRepository);
  execute(atividade_id: number): Promise<PresencaWithParticipante[]>;
}
export declare class UpdatePresencaUseCase {
  private repository;
  constructor(repository: IPresencaRepository);
  execute(
    participante_id: number,
    atividade_id: number,
    data: Partial<Presenca>,
  ): Promise<Presenca | null>;
}
export declare class DeletePresencaUseCase {
  private repository;
  constructor(repository: IPresencaRepository);
  execute(participante_id: number, atividade_id: number): Promise<boolean>;
}
//# sourceMappingURL=presenca.use-cases.d.ts.map
