# 🐾 AdotePet

Sistema de cadastro e gerenciamento de pets para adoção, desenvolvido para auxiliar ONGs e protetores independentes na organização de animais disponíveis para adoção.

---

## 📌 Sobre o projeto

O **AdotePet** é uma aplicação full stack que permite:

- Cadastro de pets
- Listagem de animais disponíveis para adoção
- Edição e remoção de registros
- Organização de dados de adoção
- Interface simples, moderna e responsiva

---

## 🚀 Tecnologias utilizadas

### 💻 Front-end
- React
- TypeScript
- React Router DOM
- CSS Modules
- Vite

### ⚙️ Back-end
- Node.js
- Express
- Prisma ORM
- CORS
- dotenv

### 🗄️ Banco de dados
- MySQL / MariaDB (Aiven)

---

## 🌐 Deploy

- Front-end: Vercel  
- Back-end: Render  
- Banco de dados: Aiven  

---

## 📁 Estrutura do projeto

```bash
adotepet/
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

## ⚙️ Como executar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/adotepet.git
```

---

### 2. Front-end

```bash
cd frontend
npm install
npm run dev
```

Acesse:  
http://localhost:5173

---

### 3. Back-end

```bash
cd backend
npm install
npm run dev
```

---

## 🔑 Variáveis de ambiente

Crie um arquivo `.env` dentro do backend:

```env
DATABASE_URL="sua_url_do_banco"
PORT=3000
```

---

## ✨ Funcionalidades

- 📋 Cadastro de pets
- ✏️ Edição de pets
- ❌ Remoção de pets
- 🔍 Listagem dinâmica
- 🌐 API conectada ao banco de dados

---

## 🛠️ Melhorias futuras

- Sistema de login
- Upload de imagens dos pets
- Filtros de adoção
- Painel administrativo
- Deploy completo integrado

---

## 👩‍💻 Desenvolvido por

Carolina Ferreira Domingues  
Projeto full stack para portfólio



