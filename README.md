# Este é o projeto de desafio da Perithus, etapa Backend.

Projeto de backend para dado uma requisição retornar os dados sobre covid para uma aplicação feita em [Bubble](https://bubble.io/home), esse backend consome uma [api publica](https://covid19-brazil-api.now.sh/) sobre o covid desenvolvida por brasileiros. 

## Getting Started

### Pré-requisitos

Para usar vc precisará ter o node instalado na sua maquina, bem como o yarn, mas os comandos também podem ser executados usando o npm. Também o uso de uma maquina tendo como sistema operacional de base Linux e Node versão 12.18.2.

### Instalação

Instalando dependências

```
yarn
```

Executando o projeto

```
yarn start
```
Obs: Porta usada foi 3334

## Exemplo de uso

  Após ter iniciado o servidor abra seu navegador e digite

  ```
  http://localhost:3334/covid/estado
  ```
  onde estado se refere a sigla do estado brasileiro como por exemplo CE ou SP.
  ```
  http://localhost:3334/
  ```
  que retorno toda os casos mortes e o nome do estado de todo o brasil.

## Decisões/Detalhes de implementação

* Pelo fato de ser meu primeiro contato com uma ferramenta no code o inicio foi muito desafiador conseguir conectar a aplicação com meu backend, tive que hospeda-lo do heroku para conseguir ter acesso.

* Não consegui colocar para as requisições retornarem um status code, pois não sei como lidar com isso dentro do bubble quando o status é 400 (bad request).

## Construido com

* [NodeJS](https://nodejs.org/en/docs/) - Plataforma da aplicação
* [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - "Linguagem"

## Author

* **Gabriel de Souza** - [Gabriel3421](https://github.com/Gabriel3421)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
