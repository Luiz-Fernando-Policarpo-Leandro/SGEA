# API Documentation - SGEA

Sistema de Gerenciamento de Eventos Academicos

---

## Informacoes Gerais

| Item | Valor |
|---|---|
| **Base URL** | `http://localhost:3333/api` |
| **Formato** | JSON |
| **Content-Type** | `application/json` |
| **Banco de dados** | PostgreSQL |
| **Framework** | Express 5 + TypeScript |

### Headers Padrao

Todas as requisicoes que enviam dados devem incluir:

```
Content-Type: application/json
```

### Formato de Erro

Todos os erros retornam o seguinte formato:

```json
{
  "error": "Mensagem descritiva do erro"
}
```

### Codigos HTTP

| Codigo | Significado | Quando ocorre |
|---|---|---|
| `200` | OK | Leitura ou atualizacao bem-sucedida |
| `201` | Created | Recurso criado com sucesso |
| `204` | No Content | Recurso deletado com sucesso |
| `400` | Bad Request | Dados invalidos, FK inexistente, recurso duplicado |
| `404` | Not Found | ID ou codigo nao encontrado |
| `500` | Internal Server Error | Erro no banco ou excecao nao tratada |

---

## Arquitetura do Banco

### Modelo de Heranca

O sistema utiliza um modelo de heranca com tabela pai (`Usuario`) e tabelas filhas (`Participante`, `Coordenador`, `Administrador`). O campo `tipo` **nao existe** na tabela `Usuario` — ele e calculado dinamicamente pela view `vw_usuario_tipo` baseada em qual tabela filha contem o registro.

```
Usuario (id, nome, email, senha)
  ├── Participante (usuario_id, categoria)
  ├── Coordenador  (usuario_id)
  └── Administrador(usuario_id)
```

### View: vw_usuario_tipo

```sql
SELECT u.id, u.nome, u.email, u.senha,
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
```

> **Por que VIEW e nao CHECK constraint?** A VIEW garante que o tipo e sempre um reflexo dos dados reais. E impossivel ter `tipo='participante'` sem um registro em `Participante`. Com CHECK constraint, o campo `tipo` poderia ficar dessincronizado com as tabelas filhas, gerando inconsistencia silenciosa.

---

## 1. Usuarios

Gerencia a tabela base `Usuario`. O tipo do usuario e determinado automaticamente pela tabela filha em que ele for cadastrado.

### 1.1 Criar Usuario

```
POST /api/usuarios
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `nome` | string | Sim | Nome completo do usuario (max 255 chars) |
| `email` | string | Sim | Email unico (max 255 chars) |
| `senha` | string | Sim | Senha do usuario (max 255 chars) |

**Exemplo de requisicao:**

```bash
curl -X POST http://localhost:3333/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Joao Silva",
    "email": "joao@email.com",
    "senha": "123456"
  }'
```

**Resposta de sucesso `201 Created`:**

```json
{
  "id": 1,
  "nome": "Joao Silva",
  "email": "joao@email.com",
  "senha": "123456"
}
```

**Resposta de erro `500` (email duplicado):**

```json
{
  "error": "duplicate key value violates unique constraint \"usuario_email_key\""
}
```

---

### 1.2 Listar Usuarios

```
GET /api/usuarios
```

Retorna todos os usuarios com o campo `tipo` calculado pela view `vw_usuario_tipo`, ordenados por `id`.

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/usuarios
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "id": 1,
    "nome": "Joao Silva",
    "email": "joao@email.com",
    "tipo": "participante"
  },
  {
    "id": 2,
    "nome": "Maria Santos",
    "email": "maria@email.com",
    "tipo": "coordenador"
  },
  {
    "id": 3,
    "nome": "Carlos Oliveira",
    "email": "carlos@email.com",
    "tipo": "administrador"
  }
]
```

> **Nota:** Usuarios sem registro em nenhuma tabela filha terao `tipo: "sem_perfil"`.

---

### 1.3 Buscar Usuario por ID

```
GET /api/usuarios/:id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID do usuario |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/usuarios/1
```

**Resposta de sucesso `200 OK`:**

```json
{
  "id": 1,
  "nome": "Joao Silva",
  "email": "joao@email.com",
  "tipo": "participante"
}
```

**Resposta de erro `404 Not Found`:**

```json
{
  "error": "Usuario nao encontrado"
}
```

---

### 1.4 Atualizar Usuario

```
PUT /api/usuarios/:id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID do usuario |

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `nome` | string | Nao | Novo nome |
| `email` | string | Nao | Novo email (deve ser unico) |
| `senha` | string | Nao | Nova senha. Se omitido, mantem a atual |

**Exemplo de requisicao:**

```bash
curl -X PUT http://localhost:3333/api/usuarios/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Joao Silva Santos",
    "email": "joao.santos@email.com"
  }'
