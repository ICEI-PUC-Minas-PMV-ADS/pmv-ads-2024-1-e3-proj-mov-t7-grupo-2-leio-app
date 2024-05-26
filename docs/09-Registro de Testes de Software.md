# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="04-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="08-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

|    Caso de Teste    |                                   CT-01 - Criar conta                                    |
| :-----------------: | :--------------------------------------------------------------------------------------: |
|       Imagem        |                          <img src = "./img/Tela-CadastroConcluido.jpeg"/>                |
| Requisito Associado | RF - 01 O sistema deve permitir que o usuário crie, edite, visualize e exclua sua conta. |
|      Avaliação      |                            A conta foi criada com sucesso. ✅                            |

|    Caso de Teste    |                                   CT-02 - Editar conta                                   |
| :-----------------: | :--------------------------------------------------------------------------------------: |
|       Imagem        |                           <img src = "./img/Tela-Perfil.jpg"/>                           |
| Requisito Associado | RF - 01 O sistema deve permitir que o usuário crie, edite, visualize e exclua sua conta. |
|      Avaliação      |                           Conta editada com sucesso! ✅                                  |

|    Caso de Teste    |                                 CT-03 - Visualizar conta                                 |
| :-----------------: | :--------------------------------------------------------------------------------------: |
|       Imagem        |                           <img src = "./img/Tela-Perfil.jpg"/>                           |
| Requisito Associado | RF - 01 O sistema deve permitir que o usuário crie, edite, visualize e exclua sua conta. |
|      Avaliação      |                         Não foi possível visualizar a imagem do usuário. ❌              |

|    Caso de Teste    |                                  CT-04 - Excluir conta                                   |
| :-----------------: | :--------------------------------------------------------------------------------------: |
|       Imagem        |                           <img src = "./img/Tela-Perfil.jpg"/>                           |
| Requisito Associado | RF - 01 O sistema deve permitir que o usuário crie, edite, visualize e exclua sua conta. |
|      Avaliação      |                           Conta excluída com sucesso! ✅                                 |

|    Caso de Teste    |                                           CT-05 - Buscar livros                                           |
| :-----------------: | :-------------------------------------------------------------------------------------------------------: |
|       Imagem        |                                  <img src = "./img/Tela-Pesquisa.jpg"/>                                   |
| Requisito Associado | RF - 02 O sistema deve permitir que o usuário possa buscar pelos seus livros pelo nome do livro ou autor. |
|      Avaliação      |                                   Não foi possível fazer a pesquisa. ❌                                   |


|    Caso de Teste    |                                           CT-11 - Entrar na conta                                                     |
| :-----------------: | :-------------------------------------------------------------------------------------------------------------------: |
|       Imagem        | <img src="img/Tela-LoginNormal.jpeg" alt="Tela de login" title="Tela de login" style="height: 800px;">                |
| Requisito Associado |    RF - 01 O sistema deve permitir que o usuário crie, edite, visualize e exclua sua conta.                           |
|      Avaliação      |                              O login foi efetuado com sucesso. ✅                                                     |

|    Caso de Teste    |                                           CT-11 - Entrar na conta com Google                                          |
| :-----------------: | :-------------------------------------------------------------------------------------------------------------------: |
|       Imagem        | <img src="img/Tela-LoginGoogle.jpg.png" alt="Tela de login" title="Tela de login" style="height: 800px;">             |
| Requisito Associado |    RF - 01 O sistema deve permitir que o usuário crie, edite, visualize e exclua sua conta.                           |
|      Avaliação      |                              O login com a conta do Google foi efetuado com sucesso. ✅                               |

|    Caso de Teste    |                                           CT-12 - Armazenar livros na Estante                                          |
| :-----------------: | :--------------------------------------------------------------------------------------------------------------------: |
|       Imagem        | <img src="img/Tela-Biblioteca.jpg" alt="Tela da Biblioteca" title="Tela da Biblioteca" style="height: 800px;">         |
| Requisito Associado |           RF - 08 O sistema deve permitir ao usuário armazenar os livros em uma Estante.                               |
|      Avaliação      |                             O "RF-03" ainda não foi atendido, impossibilitando o êxito do CT-12 . ❌                   |

|    Caso de Teste    |                                           CT-13 - Buscar PDF's gratuitos na Biblioteca                                  |
| :-----------------: | :---------------------------------------------------------------------------------------------------------------------: |
|       Imagem        | <img src="img/Tela-BibliotecaPesquisa.jpeg" alt="Tela da Biblioteca" title="Tela da Biblioteca" style="height: 800px;"> |
| Requisito Associado |           RF - 09 O sistema deve permitir ao usuário buscar livros com PDF's gratuitos em uma Biblioteca                |
|      Avaliação      |                              Os livros exibidos no resultado de pesquisa possuem PDF para download. ✅                  |

## Avaliação

Como a aplicação ainda não possui o banco de dados conectado as telas, todos os testes deram erro. Estamos trabalhando pra que isso seja feito o quanto antes para que novos testes possam ser feitos!
