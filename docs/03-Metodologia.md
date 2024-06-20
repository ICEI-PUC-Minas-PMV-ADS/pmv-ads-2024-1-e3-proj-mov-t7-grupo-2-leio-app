# Metodologia

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A metodologia do projeto é a etapa onde ocorrem todas as definições de gerência do projeto, é onde também definimos quais ferramentas vamos utilizar e quais as regras para um bom desenvolvimento e sucesso de toda a aplicação.

## Etapas

- Na primeira etapa foi a definição inicial do projeto. Fizemos uma busca por referências, matérias sobre o universo da leitura, identificação do problema e possibilidades para a ideia do projeto. Após a definição do projeto, identificamos as histórias de usuário, personas e quais requisitos fariam sentido para o aplicativo. Também definimos alguns indicadores de desempenho que são importantes para metrificação. Gestão de orçamento, equipes, matriz de rastreabilidade e diagrama de casos de uso também foram definidos aqui.
- Já na segunda etapa, é onde ocorre quase todo o resto da definição de documentação para finalmente começar o desenvolvimento do aplicativo na prática.
- Na terceira e quarta etapa, haverá todo o desenvolvimento da aplicação e registros de casos de teste de software e usabilidade.
- E por último, faremos as correções de possíveis bugs e melhorias no aplicativo, além de realizar a apresentação final.

## Relação de Ambientes de Trabalho

O projeto é composto por 6 integrantes, todos trabalhando de maneira 100% remota. Para o desenvolvimento do aplicativo, temos encontros semanais estilo daily do scrum entre 1h e 1h30 para fazer alinhamentos, tomar decisões, pedidos de ajuda e possíveis ajustes de rota. Como o foco é no desenvolvimento ágil, essas reuniões são importantes para que o cronograma seja cumprido até o fim do eixo.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [GitHub Desktop](https://desktop.github.com/), sendo que o [Github](https://github.com) foi utilizado para hospedagem do repositório.

O projeto segue com duas branches até o momento:

- `main`: versão completa e estável do projeto
- `dev`: versão do aplicativo em teste

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:

- `documentação`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `funcionalidade`: uma nova funcionalidade precisa ser introduzida
- `design`: uma tela precisa ser desenhada no figma

A documentação do projeto é realizada direto no site do GitHub ou é feito via GitHub Desktop após baixar todas as atualizações disponíveis para evitar conflitos. O código é feito todo na brach `dev` e após passar em todos os testes, o merge para a `main` é feito. Já a gerência de tags determina o que cada issue representa, então se a tarefa diz respeito a uma funcionalidade do sistema, usaremos a tag `funcionalidade`, se a tarefa é uma documentação, usaremos a tag `documentação` e assim por diante.

## Gerenciamento de Projeto

### Divisão de Papéis

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:

- Scrum Master:
  - Paloma Rizzon
- Product Owner:
  - Lucas Enis
- Equipe de Desenvolvimento:
  - Renata Gonzaga
  - Ricardo Vieira
  - Sandra Rodrigues
- Equipe de Design:
  - Aline Azedias

### Processo

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o GitHub Projects estruturado com as seguintes listas:

- `Backlog`: recebe todas as atividades a serem realizadas e é representada como Backlog. Todas as tarefas que são identificadas no decorrer do projeto são documentadas na lista.
- `To do`: lista de atividades que representa o Sprint Backlog, ou seja, a lista de tarefas do Backlog que devem ser realizadas e implementadas naquela etapa.
- `In progress`: quando uma tarefa é iniciada, é movida para esta lista.
- `Done`: essa lista indica que uma tarefa foi concluída após passar pelos testes necessários e ser aprovada pelo cliente.

O quadro kanban do grupo desenvolvido na ferramenta de gerenciamento de projetos é apresentado abaixo no estado atual.
<br>
<br>
<img src="./img/Quadro Kanban.png">
<br>
Tela do kanban (GitHub Projects) utilizada pelo grupo

### Ferramentas

As ferramentas empregadas no projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes é apresentado na tabela que se segue.

| AMBIENTE                                   | PLATAFORMA                               | LINK DE ACESSO                                                                                                                                                                                                    |
| ------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repositório de código fonte e documentação | GitHub                                   | [Repositório](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-grupo-2-leio-app)                                                                                                           |
| Gerenciamento do Projeto                   | GitHub Projects                          | [Quadro do projeto](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/812)                                                                                                                                  |
| Diagramas                                  | Drawio                                   | [Diagramas](https://drive.google.com/file/d/1gX-52zc4wUdfiWraM814l3lypL60Gz5b/view?usp=sharing)                                                                                                                   |
| Projeto de Interface e Wireframes          | Figma                                    | [Projeto no Figma](https://www.figma.com/file/PVMDd8ZYhduvIBc5eUkktw/Grupo-02---Le.io-App?type=design&node-id=0%3A1&mode=design&t=2Ob3Hm0gWIMeTHxV-1)                                                             |
| Editor de código                           | Visual Studio Code - React Native + Expo | Máquina local                                                                                                                                                                                                     |
| Ferramenta de comunicação                  | Teams                                    | [Grupo no Teams](https://teams.microsoft.com/l/channel/19%3Ab3636001a6c843ccb50226d70758bc61%40thread.tacv2/Grupo%202?groupId=afb28315-f87a-4a98-a72f-d65700c83779&tenantId=14cbd5a7-ec94-46ba-b314-cc0fc972a161) |

- O <b>GitHub projects</b> foi escolhido para o gerenciamento dos cards de tarefas e roadmap por suas funcionalidades e integração com o próprio repositório.
- O <b>Draw.io</b> foi escolhido para a criação dos diagramas por ser integrado ao google drive e permitir a edição simultânea pelos integrantes do grupo.
- O <b>Figma</b> foi escolhido para wireframes e desenho das telas por ser o mais usado no mercado, além de possuir todas as funcionalidades que precisamos.
- O <b>Visual Studio Code </b> foi escolhido para o desenvolvimento da aplicação por indicação dos microfundamentos utilizando React Native + Expo.
- O <b>Teams</b> foi escolhido pelo grupo por já ser utilizado nas orientações com o professor.
