import type Pet from "../types/pet.ts";

interface Props {
  pets: Pet[];
  deletePet: (id: number) => void;
  setPetEditando: (pet: Pet) => void;
}

export default function ListaPets({
  pets,
  deletePet,
  setPetEditando
}: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Espécie</th>
          <th>Raça</th>
          <th>Idade</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <td>{pet.nome}</td>
            <td>{pet.especie}</td>
            <td>{pet.raca}</td>
            <td>{pet.idade}</td>
            <td>{pet.status}</td>

            <td>
              <button
                onClick={() =>
                  setPetEditando(pet)
                }
              >
                Editar
              </button>

              <button
                onClick={() =>
                  deletePet(pet.id)
                }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}