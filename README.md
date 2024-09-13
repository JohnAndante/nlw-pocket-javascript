# nlw-pocket-javascript

![image](https://github.com/user-attachments/assets/297ca080-5a8d-4c05-8e12-b42a9e659875)

### in.orbit - Gerenciador de Metas

O projeto consiste em um gerenciador de tarefas simples e intuitivo, feito com várias tecnologias modernas, como o React, TypeScript, Drizzle, entre outras. O objetivo é disponibilizar um layout interativo e adaptável para o controle de curtos objetivos e atividades.

## 📸 Imagens do Projeto
* Tela Inicial

  ![image](https://github.com/user-attachments/assets/55fd1713-57ee-4540-8fd7-dd6b468e10c6)

* Cadastrar Meta

  ![image](https://github.com/user-attachments/assets/9709141e-77e4-4193-9ed9-54eaf4398401)

* Metas Cadastradas

  ![image](https://github.com/user-attachments/assets/aa2360cd-b699-49d6-aaf5-0ee56ad2e4cb)




## 📝 Funcionalidades

* **Gerenciamento de Metas**: Possibilita a criação e acompanhamento de metas e objetivos.
* **Visualização de Progresso**: Permite monitorar o progresso de cada meta, além de exibir o total de metas concluídas.
* **Interatividade**: Utiliza um layout intuitivo e interativo para facilitar a navegação e utilização do sistema.

## 📚 Tecnologias Utilizadas

### 🖥️ Frontend

| Tecnologia | Descrição |
|------------|-----------|
| **Vite** | Framework de rápido desenvolvimento para aplicações web. |
| **React** | Biblioteca web para construção de interfaces de usuário. |
| **Tailwind CSS** | Biblioteca de estilos para construção de interfaces. |
| **Radix UI** | Biblioteca de componentes de interface. |
| **Lucide React** | Biblioteca de ícones para React. |
| **React Query** | Biblioteca de gerenciamento de estado e cache para React. |
| **Day.js** | Biblioeca de manipulação de datas. |
| **Zod** | Biblioteca validadora de esquemas e tipos. |
| **Biome** | Um linter para TypeScript e Javascript. |

---

### 📡 Backend

| Tecnologia | Descrição |
|------------|-----------|
| **Node.js** | Ambiente de execução JavaScript. |
| **Drizzle-ORM** | Framework para desenvolvimento de aplicações descentralizadas. |
| **Fastify** | Framework gerenciador de rotas e middlewares. |
| **Zod** | Biblioteca validadora de esquemas e tipos. |
| **PostgreSQL** | Banco de dados relacional. |
| **Docker** | Plataforma de conteinerização. |
| **Biome** | Um linter para TypeScript e Javascript. |

---
## 🚀 Iniciando o Projeto

Para rodar o projeto localmente, siga as instruções:

- Antes de tudo, navegue até o diretório onde deseja clonar o projeto e execute o comando abaixo para clonar o repositório:

    ```bash
    git clone https://github.com/JohnAndante/nlw-pocket-javascript.git
    ```

    Ou caso prefira, baixe o projeto diretamente do GitHub.

#### 📡 Backend

1. Tenha os seguintes programas/pacotes instalados:

    * Node.js - [Download](https://nodejs.org/en/download/) (Versão LTS)
    * Docker - [Download](https://www.docker.com/products/docker-desktop) (Versão Desktop)

    Você pode verificar se o Node.js está instalado executando o comando abaixo no terminal:

    ```bash
    node -v
    ```

    E para verificar se o Docker está instalado, execute:

    ```bash
    docker -v
    ```

2. Navegue até o diretório do repositório clonado, acessando a pasta `server`:

    ```bash
    cd nlw-pocket-javascript/server
    ```

3. Prepare o arquivo `.env`:

    Copie o arquivo `.env.example` e renomeie para `.env`:

    ```bash
    cp .env.example .env
    ```

    Abra o arquivo `.env` e preencha as variáveis de ambiente necessárias.

4. Instale as Dependências:

    Instale as dependências do projeto:

    ```bash
    npm install
    ```

    Em seguida, as dependências do Docker:

    ```bash
    docker-compose up -d
    ```

5. Realize as **Migrações** do Banco de Dados:

    Execute o comando para criar as tabelas pelo `npm`:

    ```bash
    npm run migrate
    ```

    Ou então utilize o comando do `drizzle-kit`:

    ```bash
    npx drizzle-kit migrate
    ```

6. Inicie o Servidor:

    ```bash
    npm run dev
    ```

    O servidor estará rodando em `http://localhost:3333`.

    > Possível também acessar o `drizzle studio` para visualizar o banco de dados executando o comando
    > ```bash
    > npx drizzle-kit studio
    > ```
    > O `drizzle studio` estará rodando em `https://local.drizzle.studio`.

#### 🖥️ Frontend

1. Navegue até o diretório do repositório clonado, acessando a pasta `client`:

    ```bash
    cd nlw-pocket-javascript/web
    ```

2. Instale as Dependências:

    Instale as dependências do projeto:

    ```bash
    npm install
    ```

3. Inicie a Aplicação:

    ```bash
    npm run dev
    ```

    A aplicação estará rodando em `http://localhost:3000`.