```

**Resposta de sucesso `200 OK`:**

```json
{
  "id": 1,
  "nome": "Joao Silva Santos",
  "email": "joao.santos@email.com"
}
```

**Resposta de erro `404 Not Found`:**

```json
{
  "error": "Usuario nao encontrado"
}
```

---

### 1.5 Deletar Usuario

```
DELETE /api/usuarios/:id
```

> **Atencao:** Deletar um usuario deleta em cascata todos os registros nas tabelas filhas (`Participante`, `Coordenador`, `Administrador`) e registros dependentes (`Inscricao`, `Certificado`, `Presenca`).

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID do usuario |

**Exemplo de requisicao:**

```bash
curl -X DELETE http://localhost:3333/api/usuarios/1
```

**Resposta de sucesso `204 No Content`:**

*(corpo vazio)*

**Resposta de erro `404 Not Found`:**

```json
{
  "error": "Usuario nao encontrado"
}
```

---

## 2. Participantes

Gerencia a tabela `Participante`. Um participante e um usuario com registro nesta tabela. O campo `categoria` define o papel do participante (ex: `aluno`, `professor`, `visitante`).

### 2.1 Criar Participante

```
POST /api/participantes
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `usuario_id` | number | Sim | ID do usuario existente |
| `categoria` | string | Sim | Categoria do participante |

**Exemplo de requisicao:**

```bash
curl -X POST http://localhost:3333/api/participantes \
  -H "Content-Type: application/json" \
  -d '{
    "usuario_id": 1,
    "categoria": "aluno"
  }'
```

**Resposta de sucesso `201 Created`:**

```json
{
  "usuario_id": 1,
  "categoria": "aluno"
}
```

**Resposta de erro `400` (usuario nao existe):**

```json
{
  "error": "Usuario nao encontrado"
}
```

**Resposta de erro `400` (participante ja existe):**

```json
{
  "error": "Participante ja cadastrado"
}
```

---

### 2.2 Listar Participantes

```
GET /api/participantes
```

Retorna todos os participantes com dados do usuario (nome e email) via JOIN.

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/participantes
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "usuario_id": 1,
    "categoria": "aluno",
    "nome": "Joao Silva",
    "email": "joao@email.com"
  },
  {
    "usuario_id": 5,
    "categoria": "professor",
    "nome": "Maria Santos",
    "email": "maria@email.com"
  }
]
```

---

### 2.3 Buscar Participante por ID

```
GET /api/participantes/:id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID do usuario (usuario_id) |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/participantes/1
```

**Resposta de sucesso `200 OK`:**

```json
{
  "usuario_id": 1,
  "categoria": "aluno",
  "nome": "Joao Silva",
  "email": "joao@email.com"
}
```

**Resposta de erro `404 Not Found`:**

```json
{
  "error": "Participante nao encontrado"
}
```

---

### 2.4 Atualizar Participante

```
PUT /api/participantes/:id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID do usuario (usuario_id) |

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `categoria` | string | Sim | Nova categoria |

**Exemplo de requisicao:**

```bash
curl -X PUT http://localhost:3333/api/participantes/1 \
  -H "Content-Type: application/json" \
  -d '{
    "categoria": "professor"
  }'
```

**Resposta de sucesso `200 OK`:**

```json
{
  "usuario_id": 1,
  "categoria": "professor"
}
```

---

### 2.5 Deletar Participante

```
DELETE /api/participantes/:id
```

> Deletar um participante tambem deleta em cascata suas inscricoes, certificados e presencas.

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID do usuario (usuario_id) |

**Exemplo de requisicao:**

```bash
curl -X DELETE http://localhost:3333/api/participantes/1
```

**Resposta de sucesso `204 No Content`:**

*(corpo vazio)*

---

## 3. Coordenadores

Gerencia a tabela `Coordenador`. Um coordenador e um usuario com registro nesta tabela. Nao possui campos alem do `usuario_id`.

### 3.1 Criar Coordenador

```
POST /api/coordenadores
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `usuario_id` | number | Sim | ID do usuario existente |

**Exemplo de requisicao:**

```bash
curl -X POST http://localhost:3333/api/coordenadores \
  -H "Content-Type: application/json" \
  -d '{
    "usuario_id": 2
  }'
```

**Resposta de sucesso `201 Created`:**

```json
{
  "usuario_id": 2
}
```

**Resposta de erro `400` (usuario nao existe):**

```json
{
  "error": "Usuario nao encontrado"
}
```

**Resposta de erro `400` (coordenador ja existe):**

```json
{
  "error": "Coordenador ja cadastrado"
}
```

---

### 3.2 Listar Coordenadores

```
GET /api/coordenadores
```

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/coordenadores
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "usuario_id": 2,
    "nome": "Maria Santos",
    "email": "maria@email.com"
  },
  {
    "usuario_id": 8,
    "nome": "Pedro Costa",
    "email": "pedro@email.com"
  }
]
```

---

### 3.3 Buscar Coordenador por ID

```
GET /api/coordenadores/:id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID do usuario (usuario_id) |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/coordenadores/2
```

**Resposta de sucesso `200 OK`:**

```json
{
  "usuario_id": 2,
  "nome": "Maria Santos",
  "email": "maria@email.com"
}
```

**Resposta de erro `404 Not Found`:**

```json
{
  "error": "Coordenador nao encontrado"
}
```

---

### 3.4 Deletar Coordenador

```
DELETE /api/coordenadores/:id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID do usuario (usuario_id) |

**Exemplo de requisicao:**

```bash
curl -X DELETE http://localhost:3333/api/coordenadores/2
```

**Resposta de sucesso `204 No Content`:**

*(corpo vazio)*

---

## 4. Administradores

Gerencia a tabela `Administrador`. Um administrador e um usuario com registro nesta tabela. Nao possui campos alem do `usuario_id`.

### 4.1 Criar Administrador

```
POST /api/administradores
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `usuario_id` | number | Sim | ID do usuario existente |

