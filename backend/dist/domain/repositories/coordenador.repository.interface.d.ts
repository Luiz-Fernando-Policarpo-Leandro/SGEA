import { Coordenador, CoordenadorWithUser } from "../entities/coordenador.entity";
export interface ICoordenadorRepository {
    create(data: Coordenador): Promise<Coordenador>;
    findAll(): Promise<CoordenadorWithUser[]>;
    findById(usuario_id: number): Promise<CoordenadorWithUser | null>;
    delete(usuario_id: number): Promise<boolean>;
    exists(usuario_id: number): Promise<boolean>;
}
//# sourceMappingURL=coordenador.repository.interface.d.ts.map