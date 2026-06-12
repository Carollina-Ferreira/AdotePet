const API_URL = "http://localhost:3001";

export async function listarPets() {
  const res = await fetch(`${API_URL}/pets`);
  return res.json();
}

export async function criarPet(pet: any) {
  const res = await fetch(`${API_URL}/pets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pet)
  });
  return res.json();
}

export async function atualizarPet(id: number, pet: any) {
  const res = await fetch(`${API_URL}/pets/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pet)
  });
  return res.json();
}

export async function deletarPet(id: number) {
  await fetch(`${API_URL}/pets/${id}`, {
    method: "DELETE"
  });
}