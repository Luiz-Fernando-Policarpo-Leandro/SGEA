import { IAdministradorRepository } from "../../domain/repositories/administrador.repository.interface";
import { Administrador, AdministradorWithUser } from "../../domain/entities/administrador.entity";
export declare class AdministradorRepository implements IAdministradorRepository {
    create(data: Administrador): Promise<Administrador>;
    findAll(): Promise<AdministradorWithUser[]>;
    findById(usuario_id: number): Promise<AdministradorWithUser | null>;
    delete(usuario_id: number): Promise<boolean>;
    exists(usuario_id: number): Promise<boolean>;
}
//# sourceMappingURL=administrador.repository.d.ts.map