import { Participante, ParticipanteWithUser } from "../entities/participante.entity";
export interface IParticipanteRepository {
    create(data: Participante): Promise<Participante>;
    findAll(): Promise<ParticipanteWithUser[]>;
    findById(usuario_id: number): Promise<ParticipanteWithUser | null>;
    update(usuario_id: number, data: Partial<Participante>): Promise<Participante | null>;
    delete(usuario_id: number): Promise<boolean>;
    exists(usuario_id: number): Promise<boolean>;
}
//# sourceMappingURL=participante.repository.interface.d.ts.map