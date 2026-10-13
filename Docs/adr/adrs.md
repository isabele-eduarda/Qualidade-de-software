## ADR-001 — Escolha do banco de dados
Data: 06/10/2026
Status: Aceito
### 1. Contexto
Durante o planejamento do projeto de desenvolvimento de um sistema web, surgiu a necessidade de definir qual banco de dados seria utilizado.
### 2. Alternativas consideradas
1. Alternativa 1: PostgreSQL
* Vantagens:
É um sistema de gerenciamento de banco de dados robusto.
É compatível com o Django, que oferece suporte ao PostgreSQL.
Permite utilizar o banco de dados escolhido desde o início do projeto, sem precisar migrar de outro banco posteriormente.
2. Alternativa 2: SQLite
* Vantagens:
É o banco de dados utilizado por padrão em novos projetos Django.
Exige pouca configuração inicial.
* Desvantagem:
Caso fosse necessário adotar o PostgreSQL posteriormente, seria preciso realizar a migração do banco de dados e dos dados existentes.
### 3. Decisão
Foi decidido utilizar o PostgreSQL como banco de dados do sistema.
### 4. Consequências
* Positivas:
O sistema será desenvolvido desde o início com o banco de dados escolhido, evitando uma futura migração do SQLite para o PostgreSQL.
O Django oferece suporte à integração com o PostgreSQL.
* Ponto de atenção:
Será necessário configurar o PostgreSQL e instalar o driver de conexão apropriado no ambiente de desenvolvimento.