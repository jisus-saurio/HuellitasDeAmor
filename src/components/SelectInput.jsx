const SelectInput = ({ name, label, options, register, error }) => {
  return (
    <div className="sm:col-span-3">
      <label htmlFor={name} className="block text-base font-semibold text-pink-600">
        {label}
      </label>
      <select
        id={name}
        {...register(name, { required: `${label} es requerido` })}
        className={`
          mt-2 block w-full rounded-2xl border border-pink-200 px-4 py-2
          text-gray-900 bg-white shadow-sm
          focus:outline-none focus:ring-2 focus:ring-sky-300
        `}
      >
        <option value="">Selecciona</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default SelectInput;