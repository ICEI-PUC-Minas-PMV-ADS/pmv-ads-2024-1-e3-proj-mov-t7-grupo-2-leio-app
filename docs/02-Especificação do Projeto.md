# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A especificação do projeto é composta pela definição do diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

- Identificamos personas representativas para compreender suas necessidades e expectativas.

- Cada persona reflete uma experiência única relacionada à leitura.

- Exploraremos as histórias e motivações de cada persona, destacando desafios e objetivos. Buscamos criar uma plataforma inclusiva e envolvente para amantes da literatura.

| **Persona**          | **Ilustração**                                                                                                                                                                                                                                            | **Descrição**                                                      | **Interesses**                                                          | **Desafios**                                                            | **Objetivo Principal**                                                                                              |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Maria**, 32 anos   | <img alt="avatar 3D de uma professora" src="https://cdn.leonardo.ai/users/6f1610d5-91bf-4263-88a4-f4648232a6d5/generations/ce900c95-7c5c-4efe-8b90-fb850fd3a45a/Default_Maria_age_32_University_professor_passionate_about_lit_3.jpg" />                  | Professora universitária apaixonada por literatura                 | Literatura, organização, acompanhamento de progresso                    | Encontrar uma maneira eficiente de catalogar e acompanhar suas leituras | Manter um registro organizado de suas leituras para acompanhar seu progresso e descobrir novos livros interessantes |
| **Lucas**, 21 anos   | <img alt="avatar 3D de um estudante" src="https://img.freepik.com/fotos-gratis/retrato-3d-de-adolescente-do-ensino-medio_23-2150793939.jpg?w=740&t=st=1708709466~exp=1708710066~hmac=f08ae42f04b757a30574785be2cf3e61f25ff988d36b06b465128f3549996613" /> | Estudante universitário de engenharia                              | Acadêmicos, aprendizado, conveniência                                   | Encontrar materiais de estudo relevantes e acessíveis                   | Ter acesso fácil a livros e materiais de estudo relevantes para seus cursos e pesquisas acadêmicas                  |
| **André**, 25 anos   | <img alt="avatar 3D de uma jovem" src="https://img.freepik.com/fotos-gratis/retrato-3d-do-empresario_23-2150793885.jpg?w=740&t=st=1708709550~exp=1708710150~hmac=b3942018ab94c3b78c9b4b1f35da139734094ff340a439fe2604c2dde526a225" />                     | Jovem em busca de novas leituras                                   | Diversidade de gêneros literários, exploração, expansão de conhecimento | Encontrar recomendações personalizadas                                  | Encontrar livros que se adequem aos seus interesses e expandir seu conhecimento e experiência de leitura            |
| **Rafaela**, 28 anos | <img alt="avatar 3D de uma escritora" src="https://cdn.leonardo.ai/users/6f1610d5-91bf-4263-88a4-f4648232a6d5/generations/715888a7-7b56-42e3-a3b1-487dad37088b/Default_Rafaela_age_38_writter_3d_style_avatar_0.jpg" />                                   | Escritora iniciante interessada em descobrir novos autores e obras | Escrita, inspiração, exploração literária                               | Encontrar novos livros e autores que correspondam aos seus interesses   | Explorar novos livros e autores que possam inspirar sua própria escrita e expandir seus horizontes literários       |

## Histórias de Usuários

Com base na análise das personas identificamos as seguintes histórias de usuários:

| EU COMO... `PERSONA`                                   | QUERO/PRECISO ... `FUNCIONALIDADE`                                                                      | PARA ... `MOTIVO/VALOR`                                                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Leitor ávido                                           | Ter a capacidade de criar uma estante virtual para catalogar meus livros                                | Manter um registro organizado das minhas leituras.                                                        |
| Estudante universitário                                | Acesso a livros acadêmicos e materiais de estudo relevantes para os meus cursos                         | Complementar meu aprendizado e realizar pesquisas acadêmicas de forma conveniente.                        |
| Usuário em busca de novas leituras                     | Navegar por uma variedade de gêneros literários                                                         | Encontrar livros que se adequem aos meus interesses e expandir meu conhecimento e experiência de leitura. |
| Usuário interessado em descobrir novos autores e obras | Receber recomendações personalizadas com base nas minhas preferências de leitura e histórico de leitura | Explorar novos livros e autores que possam me interessar.                                                 |

