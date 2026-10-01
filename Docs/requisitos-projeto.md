# Especificação de Requisitos — Sistema de agendamento

Equipe:

Clécio Almeida

Isabele Eduarda Barbosa Macedo
Adrian Victor
Iuri Allexander Barreto
João Braga Salgado 
Juliane Andrade da Silva

Versão: 1.0 — 23/09/2026

Visão do problema

Atualmente, a Mente e Corpo enfrenta dificuldades no controle dos agendamentos devido ao uso de registros físicos, planilhas com mais de 500 linhas e processos descentralizados entre os profissionais. Isso aumenta o tempo de localização de dados, retrabalho no cadastro e a dificuldade de controlar as agendas e o histórico de atendimento dos pacientes. O problema afeta principalmente a recepção e os profissionais que precisam consultar e atualizar informações. O sucesso será medido pela redução de 30% no tempo de atendimento da recepção e de 60% no retrabalho relacionado ao cadastro e à organização dos agendamentos.

Stakeholders

# 2.1 Mapa de stakeholders

| ID | Stakeholder | Tipo | Principal necessidade | Influência |
| --- | --- | --- | --- | --- |
| SH-01 | Recepcionista | Usuário final | Realizar o cadastro dos pacientes, agendar e gerenciar consultas | Média |
| SH-02 | Profissionais da saúde | Usuário final | Consultar a própria agenda, atualizar o status do paciente e preparar os atendimentos. | Média |
| SH-03 | Paciente | Usuário final | Solicitar/agendar atendimento em horário disponível. | Baixa |
| SH-04 | Dona da clínica | Patrocinador | Administrar e acompanhar o funcionamento da clínica | Alta |
| SH-05 | Suporte | Operação | Gerenciar usuários e apoiar a operação do sistema. | Média |
| SH-06 | Jurídico | Conformidade | Garantir tratamento adequado dos dados pessoais | Alta |

# 2.2 Técnicas de elicitação

Entrevista com stakeholders: Foi feita uma entrevista com os stakeholders para entender como a clínica funciona, quais são as dificuldades e o que eles gostariam de melhorar no sistema.

# 2.3 Conflito e negociação

Não tivemos conflitos entre os stakeholders. Caso apareçam opiniões diferentes, nossa equipe vai conversar com os envolvidos e buscar uma solução que funcione para a clínica.

Catálogo de requisitos

| ID | Tipo | Descrição | Fonte | Stakeholder |
| --- | --- | --- | --- | --- |
| RF-01 | RF | O sistema deverá permitir o cadastro de pacientes com nome completo, data de nascimento, telefone, CPF (opcional), especialidade, faixa salarial e indicação. | Entrevista | SH-01 |
| RF-02 | RF | O sistema deve permitir cadastrar profissionais da saúde e sua especialidade | Entrevista | SH-05 |
| RF-03 | RF | O sistema deve permitir ao profissional visualizar as consultas agendadas para um dia selecionado e informações de seus pacientes. | Entrevista | SH-02 |
| RF-04 | RF | O sistema deve permitir cancelar e remarcar consultas, atualizando a disponibilidade do horário. | Entrevista | SH-01 |
| RF-05 | RF | O sistema deve permitir ao proprietário visualizar mensalmente a quantidade de consultas realizadas, pacientes ativos e áreas mais procuradas | Entrevista | SH-04 |
| RF-06 | RF | O sistema deve permitir realizar o agendamento de uma consulta para profissional, data e horário disponíveis | Entrevista | SH-01/ SH-03 |
| RF-07 | RF | O sistema deve permitir a troca de status do paciente (ativo, desativo). | Entrevista | SH-02 |
| RF-08 | RF | O sistema deve permitir ao suporte cadastrar, alterar, ativar e desativar usuários do sistema conforme seus perfis. | Operação | SH-05 |
| RNF-01 | RNF | O sistema deve apresentar disponibilidade mínima de 99% por mês, desconsiderando janelas de manutenção previamente comunicadas. | Necessidade operacional | SH-05 |
| RNF-02 | RNF | Em condições normais, pelo menos 95% das solicitações de consulta de agenda devem responder em até 2 segundos, considerando até 50 usuários simultâneos. | Desempenho | SH-01/SH-02 |
| RNF-03 | RNF | 100% das funcionalidades protegidas devem exigir autenticação, e usuários sem a permissão correspondente não devem acessar dados ou operações restritas. | Segurança | SH-06 |
| RNF-04 | RNF | O sistema deverá permitir que o usuário  realize um agendamento em no máximo 3 cliques. | Usabilidade | SH-01/SH-03 |
| RD-01 | RD | O sistema deverá proteger os dados dos usuários e estar em conformidade com a LGPD. | Legislação | SH-06 |

Histórias de usuário

# 4.1 Histórias:

US-01:

Como recepcionista, quero cadastrar os pacientes que chegam à clínica, para manter seus dados registrados e facilitar o agendamento de consultas.

Requisito atendido: RF-01

US-02:

