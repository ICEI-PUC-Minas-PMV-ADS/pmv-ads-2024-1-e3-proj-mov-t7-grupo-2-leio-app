# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="04-Projeto de Interface.md"> Projeto de Interface</a>

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

|  **Caso de Teste**  |                                                           **CT-01 - Criar conta**                                                           |
| :-----------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado |                           RF01 - O sistema deve permitir que o usuário crie, edite, visualize e exclua sua conta.                           |
|  Objetivo do Teste  |                                                  Verificar a possibilidade de criar conta                                                   |
|       Passos        | 1. Acessar o Aplicativo; <br> 2. Acessar a opção “Cadastre-se aqui”. <br> 3. Preencher os dados necessários. <br> 4. Clicar em "Cadastrar". |
|  Critério de Êxito  |                                                   Criação da conta realizada com sucesso                                                    |

|  **Caso de Teste**  |                                                                                     **CT-02 - Editar conta**                                                                                     |
| :-----------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado |                                                     RF01 - O sistema deve permitir que o usuário crie, edite, visualize e exclua sua conta.                                                      |
|  Objetivo do Teste  |                                                                            Verificar a possibilidade de editar conta                                                                             |
|       Passos        | 1. Acessar o Aplicativo; <br> 2. Acessar a área de login. <br> 3. Efetuar login. <br> 4. Clicar no botão "Perfil" <br> 5. Preencher os dados necessários. <br> 6. Clicar em "Salvar alterações". |
|  Critério de Êxito  |                                                                              Edição da conta realizada com sucesso                                                                               |

|  **Caso de Teste**  |                                                               **CT-03 - Visualizar conta**                                                                |
| :-----------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado |                                  RF01 - O sistema deve permitir que o usuário crie, edite, visualize e exclua sua conta.                                  |
|  Objetivo do Teste  |                                                     Verificar a possibilidade de visualizar sua conta                                                     |
|       Passos        | 1. Acessar o Aplicativo; <br> 2. Acessar a área de login. <br> 3. Efetuar login. <br> 4. Clicar no botão “Perfil” <br> 5. Visualizar dados da conta. <br> |
|  Critério de Êxito  |                                                        Visualização da conta realizada com sucesso                                                        |

|  **Caso de Teste**  |                                                                              **CT-04 - Excluir conta**                                                                               |
| :-----------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado |                                               RF01 - O sistema deve permitir que o usuário crie, edite, visualize e exclua sua conta.                                                |
|  Objetivo do Teste  |                                                                      Verificar a possibilidade de excluir conta                                                                      |
|       Passos        | 1. Acessar o Aplicativo; <br> 2. Acessar a área de login. <br> 3. Efetuar login. <br> 4. Clicar no botão “Perfil”. <br> 5. Clicar em “Excluir conta”. <br> 6. Clicar em "Confirmar". |
|  Critério de Êxito  |                                                                       Exclusão da conta realizada com sucesso                                                                        |

|  **Caso de Teste**  |                                                                                        **CT-05 - Buscar livros**                                                                                        |
| :-----------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado |                                           RF02 - O sistema deve permitir que o usuário possa buscar pelos seus livros pelo nome do livro, categoria ou autor.                                           |
|  Objetivo do Teste  |                                                                               Verificar a possibilidade de buscar livros                                                                                |
|       Passos        | 1. Acessar o Aplicativo; <br> 2. Acessar a área de login. <br> 3. Efetuar login. <br> 4. Clicar na área de busca. <br> 5. Digitar nome do livro, categoria ou nome do autor. <br> 6. Visualizar livros. |
|  Critério de Êxito  |                                                                                     Livros encontrados com sucesso                                                                                      |

|  **Caso de Teste**  |                                                                                                              **CT-06 - Categorizar livros**                                                                                                              |
| :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado |                                        RF03 - O sistema deve permitir que o usuário possa marcar seus livros de acordo com categorias pré estabelecidas, sendo elas: lido, lendo, quero ler, relendo e abandonei.                                        |
|  Objetivo do Teste  |                                                                                                        Verificar a possibilidade de marcar livros                                                                                                        |
|       Passos        | 1. Acessar o Aplicativo; <br> 2. Acessar a área de login. <br> 3. Efetuar login. <br> 4. Clicar na área de busca. <br> 5. Digitar nome do livro, categoria ou nome do autor. <br> 6. Selecione o livro desejado. <br> 7. Marcar categoria desejada. <br> |
|  Critério de Êxito  |                                                                                           Livro marcado com sucesso. Ele aparecerá automaticamente na estante.                                                                                           |

