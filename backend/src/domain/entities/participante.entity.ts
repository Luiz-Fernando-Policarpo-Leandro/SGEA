export interface Participante {
  usuario_id: number;
  categoria: string;
}

export interface ParticipanteWithUser extends Participante {
  nome: string;
  email: string;
}
