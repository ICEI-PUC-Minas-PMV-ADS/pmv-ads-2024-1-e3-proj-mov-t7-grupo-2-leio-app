# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software
#### Funcionalidade
- O aplicativo deve oferecer todas as funcionalidades necessárias para organizar e buscar livros, incluindo a gestão de contas de usuários, busca por livros por nome do autor, categorização de livros, visualização de informações detalhadas sobre os livros, e a capacidade de baixar e-books de domínio público. 
#### Confiabilidade
- O aplicativo deve oferecer uma experiência confiável e estável para os usuários, garantindo maturidade para evitar falhas decorrentes de defeitos no software, tolerância a falhas para manter um desempenho consistente mesmo em situações adversas, capacidade de recuperação para restabelecer o funcionamento adequado após falhas e conformidade com normas de confiabilidade estabelecidas.
#### Usabilidade
- O aplicativo deve apresentar uma interface intuitiva e de fácil compreensão, permitindo que os usuários naveguem pelo aplicativo sem dificuldades e encontrem as funcionalidades desejadas rapidamente. Além disso, é essencial que o aplicativo permita que os usuários realizem suas tarefas de forma eficiente, minimizando o tempo gasto em operações como busca de livros, categorização e leitura.
#### Eficiência
- O aplicativo deve garantir um desempenho ágil, respondendo rapidamente às interações dos usuários, especialmente durante a busca de livros ou a leitura de prévias, proporcionando uma experiência fluida e sem delays. Além disso, é essencial que o aplicativo utilize os recursos do dispositivo de forma eficiente, evitando o consumo excessivo de bateria e a sobrecarga do sistema, garantindo assim uma experiência de uso otimizada e sem impactos negativos no desempenho do dispositivo.
#### Manutenibilidade
- O aplicativo deve ter  facilidade de manutenção e atualização contínua do aplicativo, permitindo a adição de novas funcionalidades, correção de bugs e ajustes de desempenho conforme necessário.
#### Portabilidade
- O aplicativo deve ser compatível com uma variedade de dispositivos móveis e sistemas operacionais, proporcionando uma experiencia consistente em diferentes plataformas. Deve-se assegurar que o aplicativo funcione corretamente em diferentes ambientes, incluindo diferentes versões de sistemas operacionais móveis e tamanhos de tela, sem comprometer sua funcionalidade ou usabilidade.

