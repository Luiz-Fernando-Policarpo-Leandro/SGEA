import { IUsuarioRepository } from "../../domain/repositories/usuario.repository.interface";
import { Usuario, UsuarioWithTipo } from "../../domain/entities/usuario.entity";
export declare class UsuarioRepository implements IUsuarioRepository {
    create(data: Omit<Usuario, "id">): Promise<Usuario>;
    findAll(): Promise<UsuarioWithTipo[]>;
    findById(id: number): Promise<UsuarioWithTipo | null>;
    findByEmail(email: string): Promise<UsuarioWithTipo | null>;
    update(id: number, data: Partial<Usuario>): Promise<Usuario | null>;
    delete(id: number): Promise<boolean>;
}
//# sourceMappingURL=usuario.repository.d.ts.map