INSERT INTO usuario (nome, email, senha)
SELECT
  'Usuario' || i,
  'usuario' || i || '@gmail.com',
  '1234'
FROM generate_series(1, 50) AS i;

INSERT INTO participante (usuario_id, categoria)
SELECT id, (ARRAY ['aluno', 'professor', 'visitante'])[floor(random() * 3 + 1)::int]
FROM usuario
WHERE id <= 17;

INSERT INTO coordenador (usuario_id)
SELECT id
FROM usuario
WHERE id > 17 AND id <= 34;

INSERT INTO administrador (usuario_id)
SELECT id
FROM usuario
WHERE id > 34;

INSERT INTO evento (nome, instituicao, modalidade, dataInicio, dataFim, status)
VALUES
  ('Semana de Tecnologia', 'UFMG', 'presencial', '2026-06-01', '2026-06-05', 'ativo'),
  ('Congresso de IA', 'USP', 'hibrido', '2026-07-10', '2026-07-12', 'ativo'),
  ('Workshop DevOps', 'UNICAMP', 'online', '2026-08-20', '2026-08-21', 'ativo'),
  ('Simpósio de Dados', 'UFRJ', 'presencial', '2026-09-05', '2026-09-07', 'ativo'),
  ('Hackathon Code', 'PUC', 'presencial', '2026-10-15', '2026-10-17', 'ativo'),
  ('Forum de Cyberseguranca', 'UFSC', 'hibrido', '2026-11-01', '2026-11-03', 'pendente'),
  ('Encontro de Robotics', 'ITA', 'presencial', '2026-11-20', '2026-11-22', 'pendente'),
  ('Palestra Cloud', 'FIAP', 'online', '2026-12-01', '2026-12-01', 'pendente'),
  ('Mini Curso React', 'UNESP', 'online', '2026-12-10', '2026-12-11', 'ativo'),
  ('Conferencia Mobile', 'UFRGS', 'presencial', '2027-01-15', '2027-01-17', 'pendente'),
  ('Seminario IoT', 'UFBA', 'hibrido', '2027-02-01', '2027-02-03', 'pendente'),
  ('Workshop Python', 'UFPE', 'online', '2027-02-20', '2027-02-21', 'ativo'),
  ('Congresso Blockchain', 'FGV', 'presencial', '2027-03-10', '2027-03-12', 'pendente'),
  ('Meetup Agile', 'Mackenzie', 'presencial', '2027-04-05', '2027-04-05', 'ativo'),
  ('Simpósio UX/UI', 'ESPM', 'online', '2027-04-20', '2027-04-21', 'pendente'),
  ('Forum de Games', 'PUCRS', 'presencial', '2027-05-10', '2027-05-12', 'pendente'),
  ('Hackathon Social', 'UNIFESP', 'hibrido', '2027-06-01', '2027-06-03', 'pendente'),
  ('Encontro de Data Science', 'USP', 'presencial', '2027-07-15', '2027-07-17', 'pendente'),
  ('Workshop Docker', 'UNICAMP', 'online', '2027-08-01', '2027-08-02', 'ativo'),
  ('Conferencia Tech', 'UFMG', 'presencial', '2027-09-10', '2027-09-12', 'pendente');

INSERT INTO atividade (titulo, cargaHoraria, vagas, local, evento_id)
SELECT
  'Atividade ' || a || ' - ' || e.nome,
  (ARRAY [4, 8, 12, 16, 20, 40])[floor(random() * 6 + 1)::int],
  (ARRAY [20, 30, 40, 50, 100])[floor(random() * 5 + 1)::int],
  (ARRAY ['Sala A', 'Sala B', 'Auditório', 'Lab 1', 'Online'])[floor(random() * 5 + 1)::int],
  e.id
FROM evento e
CROSS JOIN generate_series(1, 5) AS a;

INSERT INTO inscricao (status, data, participante_id, evento_id)
SELECT
  (ARRAY ['pendente', 'confirmada', 'cancelada'])[floor(random() * 3 + 1)::int],
  CURRENT_DATE - (random() * 30)::int,
  p.usuario_id,
  e.id
FROM participante p
CROSS JOIN LATERAL (
  SELECT id FROM evento ORDER BY random() LIMIT floor(random() * 5 + 1)::int
) e;

INSERT INTO certificado (codigo, cargaHoraria, status, participante_id, evento_id)
SELECT
  'CERT-' || TO_CHAR(CURRENT_DATE, 'YYYY') || '-' || LPAD(i.id::text, 4, '0'),
  (SELECT SUM(a.cargaHoraria) FROM atividade a WHERE a.evento_id = i.evento_id LIMIT 1),
  'emitido',
  i.participante_id,
  i.evento_id
FROM inscricao i
WHERE i.status = 'confirmada'
LIMIT 30;

INSERT INTO presenca (checkIn, checkOut, participante_id, atividade_id)
SELECT
  CURRENT_TIMESTAMP - (random() * 7 * interval '1 day'),
  CURRENT_TIMESTAMP - (random() * 6 * interval '1 day'),
  i.participante_id,
  a.id
FROM inscricao i
JOIN atividade a ON a.evento_id = i.evento_id
WHERE i.status = 'confirmada'
LIMIT 80;
