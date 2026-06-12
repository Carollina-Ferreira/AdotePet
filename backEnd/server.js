const express = require("express");
const cors = require("cors");
require("dotenv").config();

const petRoutes = require("./src/routes/pet.route.js");

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API AdotePet funcionando 🚀");
});

// rotas
app.use("/pets", petRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
  console.log(`🐶 API Pets: http://localhost:${PORT}/pets`);
});