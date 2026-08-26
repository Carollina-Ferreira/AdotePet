<div align="center">

# 🐾 AdotePet

### Encontre um novo lar. Transforme uma vida. 💜💙

Sistema Full Stack para cadastro e gerenciamento de animais disponíveis para adoção.

<br>

<img src="https://img.shields.io/badge/React-3B82F6?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-8B5CF6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-3B82F6?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/MySQL-8B5CF6?style=for-the-badge&logo=mysql&logoColor=white" />

</div>

---

## 💡 Sobre o projeto

O **AdotePet** é uma aplicação **Full Stack** desenvolvida para auxiliar ONGs e protetores independentes na organização e gerenciamento de animais disponíveis para adoção.

A plataforma permite cadastrar, visualizar, editar e remover informações dos pets, utilizando uma arquitetura que conecta **front-end, API, banco de dados e serviços de hospedagem**.

---

## ✨ Funcionalidades

* 🐶 Cadastro de pets
* 📋 Listagem de animais disponíveis para adoção
* ✏️ Edição de informações
* 🗑️ Remoção de registros
* 🔄 Atualização dinâmica dos dados
* 🔗 Integração entre Front-end e API
* 🗄️ Persistência de dados em banco de dados
* 📱 Interface responsiva

---

## 🛠️ Tecnologias utilizadas

<div align="center">

### 💻 Front-end

<img src="https://skillicons.dev/icons?i=react,ts,vite&theme=dark" />

`React` • `TypeScript` • `React Router DOM` • `CSS Modules` • `Vite`

<br>

### ⚙️ Back-end

<img src="https://skillicons.dev/icons?i=nodejs,express,prisma&theme=dark" />

`Node.js` • `Express` • `Prisma ORM` • `CORS` • `dotenv`

<br>

### 🗄️ Banco de Dados

<img src="https://skillicons.dev/icons?i=mysql&theme=dark" />

`MySQL / MariaDB`

</div>

---

## 🌐 Deploy

O projeto utiliza serviços de hospedagem para disponibilizar sua aplicação e infraestrutura:

| Serviço       | Utilização              |
| ------------- | ----------------------- |
| ▲ **Vercel**  | Hospedagem do Front-end |
| 🚀 **Render** | Hospedagem do Back-end  |
| 🗄️ **Aiven** | Banco de Dados          |

---

## 📁 Estrutura do projeto

```text
adotepet/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.tsx
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   ├── prisma/
│   └── server.ts
│
└── README.md
```

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Carollina-Ferreira/AdotePet.git
```

### 2. Configure o Front-end

```bash
cd frontend
npm install
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

### 3. Configure o Back-end

```bash
cd backend
npm install
npm run dev
```

---

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` no diretório do back-end:

```env
DATABASE_URL="sua_url_do_banco"
PORT=3000
```

---

## 🚀 Próximas melhorias

* 🔐 Sistema de autenticação e login
* 📸 Upload de imagens dos pets
* 🔎 Filtros para facilitar a busca por animais
* 📊 Painel administrativo
* 🔗 Melhorias na integração e deploy da aplicação

---

## 👩‍💻 Desenvolvido por

<div align="center">

### 💜 Carolina Ferreira 💙

Estudante do **Técnico em Desenvolvimento de Sistemas — SENAI**

Desenvolvedora Full Stack em formação 🚀

<br>

<a href="https://www.linkedin.com/in/carolina-ferreira-domingues-728bb4403/">
<img src="https://img.shields.io/badge/LinkedIn-3B82F6?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/Carollina-Ferreira">
<img src="https://img.shields.io/badge/GitHub-8B5CF6?style=for-the-badge&logo=github&logoColor=white"/>
</a>

</div>
