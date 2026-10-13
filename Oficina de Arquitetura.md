# Sistema de Agendamento da Clínica

Documentação arquitetural do sistema de agendamento da clínica, incluindo diagramas C4, requisitos de qualidade e decisões de arquitetura.

## Visão geral

O sistema tem como objetivo apoiar o cadastro de pacientes e profissionais e o gerenciamento de agendamentos de consultas. A solução contempla diferentes perfis de acesso e uma integração com um sistema externo para confirmação dos agendamentos.

## Perfis e responsabilidades

- **Recepcionista:** cadastra pacientes e realiza agendamentos, cancelamentos e remarcações.
- **Profissional da saúde:** consulta a agenda do dia, os pacientes e o status deles.
- **Dono da clínica:** acompanha indicadores mensais, como consultas, pacientes ativos e áreas mais procuradas.
- **Suporte:** gerencia usuários e perfis de acesso.

## Arquitetura documentada

A proposta registrada nas decisões arquiteturais utiliza arquitetura em camadas, organizada com o padrão MVC, e banco de dados relacional PostgreSQL.

O diagrama de contêineres apresenta os seguintes elementos:

- **Aplicação Web:** frontend em HTML, CSS e JavaScript, com telas de agenda, agendamento, cadastros, dashboards e usuários.
- **API Back-end:** Python/Django, responsável por regras de negócio, autenticação, perfis, agendamento, relatórios e integração.
- **Banco de dados:** PostgreSQL, para pacientes, profissionais, consultas e usuários.
- **Sistema externo:** recebe os agendamentos e confirma os registros por integração HTTPS, conforme representado no diagrama.

## Requisitos de qualidade

| Atributo | Métrica definida |
| --- | --- |
| Disponibilidade | 99% por mês, com no máximo 7 h 12 min de indisponibilidade em 30 dias |
| Desempenho | 95% das consultas de agenda em até 2 segundos, com 50 usuários simultâneos |
| Segurança | 100% das funcionalidades protegidas exigem login e zero acessos sem permissão |
| Usabilidade | Agendar em no máximo 3 cliques |
| Privacidade e LGPD | HTTPS em 100% do tráfego, dados sensíveis protegidos e 100% dos acessos a dados de pacientes registrados em log |

## Decisões de arquitetura

O documento de arquitetura registra:

1. **ADR 001 — Arquitetura em camadas com MVC:** separa apresentação, controle, modelo/regras de negócio e acesso aos dados.
2. **ADR 002 — Banco de dados relacional:** propõe PostgreSQL para manter relacionamentos, integridade e transações.

As decisões também registram alternativas consideradas e consequências para manutenção, testes, evolução e proteção dos dados.

## Estrutura dos documentos

- [`docs/diagrama-c4-contexto.pdf`](docs/diagrama-c4-contexto.pdf) — atores, sistema de agendamento e sistema externo.
- [`docs/diagrama-c4-conteineres.pdf`](docs/diagrama-c4-conteineres.pdf) — frontend, API back-end, PostgreSQL e integração externa.
- [`docs/requisitos-de-qualidade.pdf`](docs/requisitos-de-qualidade.pdf) — atributos e métricas de qualidade.
- [`docs/arquitetura-questoes-3-e-4.pdf`](docs/arquitetura-questoes-3-e-4.pdf) — estilo arquitetural e ADRs.

