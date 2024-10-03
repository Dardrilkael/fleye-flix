
# Fleye-Flix

Fleye-Flix é uma plataforma simples de filmes que permite aos usuários navegar e curtir filmes, utilizando React para o frontend, NestJS para o backend, e a API do IMDb para os dados dos filmes. Os filmes curtidos são salvos em um banco de dados, proporcionando uma experiência personalizada.

## Instalação

Siga os passos abaixo para executar este projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/fleye-flix.git
```

### 2. Navegue para o diretório do projeto

```bash
cd fleye-flix
```

### 3. Instale as dependências

#### Para o frontend (React):

```bash
cd frontend
npm install
```

#### Para o backend (NestJS):

```bash
cd ../backend
npm install
```

### 4. Configurações

No diretório `backend`, crie um arquivo `.env` e configure a conexão com o banco de dados e outras variáveis necessárias:

```plaintext
DATABASE_URL='mongodb+srv://gabrielfonsecabarreto:sampleword@cluster0.iptjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
PORT=8080
```

No diretório `frontend`, crie um arquivo `.env` e configure com sua chave da API do IMDb:

```plaintext
REACT_APP_API_URL=http://localhost:8080
```

### 5. Execute o servidor backend (NestJS)

```bash
cd backend
npm run start
```

### 6. Execute o frontend (React)

```bash
cd ../frontend
npm start
```

### 7. Acesse a aplicação

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para acessar a aplicação.