**Exemplo de requisicao:**

```bash
curl -X POST http://localhost:3333/api/administradores \
  -H "Content-Type: application/json" \
  -d '{
    "usuario_id": 3
  }'
```

**Resposta de sucesso `201 Created`:**

```json
{
  "usuario_id": 3
}
```

**Resposta de erro `400` (usuario nao existe):**

```json
{
  "error": "Usuario nao encontrado"
}
```

**Resposta de erro `400` (administrador ja existe):**

```json
{
  "error": "Administrador ja cadastrado"
}
```

---

### 4.2 Listar Administradores

```
GET /api/administradores
```

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/administradores
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "usuario_id": 3,
    "nome": "Carlos Oliveira",
    "email": "carlos@email.com"
  },
  {
    "usuario_id": 9,
    "nome": "Ana Souza",
    "email": "ana@email.com"
  }
]
```

---

### 4.3 Buscar Administrador por ID

```
GET /api/administradores/:id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID do usuario (usuario_id) |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/administradores/3
```

**Resposta de sucesso `200 OK`:**

```json
{
  "usuario_id": 3,
  "nome": "Carlos Oliveira",
  "email": "carlos@email.com"
}
```

**Resposta de erro `404 Not Found`:**

```json
{
  "error": "Administrador nao encontrado"
}
```

---

### 4.4 Deletar Administrador

```
DELETE /api/administradores/:id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID do usuario (usuario_id) |

**Exemplo de requisicao:**

```bash
curl -X DELETE http://localhost:3333/api/administradores/3
```

**Resposta de sucesso `204 No Content`:**

*(corpo vazio)*

---

## 5. Eventos

Gerencia a tabela `Evento`. Eventos sao a entidade central do sistema, agrupando atividades e inscricoes.

### 5.1 Criar Evento

```
POST /api/eventos
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `nome` | string | Sim | Nome do evento (max 255 chars) |
| `instituicao` | string | Nao | Instituicao promotora |
| `modalidade` | string | Nao | Modalidade (`presencial`, `online`, `hibrido`) |
| `dataInicio` | date | Nao | Data de inicio (formato `YYYY-MM-DD`) |
| `dataFim` | date | Nao | Data de termino (formato `YYYY-MM-DD`) |
| `status` | string | Nao | Status (`ativo`, `pendente`, `cancelado`, `finalizado`) |

**Exemplo de requisicao:**

```bash
curl -X POST http://localhost:3333/api/eventos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Semana de Tecnologia",
    "instituicao": "UFMG",
    "modalidade": "presencial",
    "dataInicio": "2026-06-01",
    "dataFim": "2026-06-05",
    "status": "ativo"
  }'
```

**Resposta de sucesso `201 Created`:**

```json
{
  "id": 1,
  "nome": "Semana de Tecnologia",
  "instituicao": "UFMG",
  "modalidade": "presencial",
  "dataInicio": "2026-06-01T00:00:00.000Z",
  "dataFim": "2026-06-05T00:00:00.000Z",
  "status": "ativo"
}
```

---

### 5.2 Listar Eventos

```
GET /api/eventos
```

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/eventos
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "id": 1,
    "nome": "Semana de Tecnologia",
    "instituicao": "UFMG",
    "modalidade": "presencial",
    "dataInicio": "2026-06-01T00:00:00.000Z",
    "dataFim": "2026-06-05T00:00:00.000Z",
    "status": "ativo"
  },
  {
    "id": 2,
    "nome": "Congresso de IA",
    "instituicao": "USP",
    "modalidade": "hibrido",
    "dataInicio": "2026-07-10T00:00:00.000Z",
    "dataFim": "2026-07-12T00:00:00.000Z",
    "status": "ativo"
  }
]
```

---

### 5.3 Buscar Evento por ID

```
GET /api/eventos/:id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID do evento |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/eventos/1
```

**Resposta de sucesso `200 OK`:**

```json
{
  "id": 1,
  "nome": "Semana de Tecnologia",
  "instituicao": "UFMG",
  "modalidade": "presencial",
  "dataInicio": "2026-06-01T00:00:00.000Z",
  "dataFim": "2026-06-05T00:00:00.000Z",
  "status": "ativo"
}
```

**Resposta de erro `404 Not Found`:**

```json
{
  "error": "Evento nao encontrado"
}
```

---

### 5.4 Atualizar Evento

```
PUT /api/eventos/:id
```

**Body:** Todos os campos sao opcionais. Envie apenas os que deseja alterar.

| Campo | Tipo | Descricao |
|---|---|---|
| `nome` | string | Novo nome |
| `instituicao` | string | Nova instituicao |
| `modalidade` | string | Nova modalidade |
| `dataInicio` | date | Nova data de inicio |
| `dataFim` | date | Nova data de termino |
| `status` | string | Novo status |

**Exemplo de requisicao:**

```bash
curl -X PUT http://localhost:3333/api/eventos/1 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "finalizado"
  }'
```

**Resposta de sucesso `200 OK`:**

