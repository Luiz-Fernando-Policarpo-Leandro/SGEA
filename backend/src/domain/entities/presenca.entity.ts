export interface Presenca {
  checkIn?: Date
  checkOut?: Date
  participante_id: number
  atividade_id: number
}

export interface PresencaWithAtividade extends Presenca {
  atividade_titulo: string
}

export interface PresencaWithParticipante extends Presenca {
  participante_nome: string
}
