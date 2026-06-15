import { Inscricao, InscricaoWithEvento, InscricaoWithParticipante } from "../entities/inscricao.entity";
export interface IInscricaoRepository {
    create(data: Omit<Inscricao, "id">): Promise<Inscricao>;
    findAll(): Promise<Inscricao[]>;
    findById(id: number): Promise<Inscricao | null>;
    findByParticipante(participante_id: number): Promise<InscricaoWithEvento[]>;
    findByEvento(evento_id: number): Promise<InscricaoWithParticipante[]>;
    update(id: number, data: Partial<Inscricao>): Promise<Inscricao | null>;
    delete(id: number): Promise<boolean>;
    participanteExists(participante_id: number): Promise<boolean>;
    eventoExists(evento_id: number): Promise<boolean>;
    findByParticipanteAndEvento(participante_id: number, evento_id: number): Promise<Inscricao | null>;
}
//# sourceMappingURL=inscricao.repository.interface.d.ts.map