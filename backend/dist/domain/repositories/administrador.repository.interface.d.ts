import { Administrador, AdministradorWithUser } from '../entities/administrador.entity';
export interface IAdministradorRepository {
    create(data: Administrador): Promise<Administrador>;
    findAll(): Promise<AdministradorWithUser[]>;
    findById(usuario_id: number): Promise<AdministradorWithUser | null>;
    delete(usuario_id: number): Promise<boolean>;
    exists(usuario_id: number): Promise<boolean>;
}
//# sourceMappingURL=administrador.repository.interface.d.ts.map