Como profissional de saúde, quero visualizar minhas consultas do dia, para organizar minha rotina e me preparar para os atendimentos.

Requisito atendido: RF-03

US-03:

Como recepcionista, quero cancelar e remarcar consultas, para manter a agenda atualizada de acordo com as necessidades dos pacientes.

Requisito atendido: RF-04

US-04:

Como proprietário da clínica, quero visualizar a quantidade de consultas realizadas no mês, o número de pacientes ativos e as áreas mais procuradas, para acompanhar o desempenho e auxiliar na gestão da empresa.

Requisito atendido: RF-05

US-05: Como paciente ou recepcionista, quero realizar o agendamento de consultas, para garantir um horário de atendimento disponível.

Requisito atendido: RF-06

US-06:

Como suporte, quero gerenciar os usuários e seus perfis, para controlar quem pode acessar o sistema.

Requisitos atendidos: RF-02, RF-08.

US-07:

Como profissional da saúde, quero alterar o status do paciente entre ativo e desativo, para manter o cadastro atualizado e identificar quais pacientes estão ativos na clínica.

Requisito atendido: RF-07.

US-08:

Como usuário autorizado, quero acessar somente as funcionalidades permitidas ao meu perfil, para utilizar o sistema com segurança.

Requisito atendido: RF-08, RNF-03.

# 4.2 Avaliação INVEST

| ID | I | N | V | E | S | T | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| US-01 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | Escopo limitado ao cadastro de um paciente. |
| US-02 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | Escopo limitado à consulta da agenda de um dia. |
| US-03 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | Cancelamento e remarcação mantidos como uma necessidade de agenda<br>relacionada |
| US-04 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | Limitada a três indicadores mensais definidos no requisito |
| US-05 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | Paciente e recepcionista podem realizar a mesma atividade |
| US-06 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | Escopo limitado ao gerenciamento de usuários e perfis |
| US-07 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | Escopo limitado a alteração de status |
| US-08 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | Escopo limitado ao controle de acesso por perfil. |

Critérios de aceite e priorização

# 5.1 Critérios de aceite (Gherkin)

Funcionalidade 1: Cadastro

Cenário: Cadastro de paciente com sucesso;

Dado que a recepcionista esteja autenticada e na tela de cadastro de paciente informe: nome “Maria Silva”, data de nascimento “10/05/1990” e telefone “81999999999” Quando selecionar “Cadastrar” Então o sistema deve registrar o paciente e exibir “Paciente cadastrado com sucesso”. .

Cenário: Cadastro de paciente com erro;

Recepcionista na tela de cadastro, mas deixa alguns campos em branco como o telefone, então o sistema deve informar ao recepcionista que há campos em branco.

Funcionalidade 2: Visualizar Consultas do dia

Cenário: Existem consultas agendadas;

Dado que o profissional de saúde “Paulo Campos” esteja devidamente autenticado no sistema e acesse a tela de consultas, o sistema deve exibir todas as consultas agendadas, com horário, paciente e tipo de atendimento.

Cenário: Não existem consultas agendadas;

Então, caso aconteça algum erro o sistema deve avisar que não foi possível carregar consultas e pedir novamente.

Funcionalidade 3:  Agendamento de consulta;

Cenário: agendamento em horário disponível

Dado que o profissional “Iuri Souza” esteja disponível em 25/09/2026 às 14:00

E o paciente esteja cadastrado. Quando o paciente selecionar profissional, data e horário e confirmar

Então o sistema deve registrar a consulta em 25/09/2026 às 14:00.

Cenário: horário ocupado

Dado que o horário de 25/09/2026 às 14:00 já esteja reservado

Quando o paciente tentar confirmar esse horário, então o sistema deve impedir o agendamento e informar que o horário não está disponível.

# 5.2 Backlog priorizado

MoSCoW

| Ordem | ID | Item | Prioridade | Justificativa |
| --- | --- | --- | --- | --- |
| 1 | US-01 | Cadastro de pacientes | Must | Base necessária para registrar e identificar os pacientes. |
| 2 | US-06 | Cadastro de profissionais | Must | Base necessária para registrar e identificar os profissionais |
| 3 | US-05 | Agendamento de consultas | Must | Fluxo central do sistema |
| 4 | US-02 | Visualização das consultas do dia | Should | Necessária para a operação diária dos profissionais. |
| 5 | US-03 | Cancelar  e remarcar consultas | Should | Necessária para manter a agenda atualizada, mas pode ser<br>entregue após o fluxo básico |
| 6 | US-06/US-08 | Controle de acesso por perfil | Should | Risco de segurança e proteção de dados. |
| 7 | US-04 | Dashboard de consultas mensais. pacientes ativos e modalidades | Could | Apoia a gestão, mas não impede o funcionamento básico do Sistema |

Justificativa da priorização: o fluxo de agendamento, cadastro e consulta da agenda vem primeiro porque sustenta a operação principal. Segurança e autorização foram antecipadas por risco, pois envolvem acesso a dados pessoais. Cancelamento/remarcação e gestão de usuários apoiam a operação e vêm em seguida.

