# Arquitetura documentada

## 1. Atributos de qualidade

| Atributo | Métrica definida |
| --- | --- |
| Disponibilidade | 99% por mês, com no máximo 7 h 12 min de indisponibilidade em 30 dias |
| Desempenho | 95% das consultas de agenda em até 2 segundos, com 50 usuários simultâneos |
| Segurança | 100% das funcionalidades protegidas exigem login e zero acessos sem permissão |
| Usabilidade | Agendar em no máximo 3 cliques |
| Privacidade e LGPD | HTTPS em 100% do tráfego, dados sensíveis protegidos e 100% dos acessos a dados de pacientes registrados em log |

## 2. Diagramas C4

#### 2.1 Diagrama de contexto
[diagrama c4 contexto](/Docs/modelos/diagramaC4-contexto.png)


#### 2.2 Diagrama de container

O diagrama de contêineres apresenta os seguintes elementos:

- **Aplicação Web:** frontend em HTML, CSS e JavaScript, com telas de agenda, agendamento, cadastros, dashboards e usuários.
- **API Back-end:** Python/Django, responsável por regras de negócio, autenticação, perfis, agendamento, relatórios e integração.
- **Banco de dados:** PostgreSQL, para pacientes, profissionais, consultas e usuários.
- **Sistema externo:** recebe os agendamentos e confirma os registros por integração HTTPS, conforme representado no diagrama.

[diagrama c4 container](/Docs/modelos/diagramaC4-container.png)

## 3. Justificativa da escolha arquitetural

A arquitetura escolhida para o sistema de gestão é o monólito modular com organização em camadas. Essa decisão considera o porte da aplicação, a necessidade de manter os custos reduzidos e a participação de vários integrantes no desenvolvimento.

O monólito modular permite que todas as funcionalidades sejam executadas em uma única aplicação, reduzindo a complexidade de implantação e operação. Ao mesmo tempo, a divisão em módulos, como recepcionista, agendamentos, profissionais e usuários, mantém as funcionalidades organizadas e com responsabilidades bem definidas.

A organização em camadas complementa essa estrutura ao separar a apresentação, as regras de negócio e o acesso aos dados, favorecendo a reutilização de código, a realização de testes e a manutenção do sistema. Essa abordagem também facilita a divisão das tarefas entre os integrantes da equipe e reduz a dependência entre as diferentes partes da aplicação.

Além disso, a arquitetura permite utilizar adicionar novas funcionalidades conforme as necessidades da clínica evoluam, sem exigir inicialmente a complexidade de uma arquitetura distribuída.

Também foi considerado a necessidade de proteger os dados pessoais dos pacientes e garantir a integridade das informações armazenadas.

A separação de responsabilidades permite organizar as validações, as regras de negócio e o acesso ao banco de dados, facilitando a implementação de mecanismos de autenticação, autorização, validação de dados e controle das operações realizadas no sistema.

Além disso, a divisão em módulos permite definir responsabilidades específicas para funcionalidades como pacientes, agendamentos e usuários, contribuindo para a aplicação de regras de acesso e para a manutenção do sistema.


## 4. Decisões de arquitetura

O documento de arquitetura registra:

1. **ADR 001 — Arquitetura monolítica modular com organização em camadas** 
2. **ADR 002 — Banco de dados relacional** 


## Estrutura dos documentos

- [`Docs/modelos/diagramaC4-container.png`](/Docs/modelos/diagramaC4-container.png) — atores, sistema de agendamento e sistema externo.
- [`Docs/modelos/diagramaC4-container.png`](/Docs/modelos/diagramaC4-container.png) — frontend, API back-end, PostgreSQL e integração externa.
- [`/Docs/adr/adr0001.md`](/Docs/adr/adr0001.md) — ADRs
- [`/Docs/adr/adr0002.md`](/Docs/adr/adr0002.md) — ADRs.

