import bcryptjs from 'bcryptjs'
import { IUsuarioRepository } from '../../domain/repositories/usuario.repository.interface'
import { Usuario, UsuarioWithTipo } from '../../domain/entities/usuario.entity'
import { generateToken, TokenPayload } from '../../infra/auth/jwt'

export class CreateUsuarioUseCase {
  constructor(private repository: IUsuarioRepository) {}

  async execute(data: Omit<Usuario, 'id'>): Promise<Usuario> {
    const hashedSenha = await bcryptjs.hash(data.senha, 10)
    return this.repository.create({ ...data, senha: hashedSenha })
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
    if (data.senha) {
      data.senha = await bcryptjs.hash(data.senha, 10)
    }
    return this.repository.update(id, data)
  }
}

export class DeleteUsuarioUseCase {
  constructor(private repository: IUsuarioRepository) {}

  async execute(id: number): Promise<boolean> {
    return this.repository.delete(id)
  }
}

export class LoginUseCase {
  constructor(private repository: IUsuarioRepository) {}

  async execute(email: string, senha: string): Promise<{ token: string; user: Omit<TokenPayload, 'tipo'> & { tipo: string } }> {
    const user = await this.repository.findByEmail(email)

    if (!user) {
      throw new Error('Credenciais invalidas')
    }

    const senhaValida = await bcryptjs.compare(senha, user.senha)
    if (!senhaValida) {
      throw new Error('Credenciais invalidas')
    }

    const payload: TokenPayload = { id: user.id, email: user.email, tipo: user.tipo }
    const token = generateToken(payload)

    return { token, user: { id: user.id, email: user.email, tipo: user.tipo } }
  }
}
