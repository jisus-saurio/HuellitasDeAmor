import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import useFetchMascotas from "../hooks/mascotas/useFetchMascotas";
import useMascotaAction from "../hooks/mascotas/useMascotaAction";
import { optionSelect } from "../utils/apiUrl";
import "../css/Home.css";
import "../css/PetTable.css"; // Asegúrate de importar el CSS de la tabla

const Home = () => {
  const { mascotas, getMascotas } = useFetchMascotas();
  const { deleteMascota, handleUpdateMascota } = useMascotaAction(getMascotas);

  return (
    <div className="home-container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Titulo titulo="Mascotas en Adopción" />

      <p className="mt-1 text-sm text-gray-600 mb-4">
        Lista de mascotas registradas para adopción.
      </p>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 mt-8">
        <div className="overflow-x-auto w-full">
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
              {mascotas?.map((mascota) => (
                <tr key={mascota.id}>
                  <td>{mascota.mascota}</td>
                  <td>{mascota.edad}</td>
                  <td>{mascota.raza}</td>
                  <td>
                    {optionSelect.find((opt) => opt.value === mascota.especie)?.label || mascota.especie}
                  </td>
                  <td>{mascota.propietario}</td>
                  <td>
                    <button
                      className="edit-btn"
                      type="button"
                      onClick={() => handleUpdateMascota(mascota.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="delete-btn"
                      type="button"
                      onClick={() => deleteMascota(mascota.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-8">
          <Link to="/mascotas">
            <button
              className="btn-gradient px-6 py-2 rounded-full font-semibold text-white shadow hover:scale-105 transition-all"
              type="button"
            >
              + Agregar mascota
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;