```json
{
  "id": 1,
  "nome": "Semana de Tecnologia",
  "instituicao": "UFMG",
  "modalidade": "presencial",
  "dataInicio": "2026-06-01T00:00:00.000Z",
  "dataFim": "2026-06-05T00:00:00.000Z",
  "status": "finalizado"
}
```

---

### 5.5 Deletar Evento

```
DELETE /api/eventos/:id
```

> Deletar um evento deleta em cascata todas as atividades associadas.

**Exemplo de requisicao:**

```bash
curl -X DELETE http://localhost:3333/api/eventos/1
```

**Resposta de sucesso `204 No Content`:**

*(corpo vazio)*

---

## 6. Atividades

Gerencia a tabela `Atividade`. Atividades pertencem a um evento e possuem carga horaria, vagas e local.

### 6.1 Criar Atividade

```
POST /api/atividades
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `titulo` | string | Sim | Titulo da atividade |
| `cargaHoraria` | number | Nao | Carga horaria em horas |
| `vagas` | number | Nao | Numero maximo de vagas |
| `local` | string | Nao | Local da atividade |
| `evento_id` | number | Sim | ID do evento ao qual pertence |

**Exemplo de requisicao:**

```bash
curl -X POST http://localhost:3333/api/atividades \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Workshop de Node.js",
    "cargaHoraria": 8,
    "vagas": 30,
    "local": "Sala A",
    "evento_id": 1
  }'
```

**Resposta de sucesso `201 Created`:**

```json
{
  "id": 1,
  "titulo": "Workshop de Node.js",
  "cargaHoraria": 8,
  "vagas": 30,
  "local": "Sala A",
  "evento_id": 1
}
```

**Resposta de erro `400` (evento nao existe):**

```json
{
  "error": "Evento nao encontrado"
}
```

---

### 6.2 Listar Atividades

```
GET /api/atividades
```

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/atividades
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "id": 1,
    "titulo": "Workshop de Node.js",
    "cargaHoraria": 8,
    "vagas": 30,
    "local": "Sala A",
    "evento_id": 1
  },
  {
    "id": 2,
    "titulo": "Palestra sobre IA",
    "cargaHoraria": 4,
    "vagas": 100,
    "local": "Auditorio",
    "evento_id": 1
  }
]
```

---

### 6.3 Listar Atividades por Evento

```
GET /api/atividades/evento/:evento_id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `evento_id` | path | number | ID do evento |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/atividades/evento/1
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "id": 1,
    "titulo": "Workshop de Node.js",
    "cargaHoraria": 8,
    "vagas": 30,
    "local": "Sala A",
    "evento_id": 1
  },
  {
    "id": 2,
    "titulo": "Palestra sobre IA",
    "cargaHoraria": 4,
    "vagas": 100,
    "local": "Auditorio",
    "evento_id": 1
  }
]
```

---

### 6.4 Buscar Atividade por ID

```
GET /api/atividades/:id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID da atividade |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/atividades/1
```

**Resposta de sucesso `200 OK`:**

```json
{
  "id": 1,
  "titulo": "Workshop de Node.js",
  "cargaHoraria": 8,
  "vagas": 30,
  "local": "Sala A",
  "evento_id": 1
}
```

**Resposta de erro `404 Not Found`:**

```json
{
  "error": "Atividade nao encontrada"
}
```

---

### 6.5 Atualizar Atividade

```
PUT /api/atividades/:id
```

**Body:** Todos os campos sao opcionais.

| Campo | Tipo | Descricao |
|---|---|---|
| `titulo` | string | Novo titulo |
| `cargaHoraria` | number | Nova carga horaria |
| `vagas` | number | Novo numero de vagas |
| `local` | string | Novo local |
| `evento_id` | number | Novo evento |

**Exemplo de requisicao:**

```bash
curl -X PUT http://localhost:3333/api/atividades/1 \
  -H "Content-Type: application/json" \
  -d '{
    "vagas": 50,
    "local": "Auditorio Principal"
  }'
```

**Resposta de sucesso `200 OK`:**

```json
{
  "id": 1,
  "titulo": "Workshop de Node.js",
  "cargaHoraria": 8,
  "vagas": 50,
  "local": "Auditorio Principal",
  "evento_id": 1
}
```

---

### 6.6 Deletar Atividade

```
DELETE /api/atividades/:id
```

> Deletar uma atividade deleta em cascata todas as presencas associadas.

**Exemplo de requisicao:**

```bash
curl -X DELETE http://localhost:3333/api/atividades/1
```

**Resposta de sucesso `204 No Content`:**

*(corpo vazio)*

---

## 7. Inscricoes

Gerencia a tabela `Inscricao`. Vincula participantes a eventos com um status.

### 7.1 Criar Inscrição

```
POST /api/inscricoes
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `status` | string | Nao | Status da inscricao. Padrao: `pendente`. Valores comuns: `pendente`, `confirmada`, `cancelada` |
| `participante_id` | number | Sim | ID do participante (usuario_id) |
| `evento_id` | number | Sim | ID do evento |

**Exemplo de requisicao:**

```bash
curl -X POST http://localhost:3333/api/inscricoes \
  -H "Content-Type: application/json" \
  -d '{
    "participante_id": 1,
    "evento_id": 1,
    "status": "confirmada"
  }'
