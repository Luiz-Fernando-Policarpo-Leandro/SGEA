import { Router } from "express";
import { UsuarioRepository } from "../../infra/repositories/usuario.repository";
import { ParticipanteRepository } from "../../infra/repositories/participante.repository";
import { CoordenadorRepository } from "../../infra/repositories/coordenador.repository";
import { AdministradorRepository } from "../../infra/repositories/administrador.repository";
import { EventoRepository } from "../../infra/repositories/evento.repository";
import { AtividadeRepository } from "../../infra/repositories/atividade.repository";
import { InscricaoRepository } from "../../infra/repositories/inscricao.repository";
import { CertificadoRepository } from "../../infra/repositories/certificado.repository";
import { PresencaRepository } from "../../infra/repositories/presenca.repository";
import { createUsuarioRouter } from "../../presentation/routes/usuario.route";
import { createParticipanteRouter } from "../../presentation/routes/participante.route";
import { createCoordenadorRouter } from "../../presentation/routes/coordenador.route";
import { createAdministradorRouter } from "../../presentation/routes/administrador.route";
import { createEventoRouter } from "../../presentation/routes/evento.route";
import { createAtividadeRouter } from "../../presentation/routes/atividade.route";
import { createInscricaoRouter } from "../../presentation/routes/inscricao.route";
import { createCertificadoRouter } from "../../presentation/routes/certificado.route";
import { createPresencaRouter } from "../../presentation/routes/presenca.route";
import { createAuthRouter } from "../../presentation/routes/auth.route";
import publicRouter from "../../presentation/routes/public.route";

const router = Router();

const usuarioRepository = new UsuarioRepository();
const participanteRepository = new ParticipanteRepository();
const coordenadorRepository = new CoordenadorRepository();
const administradorRepository = new AdministradorRepository();
const eventoRepository = new EventoRepository();
const atividadeRepository = new AtividadeRepository();
const inscricaoRepository = new InscricaoRepository();
const certificadoRepository = new CertificadoRepository();
const presencaRepository = new PresencaRepository();

router.use("/", publicRouter);
router.use("/api", createAuthRouter(usuarioRepository));
router.use("/api", createUsuarioRouter(usuarioRepository));
router.use("/api", createParticipanteRouter(participanteRepository));
router.use("/api", createCoordenadorRouter(coordenadorRepository));
router.use("/api", createAdministradorRouter(administradorRepository));
router.use("/api", createEventoRouter(eventoRepository));
router.use("/api", createAtividadeRouter(atividadeRepository));
router.use("/api", createInscricaoRouter(inscricaoRepository));
router.use("/api", createCertificadoRouter(certificadoRepository));
router.use("/api", createPresencaRouter(presencaRepository));

export default router;
