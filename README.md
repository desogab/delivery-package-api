# Delivery de encomendas 

## O Projeto:
Uma API simples para fins de estudos onde temos cliente e entregador, ambos precisam estar autenticados para utilizar o serviço.

## Como funciona:
  - O cliente faz autenticação na plataforma.
  - Cria o pedido inicial de uma entrega com nome do produto a ser entregue.
  - O entregador autenticado na plataforma tem acesso a todos os pedidos que estão em aberto e escolhe um para fazer a entrega.
  - Quando entregador finaliza a entrega é gerado uma data final informando a data e hora.

## Restrições:
  - O cliente não é possível gerar um pedido sem estar autenticado.
  - O deliveryman(entregador) não pode aceitar um pedido sem estar autenticado.
  - Somente o entregador que iniciou o serviço pode finaliza-lo.

## Como rodar:
  - Crie um arquivo .env na raiz do projeto para colocar suas SECRETS para utilizar o jsonwebtoken:
    ```dotfiles
    CLIENT_SECRET_TOKEN=
    DELIVERYMAN_SECRET_TOKEN=
    ```
  - Tenha [nodejs](https://nodejs.org/en/) instalado em sua máquina. 
  - Faça o clone do projeto e acesse a pasta:
    ```bash
    git clone https://github.com/desogab/delivery-package-api.git && cd delivery-package-api 
    ``` 
  - Rode o comando abaixo para instalar as dependências:
    ```bash
    npm install
    ``` 
  ---
  - Para configurar seu banco de dados SQLITE, crie um arquivo dentro da pasta prisma/ com nome de **dev.db**
  - Rode o comando abaixo para que o schema.prisma possa criar os modelos em seu banco de dados
    ```bash
    npx prisma migrate dev --name init
    ```
  - Agora você pode startar o projeto:
    ```bash
    npm run dev
    ``` 
  - Acessar seu banco de dados pela web com prisma studio(opcional):
    ```bash
    npx prisma studio
    ```
  ---
  ## Exemplos de Requisição:
  ### WIP 