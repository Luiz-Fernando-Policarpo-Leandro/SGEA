import { Certificado, CertificadoWithEvento } from "../entities/certificado.entity";
export interface ICertificadoRepository {
    create(data: Certificado): Promise<Certificado>;
    findAll(): Promise<Certificado[]>;
    findByCodigo(codigo: string): Promise<CertificadoWithEvento | null>;
    findByParticipante(participante_id: number): Promise<CertificadoWithEvento[]>;
    update(codigo: string, data: Partial<Certificado>): Promise<Certificado | null>;
    delete(codigo: string): Promise<boolean>;
    participanteExists(participante_id: number): Promise<boolean>;
    eventoExists(evento_id: number): Promise<boolean>;
}
//# sourceMappingURL=certificado.repository.interface.d.ts.map