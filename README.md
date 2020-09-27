# back-end-GoBarber-v2


- Foi redirecionado alguns arquivos para a nova arquitetura de sistema tornando-se um projeto mais escalável



- Dentro de src foi refatorado/movido as pastas database, models, services, repositories, middlewares, routes, e em breve será movido o arquivo server.ts

- Foram criados novos diretorios para a refatoração modules e shared. A pasta modules possui dois subdiretorios users e appointments, dentro deles estão entities repositories e services.


<img src="github/modules.png" alt="models">

Ah e os arquivos da pasta models foram movidos para pasta entities


- Dentro da pasta shared estão as pastas database, errors, middlewares e routes.

<img src="github/shared.png" alt="models">


## Camadas de domínio e camada de infra

### Infra: decisões tecnicas.
  src/shared/infra
  ferramentas, frameworks, stack, banco, biblioteca e etc.
  Coloca apenas coisas que um dia podem ser migradas, e não dependentes como a pasta errors.

  tudo o que for relacionado com express, ou com a camada http da aplicação ficará no diretório shared/infra/http
  middlewares, rotas e o arquivo server.ts

  mkdir src/modules/users/infra/typeorm
  mkdir src/modules/appointments/infra/typeorm

  como as entidades(entities) são puro typeorm, obviamente serão movidas para /appointments/infra/typeorm e será feito o mesmo no modulo users

  rename shared/infra/database shared/infra/typeorm






### Domínio: decisões de regras de negócio.
  o que o nosso Cliente/Usuário precisa.

### services isolam regra de negócio


em ts.config descomentar baseUrl e paths e colocar

<img src="github/tsconfig.png" alt="models">

Para diminuir a importação com os atalhos, haverá menos '../../../'


mkdir modules/appointments/infra/http/routes

cd shared/infra/http/routes
mv appoitments.routes.ts /modules/appointments/infra/http/routes/

e o mesmo acontece com a rota e modulo de usuarios, a rota sessions está ligada com usuários

reorganizar as importações aos seus devidos em shared/infra/http/routes/index.ts

cd shared/infra/http
mv middlewares /modules/users/infra/http/

reorganizar as importações nas rotas de appointments e usuarios

reorganizar as importações nas entidades de appointments e usuários

reorganizar a importação de entidade nos repositórios appointments e usuários

reorganizar as importações em services.

reorganizar a importação de rota em shared/infra/http/routes/server.ts

trocar o endereço do arquivo de inicialização la no package.json no fim do comando dev:server e start, de src/server.ts para src/shared/infra/http/server.ts.

o node não intende as importações com a @ como o VSCode é necessario instalar a lib tsconfig-paths -D

e no inicio do comando dev:server colocar uma flag -r tsconfig-paths/register