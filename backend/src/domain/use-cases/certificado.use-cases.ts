import { ICertificadoRepository } from "../../domain/repositories/certificado.repository.interface";
import {
  Certificado,
  CertificadoWithEvento,
} from "../../domain/entities/certificado.entity";

export class CreateCertificadoUseCase {
  constructor(private repository: ICertificadoRepository) {}

  async execute(data: Certificado): Promise<Certificado> {
    const participanteExists = await this.repository.participanteExists(
      data.participante_id,
    );
    if (!participanteExists) throw new Error("Participante nao encontrado");

    const eventoExists = await this.repository.eventoExists(data.evento_id);
    if (!eventoExists) throw new Error("Evento nao encontrado");

    return this.repository.create(data);
  }
}

export class ListCertificadosUseCase {
  constructor(private repository: ICertificadoRepository) {}

  async execute(): Promise<Certificado[]> {
    return this.repository.findAll();
  }
}

export class GetCertificadoUseCase {
  constructor(private repository: ICertificadoRepository) {}

  async execute(codigo: string): Promise<CertificadoWithEvento | null> {
    return this.repository.findByCodigo(codigo);
  }
}

export class ListCertificadosByParticipanteUseCase {
  constructor(private repository: ICertificadoRepository) {}

  async execute(participante_id: number): Promise<CertificadoWithEvento[]> {
    return this.repository.findByParticipante(participante_id);
  }
}

export class UpdateCertificadoUseCase {
  constructor(private repository: ICertificadoRepository) {}

  async execute(
    codigo: string,
    data: Partial<Certificado>,
  ): Promise<Certificado | null> {
    return this.repository.update(codigo, data);
  }
}

export class DeleteCertificadoUseCase {
  constructor(private repository: ICertificadoRepository) {}

  async execute(codigo: string): Promise<boolean> {
    return this.repository.delete(codigo);
  }
}
