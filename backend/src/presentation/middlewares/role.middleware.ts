import { Request, Response, NextFunction } from 'express'

type UserRole = 'participante' | 'coordenador' | 'administrador'

export function roleMiddleware(allowedRoles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Nao autenticado' })
    }

    if (!allowedRoles.includes(req.user.tipo as UserRole)) {
      return res.status(403).json({ error: 'Acesso negado' })
    }

    return next()
  }
}
