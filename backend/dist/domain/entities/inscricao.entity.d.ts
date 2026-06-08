export interface Inscricao {
  id: number;
  status?: string;
  data?: Date;
  participante_id: number;
  evento_id: number;
}
export interface InscricaoWithEvento extends Inscricao {
  evento_nome: string;
}
export interface InscricaoWithParticipante extends Inscricao {
  participante_nome: string;
}
//# sourceMappingURL=inscricao.entity.d.ts.map
