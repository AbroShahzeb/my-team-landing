import patternBackground from "../../../../assets/bg-pattern-about-1-mobile-nav-1.svg";

export const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-primary-midnight-green">
      {/* Background Pattern */}
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 md:translate-y-0">
        <img src={patternBackground} alt="Background Pattern" />
      </div>

      {/* Hero Content */}
      <div className="px-8 pb-[108px] pt-20 flex flex-col items-center text-center gap-4 md:gap-6 text-white relative z-10 md:py-[112px] md:px-[156px] lg:flex-row lg:items-start lg:gap-[30px] lg:px-10 xl:max-w-[1110px] xl:mx-auto lg:py-[120px] xl:px-0 lg:justify-between">
        <h1 className="text-[40px] leading-[40px] md:text-[64px] md:leading-[56px] font-bold xl:w-[350px] xl:text-left">
          About
        </h1>
        <div>
          <div className="h-1 w-[50px] bg-primary-light-coral mb-10 hidden lg:block"></div>
          <p className="text-[15px] leading-[28px] font-semibold md:max-w-[457px] md:mx-auto lg:max-w-[730px] lg:text-left lg:text-b1">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>
    </header>
  );
};
