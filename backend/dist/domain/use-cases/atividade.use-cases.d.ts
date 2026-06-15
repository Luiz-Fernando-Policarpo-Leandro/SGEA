import { IAtividadeRepository } from "../../domain/repositories/atividade.repository.interface";
import { Atividade } from "../../domain/entities/atividade.entity";
export declare class CreateAtividadeUseCase {
    private repository;
    constructor(repository: IAtividadeRepository);
    execute(data: Omit<Atividade, "id">): Promise<Atividade>;
}
export declare class ListAtividadesUseCase {
    private repository;
    constructor(repository: IAtividadeRepository);
    execute(): Promise<Atividade[]>;
}
export declare class GetAtividadeUseCase {
    private repository;
    constructor(repository: IAtividadeRepository);
    execute(id: number): Promise<Atividade | null>;
}
export declare class ListAtividadesByEventoUseCase {
    private repository;
    constructor(repository: IAtividadeRepository);
    execute(evento_id: number): Promise<Atividade[]>;
}
export declare class UpdateAtividadeUseCase {
    private repository;
    constructor(repository: IAtividadeRepository);
    execute(id: number, data: Partial<Atividade>): Promise<Atividade | null>;
}
export declare class DeleteAtividadeUseCase {
    private repository;
    constructor(repository: IAtividadeRepository);
    execute(id: number): Promise<boolean>;
}
//# sourceMappingURL=atividade.use-cases.d.ts.map