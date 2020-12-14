# api-node-mongo
Api básica com Nodejs e Mongo BD


# FRAMEWORKS E DEPENDÊNCIAS #
* Nodejs v 12.16.1
* Express v 4.17.1
* bcryptjs v 2.4.3
* body-parser v 1.19.0
* fs v 0.0.1-security
* jsonwebtoken v 8.5.1
* mongoose v 5.11.7
* path v 0.12.7

# PRÉ-REQUISITOS #

* Ter instalado e configurado Nodejs
* Ter instalado e configurado Mongo DB

# CONFIGURAÇÕES #

### Clone o repositório ###

$ git clone https://github.com/DaviDuque/api-node-mongo.git

### Instale as dependências ###

$ npm install

### Inicialize a Aplicação  ###

* Verifique se o Mongo esta rodando localmente
* node src/index.js

### Banco de dados ###

$ Não é necessário criar nenhuma estrutura, inicie utilizando as rostas de criação
### Desenvolvimento##
 Branch development
### Produção##
 Branch master
### Novas funcionalidades##
 Branch feature/nome da funcionalidade
### Acesso as rotas ###

em http://localhost:3333

# ROTAS #

### Registro de usuário ###

/auth/register -> POST
* {
*	"name": "Maria Pereira",
*	"email": "teste2@teste.com",
*	"password": "123456"
* }

###  Autênticação ###

/auth/authentication -> POST
* {
*	"email": "teste1@teste.com",
*	"password": "123456"
* }
### Listar vendas ###

/vendas -> GET
* sem parâmetro
### Ranking(Defaul 1) ###

/vendas/ranking/1 -> GET
* Numero do ranking
### vendas por usuário id ###
/vendas/id -> GET
* Id do usuário

###  Criar venda ###

/vendas -> POST
* {
* 	"product": "Carrinho",
* 	"description": "Descrição de carrinho",
* 	"value": 3.30	
* }

### Delete vende ###
/vendas/id -> Delete
* Id da venda
# AUTOR #

Davi Duque do Nascimento 
