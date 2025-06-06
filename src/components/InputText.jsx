const InputText = ({
  name,
  label,
  placeholder,
  type = "text",
  register,
  error
}) => {
  return (
    <div className="sm:col-span-3">
      <label htmlFor={name} className="block text-base font-semibold text-pink-600">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          {...register(name, { required: `${label} es requerido` })}
          placeholder={placeholder}
          type={type}
          className={`
            block w-full rounded-2xl border border-pink-200 px-4 py-2
            text-gray-900 placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-sky-300
            bg-white shadow-sm
          `}
        />
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default InputText;