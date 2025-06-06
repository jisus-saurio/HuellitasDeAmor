import { useEffect } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetchMascotas from "../mascotas/useFetchMascotas"; // Usa el hook correcto

const useDataMascota = (methods) => {
  const { getMascotaById, getMascotas } = useFetchMascotas(); // Usa los nombres correctos
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const navigate = useNavigate();

  // Guardar mascota
  const saveMascotaForm = async (dataForm) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("No se pudo agregar la mascota");
        throw new Error("No se pudo agregar la mascota");
      }
      toast.success("Mascota guardada correctamente");
      navigate("/home");
    } catch (error) {
      console.log("Error al enviar:", error);
    } finally {
      reset();
      getMascotas();
    }
  };

  // Editar mascota
  const editMascota = async (dataForm) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("No se pudo actualizar la mascota");
        throw new Error("No se pudo actualizar la mascota");
      }
      toast.success("Mascota actualizada correctamente");
      navigate("/home");
    } catch (error) {
      console.error("Error actualizando mascota:", error);
      toast.error("No se pudo actualizar la mascota");
    } finally {
      reset();
      getMascotas();
    }
  };

  // Decide si guardar o editar
  const handleMascotaAction = (dataForm) => {
    if (id) {
      editMascota(dataForm);
    } else {
      saveMascotaForm(dataForm);
    }
  };

  // Redirigir para editar
  const handleUpdateMascota = (id) => {
    navigate(`/mascotas/${id}`);
  };

  // Cargar datos de mascota por id
  const loadMascota = async () => {
    if (id) {
      const mascota = await getMascotaById(id);
      if (mascota) {
        reset({
          edad: mascota?.edad,
          raza: mascota?.raza,
          especie: mascota?.especie,
          mascota: mascota?.mascota,
          propietario: mascota?.propietario,
        });
      }
    }
  };

  useEffect(() => {
    loadMascota();
    // eslint-disable-next-line
  }, [id]);

  return {
    register,
    handleSubmit: handleSubmit(handleMascotaAction),
    errors,
    getMascotaById,
    handleUpdateMascota,
    loadMascota,
  };
};

export default useDataMascota;