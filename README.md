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
  ferramentas, frameworks, stack e etc.


### Domínio: decisões de regras de negócio.
  o que o nosso Cliente/Usuário precisa.