# 5.3 Definição de Preparado (DoR)

A funcionalidade estará pronta para ser desenvolvida quando a equipe souber exatamente o que precisa fazer, o requisito estiver bem explicado, os critérios de aceite estiverem definidos e não houver nenhuma dúvida ou problema que impeça o início do desenvolvimento.

Matriz de rastreabilidade

| Requisito | Origem (SH /<br>técnica) | História(s) | Critério /<br>cenário de<br>teste | Prioridade | Status |
| --- | --- | --- | --- | --- | --- |
| RF-01:<br>Cadastro de pacientes | SH-01/Entrevista | US-01 | US-01<br>Cenários 1 e 2 |  | Em desenvolvimento |
| RF-02:<br>Cadastro de profissionais | SH-05/Entrevista | US-06 | US-06<br>Cenários 1 e 2 |  | Em desenvolvimento |
| RF-03<br>Visualização das consultas do dia | SH-02/Entrevista | US-02 | US-02<br>Cenários 1 e 2 |  | Não iniciado |
| RF-04:<br>Cancelamento e remarcação de consultas | SH-01/Entrevista | US-03 | US-03 |  | Não iniciado |
| RF-05:<br>Dashboard | SH-04 | US-04 | US-04 |  | Não iniciado |
| RF-06:<br>Agendamento de consultas | SH-01/SH-03/Entrevista | US-05 | US-05<br>Cenários 1 e 2 |  | Não iniciado |
| RF-07: | SH-02/Entrevista | US-07 | US-07 |  | Não iniciado |
| RF-08: | SH-05 | US-08 | US-08 |  | Não iniciado |
| RNF-01: | SH-05 | US-5/US-02 | CT-RNF (Teste de carga) |  | Não iniciado |
| RNF-02: | SH-01/SH-02 | US-05 | CT-RNF-(Teste de desempenho) |  | Não iniciado |
| RNF-03: | SH-06 | US-06 | CT-RNF(Teste de segurança) |  | Não iniciado |
| RNF-04: | SH-01/SH-03 | US-08 | CT-RNF(Teste de usabilidade) |  | Não iniciado |

### Validação e melhorias

| x | Perspectiva | Problema (ambiguidade, não verificável, solução disfarçada, não INVEST…) | Antes | Depois |
| --- | --- | --- | --- | --- |
| 01 | História US-06 (Disponibilidade) | Ambiguidade e Não Verificável: O termo "maior parte do tempo" é vago, subjetivo e dificulta a criação de um teste automatizado ou SLA. | "Como usuário do sistema, quero que o sistema esteja disponível na maior parte do tempo, para conseguir acessar suas funcionalidades…” | "Como usuário do sistema, quero que o sistema tenha disponibilidade de no mínimo 99,5% no horário comercial (07h às 19h), para evitar interrupções no atendimento da recepção.” |
| 02 | História US-08 (Usabilidade) | Escopo Vago e Ambiguidade: Na tabela INVEST (item 8), menciona-se melhoria de usabilidade e interface, mas o texto não especifica o objetivo do usuário. | "Não determina como a interface deve ser construída..." / "Facilita o uso do sistema..." (Tabela INVEST, linha 8) | "Como recepcionista, quero uma interface intuitiva para agendar uma consulta em no máximo 3 cliques, para reduzir o tempo de atendimento em 50%.” |
| 03 | Critério de Aceite (Funcionalidade 2) | Ambiguidade e Ausência de Comportamento: O cenário de erro diz "caso aconteça algum erro", sem especificar a ação esperada do sistema nem o comportamento alternativo. | "Então, caso aconteça algum erro o sistema deve avisar que não foi possível carregar consultas e pedir novamente.” | "Quando o sistema falhar ao carregar as consultas do dia, deve exibir uma mensagem de erro: 'Não foi possível carregar a agenda. Clique aqui para tentar novamente' e fornecer um botão de recarga.” |
| 04 | Requisito RF-01 (Cadastro de Pacientes) | Requisito Incompleto: O requisito lista campos obrigatórios e opcionais juntos, sem regras claras sobre a validação de dados como CPF ou Telefone. | "O sistema deverá permitir o cadastro de pacientes com nome completo, data de nascimento, telefone, CPF (opcional), especialidade, faixa salarial e indicação.” | "O sistema deve permitir o cadastro de pacientes validando obrigatoriamente Nome Completo e Telefone, mantendo os campos CPF, Faixa Salarial e Indicação como opcionais.” |
| 05 | História US-07 (Segurança/LGPD) | Solução Disfarçada / Abrangência Excessiva: A história trata a LGPD de forma genérica sem focar no consentimento ou anonimização de dados de saúde. | "Como proprietário da clínica, quero que o sistema proteja os dados dos usuários e esteja em conformidade com a LGPD…” | "Como paciente, quero fornecer meu consentimento explícito para o armazenamento de dados de saúde, para garantir a privacidade dos meus atendimentos conforme a LGPD.” |
