const prisma = require("../data/prisma.js");

async function listarPets(req, res) {
  const pets = await prisma.pet.findMany();
  res.json(pets);
}

async function criarPet(req, res) {
  const pet = await prisma.pet.create({
    data: req.body,
  });
  res.json(pet);
}

async function atualizarPet(req, res) {
  const { id } = req.params;

  const pet = await prisma.pet.update({
    where: { id: Number(id) },
    data: req.body,
  });

  res.json(pet);
}

async function deletarPet(req, res) {
  const { id } = req.params;

  await prisma.pet.delete({
    where: { id: Number(id) },
  });

  res.json({ message: "Pet deletado com sucesso" });
}

module.exports = {
  listarPets,
  criarPet,
  atualizarPet,
  deletarPet,
};