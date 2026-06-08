export interface Atividade {
  id: number;
  titulo: string;
  tipo?: string;
  cargaHoraria?: number;
  vagas?: number;
  local?: string;
  horario_inicio?: string;
  horario_fim?: string;
  responsavel?: string;
  evento_id: number;
}
