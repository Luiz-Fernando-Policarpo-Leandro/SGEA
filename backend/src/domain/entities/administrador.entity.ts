export interface Administrador {
  usuario_id: number;
}

export interface AdministradorWithUser extends Administrador {
  nome: string;
  email: string;
}
