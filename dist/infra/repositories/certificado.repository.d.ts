import { ICertificadoRepository } from '../../domain/repositories/certificado.repository.interface';
import { Certificado, CertificadoWithEvento } from '../../domain/entities/certificado.entity';
export declare class CertificadoRepository implements ICertificadoRepository {
    create(data: Certificado): Promise<Certificado>;
    findAll(): Promise<Certificado[]>;
    findByCodigo(codigo: string): Promise<Certificado | null>;
    findByParticipante(participante_id: number): Promise<CertificadoWithEvento[]>;
    update(codigo: string, data: Partial<Certificado>): Promise<Certificado | null>;
    delete(codigo: string): Promise<boolean>;
    participanteExists(participante_id: number): Promise<boolean>;
    eventoExists(evento_id: number): Promise<boolean>;
}
//# sourceMappingURL=certificado.repository.d.ts.map