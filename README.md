# README - Sistema de Cadastro de Alunos

## Visão Geral
Sistema completo para cadastro e consulta de alunos com:
- Backend: API REST em Spring Boot + MongoDB
- Frontend: Interface web em React

## Tecnologias
### Backend
- Java Spring Boot
- Spring Data MongoDB
- Lombok
- OpenAPI/Swagger

### Frontend
- React.js
- Material-UI
- Axios

## Pré-requisitos
- Java JDK 17+
- Maven
- Node.js 16+
- MongoDB

## Configuração

### Backend (Spring Boot)
1. Acesse a pasta do projeto:
   cd aluno-api

2. Configure o MongoDB em:
   src/main/resources/application.properties
   (spring.data.mongodb.uri=mongodb://localhost:27017/schooldb)

3. Execute:
   mvn spring-boot:run

4. API disponível em:
   http://localhost:8080/api/v1/alunos

5. Documentação:
   http://localhost:8080/swagger-ui.html

### Frontend (React)
1. Acesse a pasta:
   cd frontend

2. Instale dependências:
   npm install

3. Execute:
   npm start

4. Acesse:
   http://localhost:3000

## Endpoints
- POST /api/v1/alunos - Cadastra aluno
- GET /api/v1/alunos - Lista alunos

## Modelo de Dados
{
  "id": "string",
  "nome": "string",
  "telefone": "string",
  "email": "string",
  "endereco": "string"
}

## Funcionalidades Frontend
- Formulário de cadastro
- Validação de campos
- Tabela de alunos
- Integração com API
