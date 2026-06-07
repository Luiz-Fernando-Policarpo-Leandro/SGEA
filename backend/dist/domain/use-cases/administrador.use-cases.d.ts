import { IAdministradorRepository } from '../../domain/repositories/administrador.repository.interface';
import { Administrador, AdministradorWithUser } from '../../domain/entities/administrador.entity';
export declare class CreateAdministradorUseCase {
    private repository;
    constructor(repository: IAdministradorRepository);
    execute(data: Administrador): Promise<Administrador>;
}
export declare class ListAdministradoresUseCase {
    private repository;
    constructor(repository: IAdministradorRepository);
    execute(): Promise<AdministradorWithUser[]>;
}
export declare class GetAdministradorUseCase {
    private repository;
    constructor(repository: IAdministradorRepository);
    execute(usuario_id: number): Promise<AdministradorWithUser | null>;
}
export declare class DeleteAdministradorUseCase {
    private repository;
    constructor(repository: IAdministradorRepository);
    execute(usuario_id: number): Promise<boolean>;
}
//# sourceMappingURL=administrador.use-cases.d.ts.map