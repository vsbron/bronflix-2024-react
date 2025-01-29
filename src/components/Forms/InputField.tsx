function InputField({ name, label, register, errors }: any) {
  // Returned JSX
  return (
    <div className="flex flex-col items-start">
      <div className="flex gap-4 mb-2">
        <label htmlFor={name}>{label}</label>
        {errors[name] && (
          <span className="text-red-300">({errors[name].message})</span>
        )}
      </div>
      <input
        id={name}
        className="h-16 text-3xl px-4 py-2 bg-stone-950 border border-red-900 rounded-md outline-none"
        {...register(name)}
      />
    </div>
  );
}

export default InputField;
