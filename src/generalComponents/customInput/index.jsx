export const CustomInput = ({
  label = "",
  className = "",
  register,
  name,
  type = "text",
  validationRules,
  error = "",
  placeholder = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-primary-white text-h3 font-semibold">
        {label}
      </label>
      <input
        className={`h-[42px] text-b2 focus:outline-none pb-[17px] px-[14px]  border-b    font-semibold bg-transparent ${
          error
            ? "border-[#F67E7E] text-[#F67E7E] placeholder:text-[#F67E7E]/60"
            : "border-primary-white text-primary-white placeholder:text-primary-white/60"
        }`}
        type={type}
        {...register(name, validationRules)}
        placeholder={placeholder}
      />
      {error && (
        <span className="text-[#F67E7E] text-[10px] leading-normal font-bold italic ml-2 mt-[6px]">
          {error}
        </span>
      )}
    </div>
  );
};
