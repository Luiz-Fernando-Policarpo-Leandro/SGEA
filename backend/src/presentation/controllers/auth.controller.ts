import { Request, Response } from 'express'
import { LoginUseCase } from '../../domain/use-cases/usuario.use-cases'
import { IUsuarioRepository } from '../../domain/repositories/usuario.repository.interface'

export class AuthController {
  constructor(private repository: IUsuarioRepository) {}

  login = async (req: Request, res: Response) => {
    try {
      const { email, senha } = req.body

      if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha sao obrigatorios' })
      }

      const useCase = new LoginUseCase(this.repository)
      const result = await useCase.execute(email, senha)
      return res.json(result)
    } catch (error: any) {
      if (error.message === 'Credenciais invalidas') {
        return res.status(401).json({ error: error.message })
      }
      return res.status(500).json({ error: error.message })
    }
  }
}
