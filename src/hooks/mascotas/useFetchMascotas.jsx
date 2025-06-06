import { useEffect, useState } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";

const useFetchMascotas = () => {
  const [mascotas, setMascotas] = useState([]);

  const getMascotas = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener las mascotas");
      }
      const data = await response.json();
      setMascotas(data);
    } catch (error) {
      console.error("Error al obtener mascotas:", error);
      toast.error("Error al obtener mascotas");
    }
  };

  // Obtener una mascota por su id
  const getMascotaById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        console.log("No se pudo obtener la mascota");
        throw new Error("No se pudo obtener la mascota");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener mascota:", error);
      return null;
    }
  };

  useEffect(() => {
    getMascotas();
  }, []);

  return {
    mascotas,
    getMascotaById,
    getMascotas
  };
};

export default useFetchMascotas;