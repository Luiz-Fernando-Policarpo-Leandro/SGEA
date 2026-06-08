DROP VIEW IF EXISTS vw_usuario_tipo;
DROP TABLE IF EXISTS presencas;
DROP TABLE IF EXISTS certificados;
DROP TABLE IF EXISTS inscricoes;
DROP TABLE IF EXISTS atividades;
DROP TABLE IF EXISTS eventos;
DROP TABLE IF EXISTS administradores;
DROP TABLE IF EXISTS coordenadores;
DROP TABLE IF EXISTS participantes;
DROP TABLE IF EXISTS usuarios CASCADE;

CREATE TABLE usuarios (
id SERIAL PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
senha VARCHAR(255) NOT NULL
);

CREATE TABLE participantes (
usuario_id INT PRIMARY KEY,
categoria VARCHAR(255),
CONSTRAINT fk_participantes_usuarios FOREIGN KEY (usuario_id)
REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE coordenadores (
usuario_id INT PRIMARY KEY,
CONSTRAINT fk_coordenadores_usuarios FOREIGN KEY (usuario_id)
REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE administradores (
usuario_id INT PRIMARY KEY,
CONSTRAINT fk_administradores_usuarios FOREIGN KEY (usuario_id)
REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE eventos (
id SERIAL PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
instituicao VARCHAR(255),
modalidade VARCHAR(255),
dataInicio DATE,
dataFim DATE,
status VARCHAR(50)
);

CREATE TABLE atividades (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  tipo VARCHAR(100),
  cargaHoraria INT,
  vagas INT,
  local VARCHAR(255),
  horario_inicio TIME,
  horario_fim TIME,
  responsavel VARCHAR(255),
  evento_id INT NOT NULL,
  CONSTRAINT fk_atividades_eventos FOREIGN KEY (evento_id)
  REFERENCES eventos(id) ON DELETE CASCADE
);

CREATE TABLE inscricoes (
id SERIAL PRIMARY KEY,
status VARCHAR(50),
data DATE DEFAULT CURRENT_DATE,
participante_id INT NOT NULL,
evento_id INT NOT NULL,
CONSTRAINT fk_inscricoes_participantes FOREIGN KEY (participante_id)
REFERENCES participantes(usuario_id) ON DELETE CASCADE,
CONSTRAINT fk_inscricoes_eventos FOREIGN KEY (evento_id)
REFERENCES eventos(id) ON DELETE CASCADE
);

CREATE TABLE certificados (
codigo VARCHAR(255) PRIMARY KEY,
cargaHoraria INT,
status VARCHAR(50),
participante_id INT NOT NULL,
evento_id INT NOT NULL,
CONSTRAINT fk_certificados_participantes FOREIGN KEY (participante_id)
REFERENCES participantes(usuario_id) ON DELETE CASCADE,
CONSTRAINT fk_certificados_eventos FOREIGN KEY (evento_id)
REFERENCES eventos(id) ON DELETE CASCADE
);

CREATE TABLE presencas (
checkIn TIMESTAMP,
checkOut TIMESTAMP,
participante_id INT NOT NULL,
atividade_id INT NOT NULL,
PRIMARY KEY (participante_id, atividade_id),
CONSTRAINT fk_presencas_participantes FOREIGN KEY (participante_id)
REFERENCES participantes(usuario_id) ON DELETE CASCADE,
CONSTRAINT fk_presencas_atividades FOREIGN KEY (atividade_id)
REFERENCES atividades(id) ON DELETE CASCADE
);

CREATE VIEW vw_usuario_tipo AS
SELECT
u.id,
u.nome,
u.email,
u.senha,
CASE
WHEN p.usuario_id IS NOT NULL THEN 'participante'
WHEN c.usuario_id IS NOT NULL THEN 'coordenador'
WHEN a.usuario_id IS NOT NULL THEN 'administrador'
ELSE 'sem_perfil'
END AS tipo
FROM usuarios u
LEFT JOIN participantes p ON u.id = p.usuario_id
LEFT JOIN coordenadores c ON u.id = c.usuario_id
LEFT JOIN administradores a ON u.id = a.usuario_id;
