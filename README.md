# Pólis 3 API

API do projeto Pólis3

## Pré-requistos
- [Docker](https://www.docker.com/)
- [VSCode](https://code.visualstudio.com/)
    - [Extensão devcontainer](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Instruções

Fazer o clone da aplicação
```
git clone https://github.com/pedrorenan/polis3-api
```

Acessar a pasta do projeto
```
cd polis3-api
```

Instalar dependências
```
yarn install
```

Inicializar arquivo de variáveis de ambiente
```
cp .env.example .env
```

Iniciar a blockchain local
```
yarn chain
```

Testar sua blockchain local
```
node ace chain:hello_world
```

Iniciar a API
```
node ace serve --watch
```
