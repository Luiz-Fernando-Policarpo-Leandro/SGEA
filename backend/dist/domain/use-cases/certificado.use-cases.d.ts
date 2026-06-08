import { ICertificadoRepository } from "../../domain/repositories/certificado.repository.interface";
import {
  Certificado,
  CertificadoWithEvento,
} from "../../domain/entities/certificado.entity";
export declare class CreateCertificadoUseCase {
  private repository;
  constructor(repository: ICertificadoRepository);
  execute(data: Certificado): Promise<Certificado>;
}
export declare class ListCertificadosUseCase {
  private repository;
  constructor(repository: ICertificadoRepository);
  execute(): Promise<Certificado[]>;
}
export declare class GetCertificadoUseCase {
  private repository;
  constructor(repository: ICertificadoRepository);
  execute(codigo: string): Promise<Certificado | null>;
}
export declare class ListCertificadosByParticipanteUseCase {
  private repository;
  constructor(repository: ICertificadoRepository);
  execute(participante_id: number): Promise<CertificadoWithEvento[]>;
}
export declare class UpdateCertificadoUseCase {
  private repository;
  constructor(repository: ICertificadoRepository);
  execute(
    codigo: string,
    data: Partial<Certificado>,
  ): Promise<Certificado | null>;
}
export declare class DeleteCertificadoUseCase {
  private repository;
  constructor(repository: ICertificadoRepository);
  execute(codigo: string): Promise<boolean>;
}
//# sourceMappingURL=certificado.use-cases.d.ts.map
