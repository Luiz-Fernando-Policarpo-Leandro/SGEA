# SGEA — Sistema de Gerenciamento de Eventos Acadêmicos

Plataforma fullstack para centralizar e automatizar todo o ciclo de vida de eventos educacionais — desde a criação e governança pela instituição promotora até a emissão de certificados validados.

## Funcionalidades

- **Autenticação JWT** com controle de acesso por papel (participante, coordenador, administrador)
- **CRUD de eventos** com status (ativo, pendente, concluído)
- **Gestão de atividades** por evento (palestras, workshops, mesas redondas)
- **Inscrições** de participantes em eventos
- **Registro de presença** (check-in/check-out por atividade)
- **Emissão e validação de certificados** por código único
- **Perfis de usuário** com edição de dados e senha

## Tech Stack

| Camada         | Tecnologia                                              |
| -------------- | ------------------------------------------------------- |
| Frontend       | React 18, Vite 8, Tailwind CSS 4, React Router 6, Axios |
| Backend        | Express 5, TypeScript 6, Node.js                        |
| Banco de Dados | PostgreSQL (Docker)                                     |
| Autenticação   | JWT (jsonwebtoken), bcryptjs                            |
| Validação      | Zod                                                     |

## Arquitetura

O backend segue **Clean Architecture** com separação em camadas:

```
backend/src/
  domain/           # Regras de negócio (independente de framework)
    entities/       # 9 entidades de domínio
    repositories/   # Interfaces/contratos dos repositórios
    use-cases/      # Casos de uso por entidade
  infra/            # Implementações de infraestrutura
    auth/           # Utilitários JWT
    database/       # Conexão PostgreSQL
    repositories/   # Implementações concretas (pg)
  presentation/     # Interface HTTP
    controllers/    # Handlers de requisição
    middlewares/    # Autenticação e autorização
    routes/         # Definição de rotas
  main/             # Composição e bootstrap
    config/         # Setup do Express e rotas
  data/             # Scripts SQL (schema e seed)
```

O frontend é organizado por componentes React com contexto de autenticação e serviço HTTP centralizado:

```
frontend/src/
  components/       # 19 componentes React (páginas e layouts)
  contexts/         # AuthContext (login, logout, perfil)
  services/         # api.js (Axios com interceptor JWT)
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20.19+
- [Docker](https://www.docker.com/) (para PostgreSQL)
- npm ou yarn

## Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/SGEA.git
cd SGEA
```

### 2. Subir o banco de dados com Docker

```bash
cd backend && docker compose up -d
```

O PostgreSQL fica disponível em `localhost:5431`. Em um volume novo, o Docker cria o schema e carrega os dados de demonstração automaticamente.

Para recriar manualmente a base existente, rode os comandos a partir da pasta `backend`. Isso apaga os dados atuais:

```bash
docker exec -i postgres_db psql -U root -d SGEA < src/data/DATABASE.sql
docker exec -i postgres_db psql -U root -d SGEA < src/data/POPULATION.sql
```

### 3. Configurar variáveis de ambiente

O arquivo `backend/.env` já contém os valores locais para conectar ao Docker:

```env
PORT=3333
PG_DBNAME=SGEA
PG_HOST=localhost
PG_USERNAME=root
PG_PASSWORD=
PG_PORT=5431
JWT_SECRET=SGEA_jwt_secret_key_2026
JWT_EXPIRES_IN=24h
```

### 4. Instalar dependências e rodar o backend

Em um terminal:

```bash
cd backend && npm install && npm run dev
```

API disponível em `http://localhost:3333/api`.

### 5. Instalar dependências e rodar o frontend

Em outro terminal:

```bash
cd frontend && npm install && npm run dev
```

Frontend disponível em `http://localhost:5173`. A variável `VITE_API_URL` aponta para a API na porta 3333.

### Credenciais de teste

Use este usuário de demonstração para entrar:

| Campo | Valor |
| ----- | ----- |
| E-mail | `usuario1@gmail.com` |
| Senha | `1234` |
| Perfil | Participante |

O seed também cria `usuario2@gmail.com` até `usuario50@gmail.com`, todos com a mesma senha `1234`.

## Papéis de Usuário

| Papel             | Permissões                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------ |
| **participante**  | Visualizar eventos, inscrever-se, ver seus certificados e presenças, editar próprio perfil |
| **coordenador**   | Tudo do participante + criar/editar eventos, atividades, gerenciar inscrições e presenças  |
| **administrador** | Tudo do coordenador + excluir eventos, gerenciar coordenadores e administradores           |

## Rotas da API

Todas as rotas autenticadas requerem header `Authorization: Bearer <token>`.

| Método | Rota                                 | Auth | Papel                      |
| ------ | ------------------------------------ | ---- | -------------------------- |
| POST   | `/api/login`                         | Não  | —                          |
| POST   | `/api/usuarios`                      | Não  | —                          |
| POST   | `/api/participantes`                 | Não  | — (auto-registro)          |
| POST   | `/api/coordenadores`                 | Não  | — (auto-registro)          |
| GET    | `/api/eventos`                       | Sim  | Qualquer                   |
| POST   | `/api/eventos`                       | Sim  | coordenador, administrador |
| GET    | `/api/atividades/evento/:evento_id`  | Sim  | Qualquer                   |
| POST   | `/api/atividades`                    | Sim  | coordenador, administrador |
| POST   | `/api/inscricoes`                    | Sim  | Qualquer                   |
| GET    | `/api/inscricoes/participante/:id`   | Sim  | Qualquer                   |
| GET    | `/api/inscricoes/evento/:evento_id`  | Sim  | coordenador, administrador |
| GET    | `/api/certificados/participante/:id` | Sim  | Qualquer                   |
| GET    | `/api/certificados/:codigo`          | Sim  | Qualquer                   |
| POST   | `/api/certificados`                  | Sim  | coordenador, administrador |
| POST   | `/api/presencas`                     | Sim  | coordenador, administrador |
| GET    | `/health`                            | Não  | —                          |

> Rotas de PUT e DELETE seguem o mesmo padrão de permissão. DELETE requer `administrador`.

## Esquema do Banco de Dados

```
usuarios ──1:1── participantes
         ──1:1── coordenadores
         ──1:1── administradores

eventos ──1:N── atividades
       ──1:N── inscricoes
       ──1:N── certificados

participantes ──1:N── inscricoes
             ──1:N── certificados
             ──1:N── presencas

atividades ──1:N── presencas
```

## Licença

MIT
