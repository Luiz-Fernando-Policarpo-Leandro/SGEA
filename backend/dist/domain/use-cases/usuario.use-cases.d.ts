import { IUsuarioRepository } from "../../domain/repositories/usuario.repository.interface";
import { Usuario, UsuarioWithTipo } from "../../domain/entities/usuario.entity";
export declare class CreateUsuarioUseCase {
    private repository;
    constructor(repository: IUsuarioRepository);
    execute(data: Omit<Usuario, "id">): Promise<Usuario>;
}
export declare class ListUsuariosUseCase {
    private repository;
    constructor(repository: IUsuarioRepository);
    execute(): Promise<UsuarioWithTipo[]>;
}
export declare class GetUsuarioUseCase {
    private repository;
    constructor(repository: IUsuarioRepository);
    execute(id: number): Promise<UsuarioWithTipo | null>;
}
export declare class UpdateUsuarioUseCase {
    private repository;
    constructor(repository: IUsuarioRepository);
    execute(id: number, data: Partial<Usuario>): Promise<Usuario | null>;
}
export declare class DeleteUsuarioUseCase {
    private repository;
    constructor(repository: IUsuarioRepository);
    execute(id: number): Promise<boolean>;
}
export declare class LoginUseCase {
    private repository;
    constructor(repository: IUsuarioRepository);
    execute(email: string, senha: string): Promise<{
        token: string;
        user: {
            id: number;
            nome: string;
            email: string;
            tipo: string;
            perfil_id: number;
        };
    }>;
}
//# sourceMappingURL=usuario.use-cases.d.ts.map