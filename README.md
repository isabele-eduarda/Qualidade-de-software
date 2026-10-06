# Espaço Mente e Corpo (Clínica Vida & Cuidado)
Sistema web front-end desenvolvido para simplificar e otimizar a gestão operacional da clínica/ONG de saúde e bem-estar. A plataforma centraliza a recepção de pacientes, o controle de agendas profissionais e a exibição de dashboards com indicadores estratégicos para a administração.

## 🎯 Objetivo do Projeto
Proporcionar uma ferramenta centralizada, intuitiva e eficiente para o gerenciamento de consultas, cadastros e acessos da clínica, garantindo fluidez no atendimento ao paciente e previsibilidade operacional para a gestão.

## 👥 Perfis de Usuário e Funcionalidades
### 1. Recepcionista
#### Cadastro de Pacientes: 

- Inclusão e atualização dos dados cadastrais dos pacientes.

#### Gerenciamento de Consultas:

- Agendamento de novas consultas por especialidade e profissional.

- Remarcação de datas e horários.

- Cancelamento de consultas.

- Visualização da agenda geral da clínica.

### 2. Profissional de Saúde
#### Agenda do Dia: 
- Visualização clara das consultas confirmadas para a data atual.

#### Lista de Pacientes: 
- Acesso à relação de pacientes agendados para atendimento e prontuários.

### 3. Dono / Administrador da Clínica
#### Dashboard Estratégico:

- Total de consultas realizadas no período.

- Métrica de pacientes ativos e inativos.

- Indicadores de especialidades, financeiro, relatórios e fluxo de atendimentos.

#### Gerenciamento de Usuários:

- Cadastro e remoção de operadores do sistema (recepcionistas e profissionais de saúde).

- Controle de status e permissões de acesso às configurações.

### 🧩 Módulos Incluídos
- Área Pública: Site institucional, especialidades, profissionais e contato.

- Acesso e Autenticação: Tela de login e controle de navegação.

- Gestão Operacional: Cadastro de pacientes, agendamentos, lista de consultas, prontuários, profissionais e especialidades.

- Gestão Administrativa: Dashboard, controle financeiro, relatórios e configurações do sistema.

### 🛠️ Tecnica e Estrutura dos Arquivos
Projeto front-end construído utilizando tecnologias nativas da web, sem o uso de frameworks:

index.html — Estrutura de páginas públicas, formulário de login e telas do sistema interno.

style.css — Estilização visual, layout e responsividade.

script.js — Lógica de navegação, manipulação de dados de demonstração, validação de cadastros e modais.

### 🚀 Como Executar
1. Baixe os arquivos do projeto.

2. Abra o arquivo index.html em qualquer navegador web (ex: Google Chrome, Microsoft Edge, Firefox).

Para acessar a área restrita do sistema, utilize as credenciais de teste:

E-mail: admin@clinica.com

Senha: 123456

### ⚠️ Observações de Segurança e Persistência
Este projeto é um protótipo front-end. Os dados informados e manipulados são mantidos temporariamente na memória do navegador.

Para a implantação e utilização em um ambiente de produção real com dados de pacientes, faz-se necessária a integração com:

Back-end e banco de dados persistente.

Sistema de autenticação segura e controle rigoroso de permissões de acesso.

Protocolo HTTPS, logs de auditoria e conformidade com leis de privacidade e proteção de dados de saúde (LGPD).