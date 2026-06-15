import { IInscricaoRepository } from "../../domain/repositories/inscricao.repository.interface";
import { Inscricao, InscricaoWithEvento, InscricaoWithParticipante } from "../../domain/entities/inscricao.entity";
export declare class CreateInscricaoUseCase {
    private repository;
    constructor(repository: IInscricaoRepository);
    execute(data: Omit<Inscricao, "id">): Promise<Inscricao>;
}
export declare class ListInscricoesUseCase {
    private repository;
    constructor(repository: IInscricaoRepository);
    execute(): Promise<Inscricao[]>;
}
export declare class GetInscricaoUseCase {
    private repository;
    constructor(repository: IInscricaoRepository);
    execute(id: number): Promise<Inscricao | null>;
}
export declare class ListInscricoesByParticipanteUseCase {
    private repository;
    constructor(repository: IInscricaoRepository);
    execute(participante_id: number): Promise<InscricaoWithEvento[]>;
}
export declare class ListInscricoesByEventoUseCase {
    private repository;
    constructor(repository: IInscricaoRepository);
    execute(evento_id: number): Promise<InscricaoWithParticipante[]>;
}
export declare class UpdateInscricaoUseCase {
    private repository;
    constructor(repository: IInscricaoRepository);
    execute(id: number, data: Partial<Inscricao>): Promise<Inscricao | null>;
}
export declare class DeleteInscricaoUseCase {
    private repository;
    constructor(repository: IInscricaoRepository);
    execute(id: number): Promise<boolean>;
}
//# sourceMappingURL=inscricao.use-cases.d.ts.map