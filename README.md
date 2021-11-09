# back-end-GoBarber-v2

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/get-started).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

Crie o arquivo .env e ormconfig.json tem dois arquivos exemplos para serem copiados.

Com o Docker instalado, Vamos criar os containers e os bancos. [Docs Postgresql](https://hub.docker.com/_/postgres)

Verifique se você não está utilizando a porta 5432(no ubuntu)
```bash
lsof -i :5432
```


```bash
# Se a porta 5432 estiver ocupada é só trocar 5432:5432 por 5433:5432.
docker run --name gobarber_postgresql -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

e faça o mesmo para mongodb
```bash
lsof -i :27017
```

```bash
# Se a porta 27017 estiver ocupada é só trocar 27017:27017 por 27018:27017.
docker run --name mongodb -p 27017:27017 -d -t mongo
```

```bash
# Se a porta 6379 estiver ocupada é só trocar 6379:6379 por 6380:6379.
docker run --name redis -p 6379:6379 -d -t redis:alpine
```

```bash
# Clone este repositório
git clone https://github.com/Luciano-Ferreira/backGoBarberv2.git

# Acesse a pasta do projeto no terminal/cmd
cd backGoBarberv2

# Instale as dependências
yarn

# Inicie os containers e bancos

docker start redis mongodb gostack_gobarber

# Rode as migrations
yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
yarn dev:server

# O servidor iniciará na porta:3333 - acesse <http://localhost:3333>
```



## 🚀 Tecnologia utilizadas

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [axios](https://github.com/axios/axios)
- [Docker](https://www.docker.com/get-started)

Eu criei um <a href="https://www.notion.so/Back-end-Gobarberv2-1214568a8b064613bc59cdc259876d8b" target="_blank">relatório</a> onde menciono cada mudança alterada em cada commit!
