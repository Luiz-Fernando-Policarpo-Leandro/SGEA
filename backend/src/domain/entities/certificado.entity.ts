export interface Certificado {
  codigo: string;
  cargaHoraria?: number;
  status?: string;
  participante_id: number;
  evento_id: number;
}

export interface CertificadoWithEvento extends Certificado {
  evento_nome: string;
}