```

**Resposta de sucesso `201 Created`:**

```json
{
  "id": 1,
  "status": "confirmada",
  "data": "2026-05-18T00:00:00.000Z",
  "participante_id": 1,
  "evento_id": 1
}
```

> O campo `data` e preenchido automaticamente com `CURRENT_DATE` se nao fornecido.

**Resposta de erro `400` (participante nao existe):**

```json
{
  "error": "Participante nao encontrado"
}
```

**Resposta de erro `400` (evento nao existe):**

```json
{
  "error": "Evento nao encontrado"
}
```

---

### 7.2 Listar Inscricoes

```
GET /api/inscricoes
```

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/inscricoes
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "id": 1,
    "status": "confirmada",
    "data": "2026-05-18T00:00:00.000Z",
    "participante_id": 1,
    "evento_id": 1
  },
  {
    "id": 2,
    "status": "pendente",
    "data": "2026-05-19T00:00:00.000Z",
    "participante_id": 1,
    "evento_id": 2
  }
]
```

---

### 7.3 Listar Inscricoes por Participante

```
GET /api/inscricoes/participante/:participante_id
```

Retorna todas as inscricoes de um participante, incluindo o nome do evento.

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `participante_id` | path | number | ID do participante |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/inscricoes/participante/1
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "id": 1,
    "status": "confirmada",
    "data": "2026-05-18T00:00:00.000Z",
    "participante_id": 1,
    "evento_id": 1,
    "evento_nome": "Semana de Tecnologia"
  },
  {
    "id": 2,
    "status": "pendente",
    "data": "2026-05-19T00:00:00.000Z",
    "participante_id": 1,
    "evento_id": 2,
    "evento_nome": "Congresso de IA"
  }
]
```

---

### 7.4 Listar Inscricoes por Evento

```
GET /api/inscricoes/evento/:evento_id
```

Retorna todas as inscricoes de um evento, incluindo o nome do participante.

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `evento_id` | path | number | ID do evento |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/inscricoes/evento/1
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "id": 1,
    "status": "confirmada",
    "data": "2026-05-18T00:00:00.000Z",
    "participante_id": 1,
    "evento_id": 1,
    "participante_nome": "Joao Silva"
  },
  {
    "id": 5,
    "status": "pendente",
    "data": "2026-05-20T00:00:00.000Z",
    "participante_id": 3,
    "evento_id": 1,
    "participante_nome": "Carlos Oliveira"
  }
]
```

---

### 7.5 Buscar Inscrição por ID

```
GET /api/inscricoes/:id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `id` | path | number | ID da inscricao |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/inscricoes/1
```

**Resposta de sucesso `200 OK`:**

```json
{
  "id": 1,
  "status": "confirmada",
  "data": "2026-05-18T00:00:00.000Z",
  "participante_id": 1,
  "evento_id": 1
}
```

**Resposta de erro `404 Not Found`:**

```json
{
  "error": "Inscricao nao encontrada"
}
```

---

### 7.6 Atualizar Inscrição

```
PUT /api/inscricoes/:id
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `status` | string | Sim | Novo status |

**Exemplo de requisicao:**

```bash
curl -X PUT http://localhost:3333/api/inscricoes/1 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "confirmada"
  }'
```

**Resposta de sucesso `200 OK`:**

```json
{
  "id": 1,
  "status": "confirmada",
  "data": "2026-05-18T00:00:00.000Z",
  "participante_id": 1,
  "evento_id": 1
}
```

---

### 7.7 Deletar Inscrição

```
DELETE /api/inscricoes/:id
```

**Exemplo de requisicao:**

```bash
curl -X DELETE http://localhost:3333/api/inscricoes/1
```

**Resposta de sucesso `204 No Content`:**

*(corpo vazio)*

---

## 8. Certificados

Gerencia a tabela `Certificado`. Certificados sao emitidos para participantes de eventos e possuem um codigo unico.

### 8.1 Criar Certificado

```
POST /api/certificados
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `codigo` | string | Sim | Codigo unico do certificado (ex: `CERT-2026-0001`) |
| `cargaHoraria` | number | Nao | Carga horaria total do evento |
| `status` | string | Nao | Status (`emitido`, `pendente`, `cancelado`) |
| `participante_id` | number | Sim | ID do participante |
| `evento_id` | number | Sim | ID do evento |

**Exemplo de requisicao:**

```bash
curl -X POST http://localhost:3333/api/certificados \
  -H "Content-Type: application/json" \
  -d '{
    "codigo": "CERT-2026-0001",
    "cargaHoraria": 40,
    "status": "emitido",
    "participante_id": 1,
    "evento_id": 1
  }'
```

**Resposta de sucesso `201 Created`:**

```json
{
  "codigo": "CERT-2026-0001",
  "cargaHoraria": 40,
  "status": "emitido",
  "participante_id": 1,
  "evento_id": 1
}
```

**Resposta de erro `400` (participante nao existe):**

```json
{
  "error": "Participante nao encontrado"
}
```

**Resposta de erro `400` (evento nao existe):**

```json
{
  "error": "Evento nao encontrado"
}
```

---

### 8.2 Listar Certificados

