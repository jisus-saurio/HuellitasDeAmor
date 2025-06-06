import "../css/PetTable.css";
const PetTable = ({ pets, editPet, deletePet }) => {
  return (
    <table className="pet-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Raza</th>
          <th>Especie</th>
          <th>Propietario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <td>{pet.mascota}</td>
            <td>{pet.edad}</td>
            <td>{pet.raza}</td>
            <td>{pet.especie}</td>
            <td>{pet.propietario}</td>
            <td>
              <button
                className="edit-btn"
                type="button"
                onClick={() => editPet(pet.id)}
              >
                Editar
              </button>
              <button
                className="delete-btn"
                type="button"
                onClick={() => deletePet(pet.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PetTable;