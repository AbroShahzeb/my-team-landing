export const Feature = ({ feature }) => {
  return (
    <div className="flex flex-col gap-4 items-center text-center md:flex-row md:gap-6 md:items-start xl:max-w-[540px]">
      <div className="flex-shrink-0">
        <img src={feature.icon} alt={`${feature.title} Icon`} />
      </div>
      <div className="flex flex-col gap-2 text-center items-center md:gap-4 md:items-start md:text-left">
        <h3 className="text-b1 font-bold text-primary-light-coral">
          {feature.title}
        </h3>
        <p className="text-primary-white/80 text-b2 font-semibold">
          {feature.description}
        </p>
      </div>
    </div>
  );
};
