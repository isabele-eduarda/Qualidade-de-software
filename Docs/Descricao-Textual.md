# UC-01 — Marcar Consulta

## Por que este é o caso de uso mais crítico

"Marcar Consulta" é o fluxo central do sistema de agendamento. Todos os outros casos de uso giram em torno dele: cancelar, remarcar, visualizar a agenda, realizar a consulta e gerar os indicadores do dashboard só fazem sentido depois que uma consulta foi marcada. No backlog priorizado ele aparece como **Must** (US-05 / RF-06).

Ele também concentra os principais riscos do projeto:

- **Objetivo do negócio:** a meta de reduzir em 30% o tempo de atendimento da recepção e em 60% o retrabalho com agendamentos depende diretamente de este fluxo ser rápido e confiável.
- **Integridade da agenda:** uma falha aqui gera conflito de horários (dois pacientes no mesmo horário com o mesmo profissional), que é exatamente o problema atual com planilhas e registros físicos.
- **Requisitos não funcionais:** envolve o desempenho da consulta de agenda (RNF-02), a autenticação e o controle de acesso (RNF-03) e a usabilidade de no máximo 3 cliques (RNF-04).
- **Dados pessoais:** manipula dados de pacientes, o que exige conformidade com a LGPD (RD-01).
- **Integração externa:** depende do Sistema Externo para confirmar o agendamento, o que adiciona um ponto de falha que precisa ser tratado.

---

## Ficha do caso de uso

| Campo | Descrição |
|---|---|
| **Identificador** | UC-01 |
| **Nome** | Marcar Consulta |
| **Origem** | RF-06, US-05 |
| **Ator principal** | Recepcionista |
| **Atores secundários** | Sistema Externo (confirmação do agendamento) |
| **Resumo** | Permite registrar uma consulta para um paciente com um profissional da saúde, em data e horário disponíveis. |
| **Prioridade** | Must |

## Pré-condições

1. A recepcionista está autenticada e tem permissão para agendar consultas (RNF-03).
2. O paciente está cadastrado no sistema.
3. O profissional da saúde está cadastrado e possui horários disponíveis na agenda.

## Pós-condições

**Sucesso**

1. A consulta fica registrada com o estado **Criada** (conforme o diagrama de estados).
2. O horário escolhido fica indisponível para novos agendamentos.
3. O Sistema Externo recebe o agendamento e retorna a confirmação.
4. A recepcionista vê a mensagem de sucesso.

**Falha**

Nenhuma consulta é registrada e a disponibilidade da agenda permanece inalterada.

---

## Fluxo principal

1. A recepcionista seleciona a opção "Marcar Consulta".
2. O sistema exibe a busca de pacientes.
3. A recepcionista busca e seleciona o paciente.
4. O sistema exibe os profissionais com suas especialidades.
5. A recepcionista seleciona o profissional.
6. O sistema exibe as datas e os horários disponíveis desse profissional.
7. A recepcionista seleciona a data e o horário.
8. O sistema exibe o resumo (paciente, profissional, data e horário) e pede confirmação.
9. A recepcionista confirma.
10. O sistema verifica que o horário continua disponível (RN-04).
11. O sistema salva a consulta no banco de dados com o estado "Criada" e bloqueia o horário na agenda.
12. O sistema envia o agendamento ao Sistema Externo e recebe a confirmação.
13. O sistema exibe "Consulta cadastrada com sucesso". O caso de uso termina.

## Fluxos alternativos

### A1. Paciente não cadastrado (passo 3)

1. O sistema informa que o paciente não foi encontrado e oferece o cadastro.
2. A recepcionista executa "Cadastrar Novo Paciente" (RF-01), com nome completo e telefone obrigatórios.
3. O fluxo retorna ao passo 4 com o paciente já selecionado.

### A2. Horário ocupado (passo 10)

O horário foi reservado por outro agendamento entre a seleção e a confirmação (cenário 2 do Gherkin).

1. O sistema impede o agendamento e informa que o horário não está disponível (RN-01).
2. O fluxo retorna ao passo 6 com a lista atualizada.

### A3. Profissional sem horários disponíveis (passo 6)

1. O sistema informa que não há horários disponíveis.
2. A recepcionista escolhe outro profissional (volta ao passo 4) ou cancela a operação.

### A4. Cancelar operação (qualquer passo antes do 9)

O sistema descarta os dados informados e retorna à tela inicial, sem registrar nada.

## Fluxos de exceção

### E1. Sistema Externo indisponível ou recusa (passo 12)

1. A consulta permanece registrada como "Criada" e o horário continua bloqueado.
2. O sistema informa que a confirmação externa está pendente e agenda uma nova tentativa.
3. Se o Sistema Externo recusar explicitamente, a consulta é cancelada, o horário é liberado e a recepcionista é avisada.

### E2. Falha ao salvar no banco de dados (passo 11)

O sistema não registra a consulta, exibe uma mensagem de erro com opção de tentar novamente e mantém o horário livre.

### E3. Sessão expirada ou sem permissão (qualquer passo)

O sistema bloqueia a operação e redireciona para a autenticação (RNF-03).

---

## Regras de negócio

| ID | Regra | Origem |
|---|---|---|
| **RN-01** | Um profissional não pode ter duas consultas no mesmo dia e horário. | RF-06 |
| **RN-02** | Só podem ser escolhidos horários futuros e livres na agenda do profissional. | RF-06 |
| **RN-03** | Só é possível agendar para pacientes cadastrados (nome completo e telefone obrigatórios). | RF-01 |
| **RN-04** | A verificação de disponibilidade deve ser refeita no momento da confirmação (passo 10), para evitar conflito de concorrência. | RF-06 |
| **RN-05** | Os dados pessoais e de saúde manipulados devem respeitar a LGPD, e o acesso é restrito a usuários autorizados. | RD-01, RNF-03 |
| **RN-06** | Pacientes com status "desativo" precisam ser reativados antes de agendar. | RF-07 |

## Requisitos não funcionais relacionados

| ID | Aplicação neste caso de uso |
|---|---|
| **RNF-02** | A consulta de agenda (passo 6) deve responder em até 2 s em 95% das requisições. |
| **RNF-03** | Autenticação e permissão em todas as etapas. |
| **RNF-04** | O agendamento deve ser concluído em no máximo 3 cliques. |
