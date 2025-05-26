# 2C Solution task

A GraphQL API server for managing users.

---

## 🚀 Technologies Used

- **Node.js** – JavaScript runtime
- **GraphQL** – API query language
- **Apollo Server** – GraphQL server
- **Prisma** – ORM for database access
- **SQLite** – Relational database

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)

---

## 📂 Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/jblanusa13/2c-solution-zadatak.git
```

### 2. Open project in Visual Studio Code

### 3. Install dependencies

```bash
npm install @apollo/server graphql
npm install --save-dev typescript @types/node
```

### 4. Setup Prisma

```bash
npx prisma migrate dev
```

If you want to run a seed script, to reset database, run: 

```bash
npx prisma migrate reset
```

### 5. Run the server

```bash
npm start
```

In the console you will see: 
```bash
🚀  Server ready at: http://localhost:4000/
```

Open Apollo Server Playground, by clicking the link, to test the API.


