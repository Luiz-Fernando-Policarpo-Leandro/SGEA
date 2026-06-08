"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_repository_1 = require("../../infra/repositories/usuario.repository");
const participante_repository_1 = require("../../infra/repositories/participante.repository");
const coordenador_repository_1 = require("../../infra/repositories/coordenador.repository");
const administrador_repository_1 = require("../../infra/repositories/administrador.repository");
const evento_repository_1 = require("../../infra/repositories/evento.repository");
const atividade_repository_1 = require("../../infra/repositories/atividade.repository");
const inscricao_repository_1 = require("../../infra/repositories/inscricao.repository");
const certificado_repository_1 = require("../../infra/repositories/certificado.repository");
const presenca_repository_1 = require("../../infra/repositories/presenca.repository");
const usuario_route_1 = require("../../presentation/routes/usuario.route");
const participante_route_1 = require("../../presentation/routes/participante.route");
const coordenador_route_1 = require("../../presentation/routes/coordenador.route");
const administrador_route_1 = require("../../presentation/routes/administrador.route");
const evento_route_1 = require("../../presentation/routes/evento.route");
const atividade_route_1 = require("../../presentation/routes/atividade.route");
const inscricao_route_1 = require("../../presentation/routes/inscricao.route");
const certificado_route_1 = require("../../presentation/routes/certificado.route");
const presenca_route_1 = require("../../presentation/routes/presenca.route");
const public_route_1 = __importDefault(
  require("../../presentation/routes/public.route"),
);
const router = (0, express_1.Router)();
// Repositories (infrastructure)
const usuarioRepository = new usuario_repository_1.UsuarioRepository();
const participanteRepository =
  new participante_repository_1.ParticipanteRepository();
const coordenadorRepository =
  new coordenador_repository_1.CoordenadorRepository();
const administradorRepository =
  new administrador_repository_1.AdministradorRepository();
const eventoRepository = new evento_repository_1.EventoRepository();
const atividadeRepository = new atividade_repository_1.AtividadeRepository();
const inscricaoRepository = new inscricao_repository_1.InscricaoRepository();
const certificadoRepository =
  new certificado_repository_1.CertificadoRepository();
const presencaRepository = new presenca_repository_1.PresencaRepository();
// Routes (presentation) - dependency injection of repositories
router.use("/", public_route_1.default);
router.use("/api", (0, usuario_route_1.createUsuarioRouter)(usuarioRepository));
router.use(
  "/api",
  (0, participante_route_1.createParticipanteRouter)(participanteRepository),
);
router.use(
  "/api",
  (0, coordenador_route_1.createCoordenadorRouter)(coordenadorRepository),
);
router.use(
  "/api",
  (0, administrador_route_1.createAdministradorRouter)(administradorRepository),
);
router.use("/api", (0, evento_route_1.createEventoRouter)(eventoRepository));
router.use(
  "/api",
  (0, atividade_route_1.createAtividadeRouter)(atividadeRepository),
);
router.use(
  "/api",
  (0, inscricao_route_1.createInscricaoRouter)(inscricaoRepository),
);
router.use(
  "/api",
  (0, certificado_route_1.createCertificadoRouter)(certificadoRepository),
);
router.use(
  "/api",
  (0, presenca_route_1.createPresencaRouter)(presencaRepository),
);
exports.default = router;
//# sourceMappingURL=routes.js.map
