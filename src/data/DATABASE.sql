CREATE DATABASE sistema_eventos WITH ENCODING = 'UTF8';

-- Remover tabelas se existirem (ordem correta para evitar erros de dependência)
DROP TABLE IF EXISTS Presenca;
DROP TABLE IF EXISTS Certificado;
DROP TABLE IF EXISTS Inscricao;
DROP TABLE IF EXISTS Atividade;
DROP TABLE IF EXISTS Evento;
DROP TABLE IF EXISTS Administrador;
DROP TABLE IF EXISTS Coordenador;
DROP TABLE IF EXISTS Participante;
DROP TABLE IF EXISTS Usuario;

-- Tabela Pai: Usuario
CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY, -- SERIAL gera o auto-incremento automaticamente no Postgres
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo VARCHAR(50)
);

-- Herança: Participante
CREATE TABLE Participante (
    usuario_id INT PRIMARY KEY,
    categoria VARCHAR(255),
    CONSTRAINT fk_participante_usuario FOREIGN KEY (usuario_id) 
        REFERENCES Usuario(id) ON DELETE CASCADE
);

-- Herança: Coordenador
CREATE TABLE Coordenador (
    usuario_id INT PRIMARY KEY,
    CONSTRAINT fk_coordenador_usuario FOREIGN KEY (usuario_id) 
        REFERENCES Usuario(id) ON DELETE CASCADE
);

-- Herança: Administrador
CREATE TABLE Administrador (
    usuario_id INT PRIMARY KEY,
    CONSTRAINT fk_administrador_usuario FOREIGN KEY (usuario_id) 
        REFERENCES Usuario(id) ON DELETE CASCADE
);

-- Tabela: Evento
CREATE TABLE Evento (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    instituicao VARCHAR(255),
    modalidade VARCHAR(255),
    dataInicio DATE,
    dataFim DATE,
    status VARCHAR(50)
);

-- Tabela: Atividade
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

-- Tabela: Inscricao
CREATE TABLE Inscricao (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50),
    data DATE DEFAULT CURRENT_DATE,
    participante_id INT NOT NULL,
    evento_id INT NOT NULL,
    CONSTRAINT fk_inscricao_participante FOREIGN KEY (participante_id) 
        REFERENCES Participante(usuario_id),
    CONSTRAINT fk_inscricao_evento FOREIGN KEY (evento_id) 
        REFERENCES Evento(id)
);

-- Tabela: Certificado
CREATE TABLE Certificado (
    codigo VARCHAR(255) PRIMARY KEY,
    cargaHoraria INT,
    status VARCHAR(50),
    participante_id INT NOT NULL,
    evento_id INT NOT NULL,
    CONSTRAINT fk_certificado_participante FOREIGN KEY (participante_id) 
        REFERENCES Participante(usuario_id),
    CONSTRAINT fk_certificado_evento FOREIGN KEY (evento_id) 
        REFERENCES Evento(id)
);

-- Tabela: Presenca
CREATE TABLE Presenca (
    checkIn TIMESTAMP, -- datetime no Postgres é TIMESTAMP
    checkOut TIMESTAMP,
    participante_id INT NOT NULL,
    atividade_id INT NOT NULL,
    PRIMARY KEY (participante_id, atividade_id),
    CONSTRAINT fk_presenca_participante FOREIGN KEY (participante_id) 
        REFERENCES Participante(usuario_id),
    CONSTRAINT fk_presenca_atividade FOREIGN KEY (atividade_id) 
        REFERENCES Atividade(id)
);