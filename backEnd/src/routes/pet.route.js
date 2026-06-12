const express = require("express");
const router = express.Router();

const {
  listarPets,
  criarPet,
  atualizarPet,
  deletarPet
} = require("../controllers/pet.controller.js");

router.get("/", listarPets);
router.post("/", criarPet);
router.put("/:id", atualizarPet);
router.delete("/:id", deletarPet);

module.exports = router;