# PokemonAPI

> Visualize pokémons e crie times

# Conteúdo
  - [Instalação](#instalação)
  - [Iniciando aplicação](#iniciando-aplicação)
    - [Rodando com Docker](#rodando-com-docker)
    - [Executando manualmente](#executando-manualmente)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Explicação sobre o Código](#explicação-sobre-o-código)

## Instalação
Primeiramente você precisa instalar os seguintes programas para poder utilizar a aplicação
- [Node.js](https://nodejs.org/en/download)
- [Yarn](https://yarnpkg.com)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

Após isso você pode clonar o repositório via HTTP com o comando:
```
git clone https://github.com/lprs110/pokemon-api.git
```

Para instalar as dependências:
```
yarn install
```

## Iniciando aplicação

### Rodando com Docker

Para preparar o banco de dados e rodar a aplicação, você precisa apenas executar os seguintes comandos:
```
sudo chmod +x build.sh
./build.sh
```
Ao finalizar este comando, o MongoDB estará sendo executado na porta 27017 e a aplicação na porta 3333.

### Executando manualmente

Caso você queira configurar manualmente, inicialmente precisa-se instalar o MongoDB em sua máquina. Caso você tenha o Docker, pode criar um container do MongoDB:
```
docker run --name mongodb -p 27017:27017 -d -t database
```
Ao final, execute o seguinte comando para iniciar a aplicação em ambiente de desenvolvimento
```
yarn dev
```

## Tecnologias utilizadas

- **Express**
  - Possibilita a construção de rotas da API.
  - Escolhido por ser de fácil uso e pela afinidade com a biblioteca.
- **MongoDB**
  - Banco de dados da aplicação, trabalhando em conjunto com a ORM **Mongoose**.
  - Escolhido por ser um banco de dados de fácil utilização e configuração. A inclusão da ORM foi escolhida para facilitar ainda mais as consultas e construções dos *schemas*.
- **DotEnv**
  - Utilizado para permitir a leitura de arquivos ```.env```.
  - Escolhido por ser de fácil e uso e pela afinidade com a biblioteca.
- **Celebrate**
  - Em conjunto com o **Joi**, é possível validar os campos passados nas requisições.
  - Escolhido para ajudar nas validação dos campos, esta biblioteca pode ser executada com um *middleware* do express e assim interceptar a requisição para validar os dados (como verificar se os campos foram passados, se estão no formato adequado, etc).
- **Sucrase**
  - Permite utilizar funções mais modernas do Javascript no Node.js, além de também compilar a aplicação.
  - Escolhido para ajudar durante o desenvolvimento da API possibilitando utilizar import/export, porém é importante ressaltar que é precisar realizar o *build* da aplicação quando utiliza-o.
- **Nodemon**
  - Utilizado em ambiente de desenvolvimento para reiniciar a aplicação quando alguma mudança é feita.
  - Escolhido para ajudar durante o desenvolvimento da API.
- **Eslint/Prettier**
  - Auxilia à manter padrões de código durante o desenvolvimento.
  - Escolhido para ajudar durante o desenvolvimento da API.
- **Jest**
  - Possibilita a execução de testes unitários.
  - Escolhido por ser de fácil uso e pela afinidade com a biblioteca.

## Explicação sobre o Código

Para facilitar a leitura da documentação, a explicação sobre o código foi dividido em três arquivos, um para mostrar uma visão geral do código, outro para explicar alguns raciocínios adotados e outro para detalhar as rotas da aplicação.

- [Visão Geral](.github/visao-geral.md)
- [Explicação Geral](.github/explicacao-geral.md)
- [Rotas](.github/rotas.md)
