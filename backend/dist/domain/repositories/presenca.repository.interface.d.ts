import { Presenca, PresencaWithAtividade, PresencaWithParticipante } from "../entities/presenca.entity";
export interface IPresencaRepository {
    create(data: Presenca): Promise<Presenca>;
    findAll(): Promise<Presenca[]>;
    findByKeys(participante_id: number, atividade_id: number): Promise<Presenca | null>;
    findByParticipante(participante_id: number): Promise<PresencaWithAtividade[]>;
    findByAtividade(atividade_id: number): Promise<PresencaWithParticipante[]>;
    update(participante_id: number, atividade_id: number, data: Partial<Presenca>): Promise<Presenca | null>;
    delete(participante_id: number, atividade_id: number): Promise<boolean>;
    participanteExists(participante_id: number): Promise<boolean>;
    atividadeExists(atividade_id: number): Promise<boolean>;
}
//# sourceMappingURL=presenca.repository.interface.d.ts.map