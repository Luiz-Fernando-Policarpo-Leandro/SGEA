import { IParticipanteRepository } from "../../domain/repositories/participante.repository.interface";
import { Participante, ParticipanteWithUser } from "../../domain/entities/participante.entity";
export declare class CreateParticipanteUseCase {
    private repository;
    constructor(repository: IParticipanteRepository);
    execute(data: Participante): Promise<Participante>;
}
export declare class ListParticipantesUseCase {
    private repository;
    constructor(repository: IParticipanteRepository);
    execute(): Promise<ParticipanteWithUser[]>;
}
export declare class GetParticipanteUseCase {
    private repository;
    constructor(repository: IParticipanteRepository);
    execute(usuario_id: number): Promise<ParticipanteWithUser | null>;
}
export declare class UpdateParticipanteUseCase {
    private repository;
    constructor(repository: IParticipanteRepository);
    execute(usuario_id: number, data: Partial<Participante>): Promise<Participante | null>;
}
export declare class DeleteParticipanteUseCase {
    private repository;
    constructor(repository: IParticipanteRepository);
    execute(usuario_id: number): Promise<boolean>;
}
//# sourceMappingURL=participante.use-cases.d.ts.map