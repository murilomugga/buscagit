# Busca Git

https://murilomugga.github.io/buscagit

Ferramenta de busca de usuários do GitHub e seus respectivos diretórios, desenvolvida com HTML5 e jQuery

### Recursos oferecidos:
- **Busca Autenticada**: aumento da taxa limite (~~10/min~~ 30/min na busca e ~~60/h~~ 5000/h no geral )
- **Usabilidade**: input com foco automático, acionamento com `Enter ⤶` e busca com nome/login de usuário 
- **Ordenação**: considera todos os repositórios do usuário ao usar [api/search](https://developer.github.com/v3/search/#search-repositories) ao invés de [api/users/repos](https://developer.github.com/v3/repos/#list-user-repositories) (limitada a 100 )

### Recursos utilizados:
- **Frontend**: HTML5, CSS3 e as bibliotecas [jQuery](https://code.jquery.com/) e [Font Awesome](https://fontawesome.com)
- **Empacotadores**: YarnTeste unitário 
-

### Instalação

Instalar Node:

https://nodejs.org/en/

Instalar Yarn:

https://yarnpkg.com/pt-BR/docs/install

Rodar testes:
```
yarn test
```