|  **Caso de Teste**  |                                                                                                         **CT-07 - Ler descrição dos livros**                                                                                                          |
| :-----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado |                                                  RF04 - O sistema deve permitir que o usuário possa ler a descrição do livro buscado, contendo título, autor, imagem, editora, sinopse e avaliações.                                                  |
|  Objetivo do Teste  |                                                                                                Verificar a possibilidade de ler a descrição dos livros                                                                                                |
|       Passos        | 1. Acessar o Aplicativo; <br> 2. Acessar a área de login. <br> 3. Efetuar login. <br> 4. Clicar na área de busca. <br> 5. Digitar nome do livro, categoria ou nome do autor. <br> 6. Selecione o livro desejado. <br> 7. Ler descrição do livro. <br> |
|  Critério de Êxito  |                                                                                                      Descrição do livro disponível com sucesso.                                                                                                       |

|  **Caso de Teste**  |                                                                                                         **CT-08 - Link de compra na Play Store**                                                                                                         |
| :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado |                                                                                  RF05 - O sistema deve permitir que o usuário acesse o link para compra na Play Store.                                                                                   |
|  Objetivo do Teste  |                                                                                                          Verificar o link de compra dos e-books                                                                                                          |
|       Passos        | 1. Acessar o Aplicativo; <br> 2. Acessar a área de login. <br> 3. Efetuar login. <br> 4. Clicar na área de busca. <br> 5. Digitar nome do livro, categoria ou nome do autor. <br> 6. Selecione o livro desejado. <br> 7. Clique no botão “Comprar”. <br> |
|  Critério de Êxito  |                                                                                        O usuário será levado para o aplicativo da Play Store com o nome do livro.                                                                                        |

|  **Caso de Teste**  |                                                                                                         **CT-09 - Ler prévia de livro**                                                                                                          |
| :-----------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado |                                                                                RF06 - O sistema deve permitir que o usuário possa ver uma prévia do livro na API.                                                                                |
|  Objetivo do Teste  |                                                                                                Verificar a possibilidade de ler prévia de livro.                                                                                                 |
|       Passos        | 1. Acessar o Aplicativo; <br> 2. Acessar a área de login. <br> 3. Efetuar login. <br> 4. Clicar na área de busca. <br> 5. Digitar nome do livro, categoria ou nome do autor. <br> 6. Selecione o livro desejado. <br> 7. Clique em “ler prévia”. |
|  Critério de Êxito  |                                                                                  O usuário será levado para a página do PDF do livro disponibilizado pela API.                                                                                   |

|  **Caso de Teste**  |                                                                                                                 **CT-10 - Avaliar livros**                                                                                                                 |
| :-----------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado |                                                                               RF07 - O sistema deve permitir que o usuário possa avaliar o livro lido entre 1 e 5 estrelas.                                                                                |
|  Objetivo do Teste  |                                                                                                        Verificar a possibilidade de avaliar livros                                                                                                         |
|       Passos        | 1. Acessar o Aplicativo; <br> 2. Acessar a área de login. <br> 3. Efetuar login. <br> 4. Clicar na área de busca. <br> 5. Digitar nome do livro, categoria ou nome do autor. <br> 6. Selecione o livro desejado. <br> 7. Clique nas estrelas para avaliar. |
|  Critério de Êxito  |                                                                                                              Avaliação efetuada com sucesso.                                                                                                               |

|  **Caso de Teste**  |                                           **CT-11 - Buscar PDF's gratuitos na Biblioteca**                                            |
| :-----------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado |                    RF10 - O sistema deve permitir ao usuário buscar livros listados como gratuitos na biblioteca.                     |
|  Objetivo do Teste  |                              Verificar se após buscar por livros na biblioteca, aparecem e são gratuitos                              |
|       Passos        | 1. Acessar o Aplicativo; <br> 2. Realizar login; <br> 3. Navegar até a biblioteca <br> 4. Pesquisar um livro <br> 5. Clique no livro. |
|  Critério de Êxito  |                                              Listagem de livros gratuitos no aplicativo                                               |

|  **Caso de Teste**  |                                                             **CT-12 - Visualizar livros categorizados**                                                             |
| :-----------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Requisito Associado | RF03 - O sistema deve permitir que o usuário possa marcar seus livros de acordo com categorias pré estabelecidas, sendo elas: lido, quero ler, relendo e abandonei. |
|  Objetivo do Teste  |                                                         Visualizar todos os livros categorizados na estante                                                         |
|       Passos        |                       1. Acessar o Aplicativo; <br> 2. Realizar login; <br> 3. Navegar até a estante <br> 4. Visualizar livros categorizados                        |
|  Critério de Êxito  |                                                            Listagem de livros categorizados pelo usuário                                                            |
