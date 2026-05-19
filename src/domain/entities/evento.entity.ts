export interface Evento {
  id: number
  nome: string
  instituicao?: string
  modalidade?: string
  dataInicio?: Date
  dataFim?: Date
  status?: string
}
