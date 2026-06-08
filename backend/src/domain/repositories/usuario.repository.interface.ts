import { Usuario, UsuarioWithTipo } from "../entities/usuario.entity";

export interface IUsuarioRepository {
  create(data: Omit<Usuario, "id">): Promise<Usuario>;
  findAll(): Promise<UsuarioWithTipo[]>;
  findById(id: number): Promise<UsuarioWithTipo | null>;
  findByEmail(email: string): Promise<UsuarioWithTipo | null>;
  update(id: number, data: Partial<Usuario>): Promise<Usuario | null>;
  delete(id: number): Promise<boolean>;
}