```
GET /api/certificados
```

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/certificados
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "codigo": "CERT-2026-0001",
    "cargaHoraria": 40,
    "status": "emitido",
    "participante_id": 1,
    "evento_id": 1
  },
  {
    "codigo": "CERT-2026-0002",
    "cargaHoraria": 20,
    "status": "emitido",
    "participante_id": 3,
    "evento_id": 2
  }
]
```

---

### 8.3 Listar Certificados por Participante

```
GET /api/certificados/participante/:participante_id
```

Retorna todos os certificados de um participante, incluindo o nome do evento.

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `participante_id` | path | number | ID do participante |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/certificados/participante/1
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "codigo": "CERT-2026-0001",
    "cargaHoraria": 40,
    "status": "emitido",
    "participante_id": 1,
    "evento_id": 1,
    "evento_nome": "Semana de Tecnologia"
  }
]
```

---

### 8.4 Buscar Certificado por Codigo

```
GET /api/certificados/:codigo
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `codigo` | path | string | Codigo do certificado |

> Este endpoint usa o `codigo` como identificador, nao um ID numerico.

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/certificados/CERT-2026-0001
```

**Resposta de sucesso `200 OK`:**

```json
{
  "codigo": "CERT-2026-0001",
  "cargaHoraria": 40,
  "status": "emitido",
  "participante_id": 1,
  "evento_id": 1
}
```

**Resposta de erro `404 Not Found`:**

```json
{
  "error": "Certificado nao encontrado"
}
```

---

### 8.5 Atualizar Certificado

```
PUT /api/certificados/:codigo
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `cargaHoraria` | number | Nao | Nova carga horaria |
| `status` | string | Nao | Novo status |
| `participante_id` | number | Nao | Novo participante |
| `evento_id` | number | Nao | Novo evento |

**Exemplo de requisicao:**

```bash
curl -X PUT http://localhost:3333/api/certificados/CERT-2026-0001 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "cancelado"
  }'
```

**Resposta de sucesso `200 OK`:**

```json
{
  "codigo": "CERT-2026-0001",
  "cargaHoraria": 40,
  "status": "cancelado",
  "participante_id": 1,
  "evento_id": 1
}
```

---

### 8.6 Deletar Certificado

```
DELETE /api/certificados/:codigo
```

**Exemplo de requisicao:**

```bash
curl -X DELETE http://localhost:3333/api/certificados/CERT-2026-0001
```

**Resposta de sucesso `204 No Content`:**

*(corpo vazio)*

---

## 9. Presencas

Gerencia a tabela `Presenca`. Registra a presenca de participantes em atividades com timestamps de check-in e check-out. A chave primaria e composta por `(participante_id, atividade_id)`.

### 9.1 Criar Presença

```
POST /api/presencas
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `checkIn` | timestamp | Nao | Data/hora do check-in. Padrao: `now()` |
| `checkOut` | timestamp | Nao | Data/hora do check-out |
| `participante_id` | number | Sim | ID do participante |
| `atividade_id` | number | Sim | ID da atividade |

**Exemplo de requisicao:**

```bash
curl -X POST http://localhost:3333/api/presencas \
  -H "Content-Type: application/json" \
  -d '{
    "participante_id": 1,
    "atividade_id": 1
  }'
```

**Resposta de sucesso `201 Created`:**

```json
{
  "checkIn": "2026-05-18T14:30:00.000Z",
  "checkOut": null,
  "participante_id": 1,
  "atividade_id": 1
}
```

**Resposta de erro `400` (participante nao existe):**

```json
{
  "error": "Participante nao encontrado"
}
```

**Resposta de erro `400` (atividade nao existe):**

```json
{
  "error": "Atividade nao encontrada"
}
```

---

### 9.2 Listar Presenças

```
GET /api/presencas
```

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/presencas
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "checkIn": "2026-05-18T14:30:00.000Z",
    "checkOut": "2026-05-18T18:00:00.000Z",
    "participante_id": 1,
    "atividade_id": 1
  },
  {
    "checkIn": "2026-05-18T15:00:00.000Z",
    "checkOut": null,
    "participante_id": 3,
    "atividade_id": 1
  }
]
```

---

### 9.3 Listar Presenças por Participante

```
GET /api/presencas/participante/:participante_id
```

Retorna todas as presencas de um participante, incluindo o titulo da atividade.

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `participante_id` | path | number | ID do participante |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/presencas/participante/1
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "checkIn": "2026-05-18T14:30:00.000Z",
    "checkOut": "2026-05-18T18:00:00.000Z",
    "participante_id": 1,
    "atividade_id": 1,
    "atividade_titulo": "Workshop de Node.js"
  },
  {
    "checkIn": "2026-05-19T09:00:00.000Z",
    "checkOut": "2026-05-19T12:00:00.000Z",
    "participante_id": 1,
    "atividade_id": 2,
    "atividade_titulo": "Palestra sobre IA"
  }
]
```

---

### 9.4 Listar Presenças por Atividade

```
GET /api/presencas/atividade/:atividade_id
```

