import { useState } from "react";
import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import useDataMascota from "../hooks/mascotas/useDataMascota";
import { optionSelect } from "../utils/apiUrl";
import "../css/Mascotas.css";

const Mascotas = () => {
  const [showAlert, setShowAlert] = useState(false);

  const methods = useForm({
    mode: "onTouched",
  });
  const {
    register,
    handleSubmit,
    errors,
  } = useDataMascota(methods);

  // Validación personalizada para mostrar alerta general si hay campos vacíos
  const onSubmit = (data) => {
    if (
      !data.mascota ||
      !data.edad ||
      !data.raza ||
      !data.especie ||
      !data.propietario
    ) {
      setShowAlert(true);
      return;
    }
    // Si todo está bien, ejecuta el handleSubmit original del hook
    handleSubmit(data);
  };

  const closeAlert = () => setShowAlert(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Alerta general arriba del formulario */}
      {showAlert && (
        <div className="mb-6 flex items-center justify-between bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded animate-fade-in">
          <div>
            <span className="font-semibold">¡Debes llenar todos los campos!</span> Por favor completa todos los campos antes de guardar la mascota.
          </div>
          <button
            onClick={closeAlert}
            className="ml-4 px-3 py-1 rounded-full bg-red-200 hover:bg-red-300 text-red-800 font-bold transition"
          >
            X
          </button>
        </div>
      )}

      <div className="flex justify-end mb-4">
        <Link to="/home">
          <button
            type="button"
            className="btn-gradient px-6 py-2 rounded-full font-semibold text-white shadow hover:scale-105 transition-all"
          >
            Volver al inicio
          </button>
        </Link>
      </div>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg flex flex-col p-6 gap-6"
        style={{ border: "1px solid #f3f4f6" }}
      >
        <Titulo titulo="Información de Mascota" />

        <p className="mt-1 text-sm text-gray-600">
          Ingresa los datos de la mascota para agregarla al sistema.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex flex-col">
            <InputText
              type="text"
              name="mascota"
              label="Nombre de la Mascota"
              placeholder="Ej: Max"
              register={register}
              errors={errors}
              required
            />
            {errors.mascota && (
              <div className="rounded bg-red-100 border border-red-300 text-red-700 px-3 py-2 mt-1 text-sm animate-fade-in">
                <span className="font-semibold">¡Campo requerido!</span> El nombre es obligatorio
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <InputText
              type="number"
              name="edad"
              label="Edad"
              placeholder="Ej: 3"
              register={register}
              errors={errors}
              required
            />
            {errors.edad && (
              <div className="rounded bg-red-100 border border-red-300 text-red-700 px-3 py-2 mt-1 text-sm animate-fade-in">
                <span className="font-semibold">¡Campo requerido!</span> La edad es obligatoria
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <InputText
              type="text"
              name="raza"
              label="Raza"
              placeholder="Ej: Labrador"
              register={register}
              errors={errors}
              required
            />
            {errors.raza && (
              <div className="rounded bg-red-100 border border-red-300 text-red-700 px-3 py-2 mt-1 text-sm animate-fade-in">
                <span className="font-semibold">¡Campo requerido!</span> La raza es obligatoria
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="especie" className="mb-1 font-semibold text-pink-600">
              Especie
            </label>
            <SelectInput
              label=""
              options={optionSelect}
              register={register}
              errors={errors}
              name="especie"
              required
            />
            {errors.especie && (
              <div className="rounded bg-red-100 border border-red-300 text-red-700 px-3 py-2 mt-1 text-sm animate-fade-in">
                <span className="font-semibold">¡Campo requerido!</span> Selecciona una especie
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <InputText
              type="text"
              name="propietario"
              label="Propietario"
              placeholder="Nombre del propietario"
              register={register}
              errors={errors}
              required
            />
            {errors.propietario && (
              <div className="rounded bg-red-100 border border-red-300 text-red-700 px-3 py-2 mt-1 text-sm animate-fade-in">
                <span className="font-semibold">¡Campo requerido!</span> El propietario es obligatorio
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" text="Guardar Mascota" />
        </div>
      </form>
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.3s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-8px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default Mascotas;