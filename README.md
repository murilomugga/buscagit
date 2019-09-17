# Busca Git

Ferramenta de busca de usuários do GitHub e seus respectivos diretórios, desenvolvida com HTML5 e jQuery.
[murilomugga.github.io/buscagit](https://murilomugga.github.io/buscagit)

### Recursos oferecidos:
- **Busca Autenticada**: aumento da taxa limite (~~10/min~~ 30/min na busca e ~~60/h~~ 5000/h no geral )
- **Usabilidade**: input com foco automático, acionamento com `Enter ⤶` e aceitando nome/login exato/parcial
- **Ordenação**: com todos repositórios do usuário ao usar [api/search](https://developer.github.com/v3/search/#search-repositories) ao invés de [api/users/repos](https://developer.github.com/v3/repos/#list-user-repositories) (limitada a 100)
- **URL amigável**: opção de detalhamentos com uso de `#usuario/repositorio` na URL

### Recursos utilizados:
- **Frontend**: HTML5, CSS3 e as bibliotecas [jQuery](https://code.jquery.com/) e [Font Awesome](https://fontawesome.com)
- **Empacotadores**: [Node.js](https://nodejs.org/en/)+[Yarn](https://yarnpkg.com/pt-BR/docs/install)
- **Módulo~~s~~**: apenas o módulo de testes [Jest](https://jestjs.io) com fins demonstrativos

### Orientações:
- **Node.js**: [instalador](https://nodejs.org/en/)
- **Yarn**: [instalador](https://yarnpkg.com/pt-BR/docs/install)
- **Teste unitário:** ` yarn add -D jest ` e ` yarn test `
