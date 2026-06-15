import { ICoordenadorRepository } from "../../domain/repositories/coordenador.repository.interface";
import { Coordenador, CoordenadorWithUser } from "../../domain/entities/coordenador.entity";
export declare class CoordenadorRepository implements ICoordenadorRepository {
    create(data: Coordenador): Promise<Coordenador>;
    findAll(): Promise<CoordenadorWithUser[]>;
    findById(usuario_id: number): Promise<CoordenadorWithUser | null>;
    delete(usuario_id: number): Promise<boolean>;
    exists(usuario_id: number): Promise<boolean>;
}
//# sourceMappingURL=coordenador.repository.d.ts.map