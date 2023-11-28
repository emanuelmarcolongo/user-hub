<h1 align="center"> UsersHub - React Native App</h1>
<p align="center">
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="Axios" src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white" />
  <img alt="Styled Components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Expo" src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" />
</p>

<p align="center">
Este é um aplicativo React Native desenvolvido com o intuito de ser um CRUD para gerenciamento dos usuários.
  Receba uma lista dos usuários, adicione, edite e delete os mesmos
</p>


# Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente em sua máquina.

## Pré-requisitos
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Clonar o Repositório
```bash
git clone https://github.com/emanuelmarcolongo/user-hub/
cd user-hub
```

## Instalar as Dependências
```bash
npm install
# ou
yarn install
```

## Fazer a instalação da API contida em [AQUI](https://github.com/emanuelmarcolongo/users-crud-api)

## Pegar seu IP nas configurações de rede e colocar na API_URL 

```bash
path do arquivo: src/Utils/Urls/API-URL.ts

const API_URL = `http://{MeuIp}:3000`
export default API_URL;

```

## Executar o Projeto

```bash
npm start
# ou
yarn start
```

Abra o aplicativo Expo Go no seu dispositivo móvel e escaneie o código QR gerado.
