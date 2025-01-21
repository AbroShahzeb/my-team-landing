export const Button = ({
  label = "",
  className = "",
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
}) => {
  const variants = {
    primary:
      "px-8 py-3 h-12 rounded-[24px] border-2 border-primary-white text-primary-white flex items-center justify-center text-h3 font-semibold hover:bg-primary-white hover:text-secondary-dark-green disabled:opacity-25 transition-all",
    primaryOnLight:
      "px-8 py-3 h-12 rounded-[24px] border-2 border-secondary-sacremento-state-green text-secondary-sacremento-state-green flex items-center justify-center text-h3 font-semibold hover:bg-secondary-sacremento-state-green hover:text-primary-white disabled:opacity-25 transition-all",
    secondary:
      "px-8 py-3 h-12 rounded-[24px]  text-secondary-dark-green bg-primary-white flex items-center justify-center text-h3 font-semibold hover:bg-secondary-reptaure-blue disabled:opacity-25 transition-all",
  };
  return (
    <button
      className={`${variants[variant]} ${className}`}
      onClick={() => onClick && onClick()}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};
