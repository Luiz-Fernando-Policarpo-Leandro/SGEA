import { IAtividadeRepository } from "../../domain/repositories/atividade.repository.interface";
import { Atividade } from "../../domain/entities/atividade.entity";
export declare class AtividadeRepository implements IAtividadeRepository {
    create(data: Omit<Atividade, "id">): Promise<Atividade>;
    findAll(): Promise<Atividade[]>;
    findById(id: number): Promise<Atividade | null>;
    findByEventoId(evento_id: number): Promise<Atividade[]>;
    update(id: number, data: Partial<Atividade>): Promise<Atividade | null>;
    delete(id: number): Promise<boolean>;
    exists(id: number): Promise<boolean>;
}
//# sourceMappingURL=atividade.repository.d.ts.map