## Modelagem do Processo de Negócio

### Análise da Situação Atual

Segundo Lucena, 2023, realizou uma pesquisa, a qual constata que a porcentagem de leitores no país caiu 4% e também numa outra pesquisa da Folha de São Paulo que revela o percentual de lares com internet crescendo significativamente, foi pensado o aplicativo Le.io, cuja proposta é proporcionar ao leitor uma ferramenta que o auxilie.
Atualmente, no mercado, existem aplicativos como o Kindle, Goodreads e Skoob. O Le.io, em comparação ao Kindle, permite aos usuários catalogar os livros que já leram, estão lendo ou desejam ler.

### Descrição Geral da Proposta

O aplicativo Le.io visa proporcionar aos leitores uma ferramenta de organização e descoberta de leituras pela internet, para assim, promover o incentivo à leitura e possibilitar um crescimento no número de leitores. Seu público-alvo são jovens e adultos, incluindo estudantes, professores, pesquisadores e profissionais da comunicação e acadêmicos, sem restrição de idade, classe social ou poder aquisitivo. Os objetivos do projeto incluem a organização da leitura pessoal, exploração de informações mais detalhadas sobre os livros.

### Processo

<img alt="image" src="./img/Processo de Negócio.jpg">

## Indicadores de Desempenho

Abaixo estão os principais indicadores de desempenho do nosso projeto.

| **Indicador**                           | **Objetivos**                                                                | **Descrição**                                                                                 | **Cálculo**                                | **Fonte Dados**                      | **Perspectiva**                                    |
| --------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------ | -------------------------------------------------- |
| Taxa de satisfação                      | Avaliar a satisfação dos usuários em relação à experiência com a aplicação.  | Medir a aceitação da aplicação através da avaliação média atribuída pelos usuários.           | Nota média da loja de aplicativo           | Loja de Aplicativo                   | Aprimorar a qualidade                              |
| Número de downloads diário              | Obter o número diário de downloads da aplicação.                             | Avaliar o número de downloads diários                                                         | Número de downloads                        | Loja de Aplicativo                   | Necessidade de aplicação                           |
| Reclamações recebidas                   | Minimizar a incidência de feedbacks negativos mensais.                       | Analisar a quantidade de reclamações recebidas                                                | Somatório das reclamações por mês          | Central de reclamações               | Qualidade do produto                               |
| Cadastros Realizados                    | Analisar a quantidade de cadastros na plataforma                             | Total de cadastros em relação a plataforma                                                    | Crescimento mensal                         | Contador na plataforma               | Aquisição de novos usuários e expansão de público. |
| Taxa de Atualização de Lista de Leitura | Verificar a frequência com que os usuários atualizam suas listas de leitura. | Acompanhar a modificação de status dos livros na lista do "Quero Ler" para "Lendo" ou "Lido". | Número de atualizações da lista de leitura | Atividades do usuário no aplicativo. | Engajamento do usuário.                            |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

