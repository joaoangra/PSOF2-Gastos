# Projeto de Gastos

Repositório com uma solução para controle de gastos pessoais, utilizando HTML, CSS e JavaScript para o front-end. Este projeto foi desenvolvido como uma aplicação simples para cadastrar e exibir os gastos registrados.

## Tecnologias

- HTML
- CSS
- JavaScript

## Funcionalidades

### Cadastro de Gastos
O usuário pode registrar um gasto, informando a data, o valor e uma descrição breve do item ou serviço.

### Exibição de Gastos
Os gastos registrados são exibidos em uma tabela, organizados por ID, data, valor e descrição.

### Exibição de Mensagem
Uma caixa de mensagem aparece na tela quando a ação de cadastro é realizada, para indicar sucesso ou erro.

## Estrutura do Projeto

- **index.html**  
  Arquivo principal que contém o layout da aplicação, incluindo os formulários de cadastro e a tabela para exibir os dados.

- **style.css**  
  Arquivo de estilos que define o design e aparência do site. Inclui estilos para os formulários, tabela e caixa de mensagem.

- **script.js**  
  Arquivo JavaScript que gerencia a lógica de cadastro de gastos e exibição da mensagem de feedback.

## Como Rodar

1. Clone o repositório:

    ```bash
    git clone https://github.com/usuario/nome-do-repositorio.git
    ```

2. Abra o projeto no seu editor de código.

3. Execute o arquivo `index.html` no seu navegador.

O formulário de cadastro de gastos estará disponível para ser preenchido, e os gastos serão exibidos em uma tabela.

## Exemplo de Uso

- Ao preencher o formulário de cadastro com a data, valor e descrição, clique no botão **Cadastro** para salvar o gasto.
- A tabela será atualizada automaticamente, exibindo o novo gasto cadastrado com um ID, data, valor e descrição.
- A caixa de mensagem será exibida no canto inferior direito, indicando que o cadastro foi realizado com sucesso.

## Personalizações Possíveis

- Alteração das cores no arquivo `style.css` para ajustar o tema visual da aplicação.
- Modificação do layout e formatação da tabela, se necessário.
- Possibilidade de adicionar novas funcionalidades, como a exclusão ou edição de gastos.