Retorna todas as presencas de uma atividade, incluindo o nome do participante.

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `atividade_id` | path | number | ID da atividade |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/presencas/atividade/1
```

**Resposta de sucesso `200 OK`:**

```json
[
  {
    "checkIn": "2026-05-18T14:30:00.000Z",
    "checkOut": "2026-05-18T18:00:00.000Z",
    "participante_id": 1,
    "atividade_id": 1,
    "participante_nome": "Joao Silva"
  },
  {
    "checkIn": "2026-05-18T15:00:00.000Z",
    "checkOut": null,
    "participante_id": 3,
    "atividade_id": 1,
    "participante_nome": "Carlos Oliveira"
  }
]
```

---

### 9.5 Buscar Presença

```
GET /api/presencas/:participante_id/:atividade_id
```

**Parametros:**

| Parametro | Local | Tipo | Descricao |
|---|---|---|---|
| `participante_id` | path | number | ID do participante |
| `atividade_id` | path | number | ID da atividade |

**Exemplo de requisicao:**

```bash
curl http://localhost:3333/api/presencas/1/1
```

**Resposta de sucesso `200 OK`:**

```json
{
  "checkIn": "2026-05-18T14:30:00.000Z",
  "checkOut": "2026-05-18T18:00:00.000Z",
  "participante_id": 1,
  "atividade_id": 1
}
```

**Resposta de erro `404 Not Found`:**

```json
{
  "error": "Presenca nao encontrada"
}
```

---

### 9.6 Atualizar Presença

```
PUT /api/presencas/:participante_id/:atividade_id
```

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|---|---|---|---|
| `checkIn` | timestamp | Nao | Novo check-in |
| `checkOut` | timestamp | Nao | Novo check-out |

**Exemplo de requisicao:**

```bash
curl -X PUT http://localhost:3333/api/presencas/1/1 \
  -H "Content-Type: application/json" \
  -d '{
    "checkOut": "2026-05-18T18:30:00.000Z"
  }'
```

**Resposta de sucesso `200 OK`:**

```json
{
  "checkIn": "2026-05-18T14:30:00.000Z",
  "checkOut": "2026-05-18T18:30:00.000Z",
  "participante_id": 1,
  "atividade_id": 1
}
```

---

### 9.7 Deletar Presença

```
DELETE /api/presencas/:participante_id/:atividade_id
```

**Exemplo de requisicao:**

```bash
curl -X DELETE http://localhost:3333/api/presencas/1/1
```

**Resposta de sucesso `204 No Content`:**

*(corpo vazio)*

---

## Rotas Publicas

Estas rotas nao exigem autenticacao e estao fora do prefixo `/api`.

### Health Check

```
GET /health
```

**Resposta `200 OK`:**

```json
{
  "status": "UP"
}
```

---

### About

```
GET /about
```

**Resposta `200 OK`:**

```json
{
  "name": "o Sistema de Gerenciamento de Eventos Academicos.",
  "objective": "O objetivo principal deste software e centralizar e automatizar todo o ciclo de vida de eventos educacionais.",
  "license": "MIT"
}
```

---

## Resumo Completo de Rotas

| Metodo | Rota | Descricao |
|---|---|---|
| **Usuarios** | | |
| `POST` | `/api/usuarios` | Criar usuario |
| `GET` | `/api/usuarios` | Listar todos os usuarios |
| `GET` | `/api/usuarios/:id` | Buscar usuario por ID |
| `PUT` | `/api/usuarios/:id` | Atualizar usuario |
| `DELETE` | `/api/usuarios/:id` | Deletar usuario |
| **Participantes** | | |
| `POST` | `/api/participantes` | Criar participante |
| `GET` | `/api/participantes` | Listar todos os participantes |
| `GET` | `/api/participantes/:id` | Buscar participante por ID |
| `PUT` | `/api/participantes/:id` | Atualizar participante |
| `DELETE` | `/api/participantes/:id` | Deletar participante |
| **Coordenadores** | | |
| `POST` | `/api/coordenadores` | Criar coordenador |
| `GET` | `/api/coordenadores` | Listar todos os coordenadores |
| `GET` | `/api/coordenadores/:id` | Buscar coordenador por ID |
| `DELETE` | `/api/coordenadores/:id` | Deletar coordenador |
| **Administradores** | | |
| `POST` | `/api/administradores` | Criar administrador |
| `GET` | `/api/administradores` | Listar todos os administradores |
| `GET` | `/api/administradores/:id` | Buscar administrador por ID |
| `DELETE` | `/api/administradores/:id` | Deletar administrador |
| **Eventos** | | |
| `POST` | `/api/eventos` | Criar evento |
| `GET` | `/api/eventos` | Listar todos os eventos |
| `GET` | `/api/eventos/:id` | Buscar evento por ID |
| `PUT` | `/api/eventos/:id` | Atualizar evento |
| `DELETE` | `/api/eventos/:id` | Deletar evento |
| **Atividades** | | |
| `POST` | `/api/atividades` | Criar atividade |
| `GET` | `/api/atividades` | Listar todas as atividades |
| `GET` | `/api/atividades/evento/:evento_id` | Listar atividades por evento |
| `GET` | `/api/atividades/:id` | Buscar atividade por ID |
| `PUT` | `/api/atividades/:id` | Atualizar atividade |
| `DELETE` | `/api/atividades/:id` | Deletar atividade |
| **Inscricoes** | | |
| `POST` | `/api/inscricoes` | Criar inscricao |
| `GET` | `/api/inscricoes` | Listar todas as inscricoes |
| `GET` | `/api/inscricoes/participante/:participante_id` | Listar inscricoes por participante |
| `GET` | `/api/inscricoes/evento/:evento_id` | Listar inscricoes por evento |
| `GET` | `/api/inscricoes/:id` | Buscar inscricao por ID |
| `PUT` | `/api/inscricoes/:id` | Atualizar inscricao |
| `DELETE` | `/api/inscricoes/:id` | Deletar inscricao |
| **Certificados** | | |
| `POST` | `/api/certificados` | Criar certificado |
| `GET` | `/api/certificados` | Listar todos os certificados |
| `GET` | `/api/certificados/participante/:participante_id` | Listar certificados por participante |
| `GET` | `/api/certificados/:codigo` | Buscar certificado por codigo |
| `PUT` | `/api/certificados/:codigo` | Atualizar certificado |
| `DELETE` | `/api/certificados/:codigo` | Deletar certificado |
| **Presencas** | | |
| `POST` | `/api/presencas` | Criar presenca |
| `GET` | `/api/presencas` | Listar todas as presencas |
| `GET` | `/api/presencas/participante/:participante_id` | Listar presencas por participante |
| `GET` | `/api/presencas/atividade/:atividade_id` | Listar presencas por atividade |
| `GET` | `/api/presencas/:participante_id/:atividade_id` | Buscar presenca |
| `PUT` | `/api/presencas/:participante_id/:atividade_id` | Atualizar presenca |
| `DELETE` | `/api/presencas/:participante_id/:atividade_id` | Deletar presenca |
| **Publicas** | | |
| `GET` | `/health` | Health check |
| `GET` | `/about` | Informacoes do sistema |

---

## Fluxos de Uso Comuns

### Fluxo 1: Criar um participante e inscrever em um evento

```bash
# 1. Criar usuario
curl -X POST http://localhost:3333/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nome":"Joao Silva","email":"joao@email.com","senha":"123456"}'
# Resposta: { "id": 1, ... }

