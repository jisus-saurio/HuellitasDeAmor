import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useMascotaAction = (getMascotas) => {
  const navigate = useNavigate();

  // Eliminar mascota por id
  const deleteMascota = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      toast.success("Mascota eliminada correctamente");
      console.log("Mascota eliminada:", response);
      getMascotas();
    } catch (error) {
      console.error("Error eliminando mascota:", error);
      toast.error("No se pudo eliminar la mascota");
    } finally {
      getMascotas();
    }
  };

  // Redirigir para editar mascota
  const handleUpdateMascota = (id) => {
    navigate(`/mascotas/${id}`);
  };

  return {
    deleteMascota,
    handleUpdateMascota,
  };
};

export default useMascotaAction;