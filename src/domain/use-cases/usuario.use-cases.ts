import { IUsuarioRepository } from '../../domain/repositories/usuario.repository.interface'
import { Usuario, UsuarioWithTipo } from '../../domain/entities/usuario.entity'

export class CreateUsuarioUseCase {
  constructor(private repository: IUsuarioRepository) {}

  async execute(data: Omit<Usuario, 'id'>): Promise<Usuario> {
    return this.repository.create(data)
  }
}

export class ListUsuariosUseCase {
  constructor(private repository: IUsuarioRepository) {}

  async execute(): Promise<UsuarioWithTipo[]> {
    return this.repository.findAll()
  }
}

export class GetUsuarioUseCase {
  constructor(private repository: IUsuarioRepository) {}

  async execute(id: number): Promise<UsuarioWithTipo | null> {
    return this.repository.findById(id)
  }
}

export class UpdateUsuarioUseCase {
  constructor(private repository: IUsuarioRepository) {}

  async execute(id: number, data: Partial<Usuario>): Promise<Usuario | null> {
    return this.repository.update(id, data)
  }
}

export class DeleteUsuarioUseCase {
  constructor(private repository: IUsuarioRepository) {}

  async execute(id: number): Promise<boolean> {
    return this.repository.delete(id)
  }
}