| ID    | Descrição do Requisito                                                                                                                                       | Prioridade |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| RF-01 | O sistema deve permitir que o usuário crie, edite, visualize e exclua sua conta.                                                                             | ALTA       |
| RF-02 | O sistema deve permitir que o usuário possa buscar pelos seus livros pelo nome do livro, categoria ou autor.                                                 | ALTA       |
| RF-03 | O sistema deve permitir que o usuário possa marcar seus livros de acordo com categorias pré estabelecidas, sendo elas: lido, quero ler, relendo e abandonei. | ALTA       |
| RF-04 | O sistema deve permitir que o usuário possa ler a descrição do livro buscado, contendo título, autor, imagem, editora, sinopse e avaliações.                 | ALTA       |
| RF-05 | O sistema deve permitir que o usuário acesse o link para compra na Play Store.                                                                               | ALTA       |
| RF-06 | O sistema deve permitir que o usuário possa ver uma prévia do livro na API.                                                                                  | MÉDIA      |
| RF-07 | O sistema deve permitir que o usuário possa avaliar o livro lido entre 1 e 5 estrelas.                                                                       | MÉDIA      |
| RF-08 | O sistema deve permitir ao usuário buscar livros listados como gratuitos na biblioteca.                                                                      | MÉDIA      |

### Requisitos não Funcionais

| ID     | Descrição                                                                                                        | Prioridade |
| ------ | ---------------------------------------------------------------------------------------------------------------- | ---------- |
| RNF-01 | O aplicativo deve garantir segurança na autenticação e na proteção dos dados do usuário.                         | ALTA       |
| RNF-02 | O aplicativo deve estar em conformidade com as leis e regulamentos de proteção de dados, como GDPR e LGPD.       | ALTA       |
| RNF-03 | O aplicativo deve ter tempos de resposta rápidos, garantindo uma experiência fluida ao usuário.                  | ALTA       |
| RNF-04 | O aplicativo deve ter uma interface intuitiva e amigável, visando proporcionar uma experiência de uso agradável. | ALTA       |
| RNF-05 | O aplicativo deve ser compatível com os diferentes dispositivos móveis e suas versões de sistema operacional.    | MÉDIA      |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID    | Restrição                                                                                               |
| ----- | ------------------------------------------------------------------------------------------------------- |
| RE-01 | O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 23/06/2024. |
| RE-02 | A equipe não pode subcontratar o desenvolvimento do trabalho.                                           |
| RE-03 | O projeto não deve usar sistemas de IAs para o desenvolvimento do código.                               |
| RE-04 | O projeto deve utilizar a linguagem de programação mobile React Native.                                 |
| RE-05 | O projeto deve utilizar uma conexão com banco de dados.                                                 |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos.

<img src="./img/Diagrama Casos de uso.jpg">

# Matriz de Rastreabilidade

A matriz de rastreabilidade facilita a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio.

A matriz deve contempla os elementos relevantes que fazem parte do sistema.

<img src="./img/Matriz de rastreabilidade.jpg">

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Abaixo temos duas representações para o gerenciamento do projeto, levando em consideração todas as tarefas que devem ser entregues ao longo do eixo.

### Fluxo

<img src="./img/Gerenciamento de tempo.jpg">

### Gráfico de Gantt ou diagrama de Gantt

<img src="/docs/img/graficodegant.png">

Todas as tarefas criadas podem ser consultadas <a href="https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/812/views/4">neste link</a> ou em Github Projects > Roadmap.

## Gerenciamento de Equipe

A gestão da equipe requer a organização de seis equipes, cada uma dedicada a diferentes etapas do projeto. Cada equipe é composta pelos seis membros do projeto, que alternam suas responsabilidades ao longo do tempo.

A tabela abaixo apresenta o gerenciamento da equipe:

<img src="./img/gerenciamento de equipe.jpg">

## Gestão de Orçamento

A gestão do orçamento do projeto foi planejada considerando quatro eixos principais:
alocação estratégica de recursos humanos em diversas equipes, aquisição de ferramentas fundamentais, utilização de serviços especializados e custos adicionais.
Cada aspecto do orçamento foi otimizado para garantir uma distribuição eficiente dos recursos, assegurando o sucesso do projeto dentro das limitações financeiras estabelecidas.

A tabela abaixo apresenta o gerenciamento de orçamento:

<img src="./img/gestao-de-orcamento.jpg">
