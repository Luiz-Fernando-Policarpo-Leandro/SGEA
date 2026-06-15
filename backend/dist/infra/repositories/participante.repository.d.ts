import { IParticipanteRepository } from "../../domain/repositories/participante.repository.interface";
import { Participante, ParticipanteWithUser } from "../../domain/entities/participante.entity";
export declare class ParticipanteRepository implements IParticipanteRepository {
    create(data: Participante): Promise<Participante>;
    findAll(): Promise<ParticipanteWithUser[]>;
    findById(usuario_id: number): Promise<ParticipanteWithUser | null>;
    update(usuario_id: number, data: Partial<Participante>): Promise<Participante | null>;
    delete(usuario_id: number): Promise<boolean>;
    exists(usuario_id: number): Promise<boolean>;
}
//# sourceMappingURL=participante.repository.d.ts.map