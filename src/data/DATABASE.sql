CREATE DATABASE sistema_eventos WITH ENCODING = 'UTF8';

DROP VIEW IF EXISTS vw_usuario_tipo;
DROP TABLE IF EXISTS Presenca;
DROP TABLE IF EXISTS Certificado;
DROP TABLE IF EXISTS Inscricao;
DROP TABLE IF EXISTS Atividade;
DROP TABLE IF EXISTS Evento;
DROP TABLE IF EXISTS Administrador;
DROP TABLE IF EXISTS Coordenador;
DROP TABLE IF EXISTS Participante;
DROP TABLE IF EXISTS Usuario;

CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE Participante (
    usuario_id INT PRIMARY KEY,
    categoria VARCHAR(255),
    CONSTRAINT fk_participante_usuario FOREIGN KEY (usuario_id)
        REFERENCES Usuario(id) ON DELETE CASCADE
);

CREATE TABLE Coordenador (
    usuario_id INT PRIMARY KEY,
    CONSTRAINT fk_coordenador_usuario FOREIGN KEY (usuario_id)
        REFERENCES Usuario(id) ON DELETE CASCADE
);

CREATE TABLE Administrador (
    usuario_id INT PRIMARY KEY,
    CONSTRAINT fk_administrador_usuario FOREIGN KEY (usuario_id)
        REFERENCES Usuario(id) ON DELETE CASCADE
);

CREATE TABLE Evento (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    instituicao VARCHAR(255),
    modalidade VARCHAR(255),
    dataInicio DATE,
    dataFim DATE,
    status VARCHAR(50)
);

CREATE TABLE Atividade (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    cargaHoraria INT,
    vagas INT,
    local VARCHAR(255),
    evento_id INT NOT NULL,
    CONSTRAINT fk_atividade_evento FOREIGN KEY (evento_id)
        REFERENCES Evento(id) ON DELETE CASCADE
);

CREATE TABLE Inscricao (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50),
    data DATE DEFAULT CURRENT_DATE,
    participante_id INT NOT NULL,
    evento_id INT NOT NULL,
    CONSTRAINT fk_inscricao_participante FOREIGN KEY (participante_id)
        REFERENCES Participante(usuario_id) ON DELETE CASCADE,
    CONSTRAINT fk_inscricao_evento FOREIGN KEY (evento_id)
        REFERENCES Evento(id) ON DELETE CASCADE
);

CREATE TABLE Certificado (
    codigo VARCHAR(255) PRIMARY KEY,
    cargaHoraria INT,
    status VARCHAR(50),
    participante_id INT NOT NULL,
    evento_id INT NOT NULL,
    CONSTRAINT fk_certificado_participante FOREIGN KEY (participante_id)
        REFERENCES Participante(usuario_id) ON DELETE CASCADE,
    CONSTRAINT fk_certificado_evento FOREIGN KEY (evento_id)
        REFERENCES Evento(id) ON DELETE CASCADE
);

CREATE TABLE Presenca (
    checkIn TIMESTAMP,
    checkOut TIMESTAMP,
    participante_id INT NOT NULL,
    atividade_id INT NOT NULL,
    PRIMARY KEY (participante_id, atividade_id),
    CONSTRAINT fk_presenca_participante FOREIGN KEY (participante_id)
        REFERENCES Participante(usuario_id) ON DELETE CASCADE,
    CONSTRAINT fk_presenca_atividade FOREIGN KEY (atividade_id)
        REFERENCES Atividade(id) ON DELETE CASCADE
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
FROM Usuario u
LEFT JOIN Participante p ON u.id = p.usuario_id
LEFT JOIN Coordenador c ON u.id = c.usuario_id
LEFT JOIN Administrador a ON u.id = a.usuario_id;