# 2. Tornar o usuario um participante
curl -X POST http://localhost:3333/api/participantes \
  -H "Content-Type: application/json" \
  -d '{"usuario_id":1,"categoria":"aluno"}'

# 3. Criar evento
curl -X POST http://localhost:3333/api/eventos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Semana de Tecnologia","instituicao":"UFMG","modalidade":"presencial","dataInicio":"2026-06-01","dataFim":"2026-06-05","status":"ativo"}'
# Resposta: { "id": 1, ... }

# 4. Inscrever participante no evento
curl -X POST http://localhost:3333/api/inscricoes \
  -H "Content-Type: application/json" \
  -d '{"participante_id":1,"evento_id":1,"status":"confirmada"}'
```

### Fluxo 2: Criar atividades para um evento e registrar presencas

```bash
# 1. Criar atividade para o evento 1
curl -X POST http://localhost:3333/api/atividades \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Workshop de Node.js","cargaHoraria":8,"vagas":30,"local":"Sala A","evento_id":1}'
# Resposta: { "id": 1, ... }

# 2. Registrar presenca do participante 1 na atividade 1
curl -X POST http://localhost:3333/api/presencas \
  -H "Content-Type: application/json" \
  -d '{"participante_id":1,"atividade_id":1}'
# Resposta: { "checkIn": "2026-05-18T14:30:00.000Z", ... }

# 3. Registrar check-out
curl -X PUT http://localhost:3333/api/presencas/1/1 \
  -H "Content-Type: application/json" \
  -d '{"checkOut":"2026-05-18T18:00:00.000Z"}'
```

### Fluxo 3: Emitir certificado apos confirmacao de inscricao

```bash
# 1. Verificar inscricao confirmada
curl http://localhost:3333/api/inscricoes/1
# Resposta: { "id": 1, "status": "confirmada", "participante_id": 1, "evento_id": 1 }

# 2. Emitir certificado
curl -X POST http://localhost:3333/api/certificados \
  -H "Content-Type: application/json" \
  -d '{"codigo":"CERT-2026-0001","cargaHoraria":40,"status":"emitido","participante_id":1,"evento_id":1}'
```

### Fluxo 4: Consultar todos os certificados de um participante

```bash
curl http://localhost:3333/api/certificados/participante/1
# Retorna todos os certificados com nome do evento
```

---

## Notas Importantes

### Cascata de Delecao

- Deletar `Usuario` → deleta `Participante`/`Coordenador`/`Administrador` → deleta `Inscricao`, `Certificado`, `Presenca`
- Deletar `Evento` → deleta `Atividade` associadas
- Deletar `Participante` → deleta `Inscricao`, `Certificado`, `Presenca` associadas
- Deletar `Atividade` → deleta `Presenca` associadas

### Chaves Primarias Especiais

- `Certificado` usa `codigo` (string) como chave primaria, nao um ID numerico
- `Presenca` usa chave composta `(participante_id, atividade_id)`

### Tipos de Usuario

O campo `tipo` e calculado pela view `vw_usuario_tipo`. Valores possiveis:

| Valor | Condicao |
|---|---|
| `participante` | Existe registro em `Participante` |
| `coordenador` | Existe registro em `Coordenador` |
| `administrador` | Existe registro em `Administrador` |
| `sem_perfil` | Nao existe em nenhuma tabela filha |

### Status Comuns

| Entidade | Valores recomendados |
|---|---|
| `Evento.status` | `ativo`, `pendente`, `cancelado`, `finalizado` |
| `Inscricao.status` | `pendente`, `confirmada`, `cancelada` |
| `Certificado.status` | `emitido`, `pendente`, `cancelado` |
