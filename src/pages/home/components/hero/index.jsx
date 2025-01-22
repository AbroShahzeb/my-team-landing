import bgPatternHero1 from "../../../../assets/bg-pattern-home-1.svg";
import bgPatternHero2 from "../../../../assets/bg-pattern-home-2.svg";
import bgPatternHero3 from "../../../../assets/bg-pattern-home-3.svg";

export const Hero = () => {
  return (
    <header className="px-6 pt-20 md:pt-[112px] lg:pt-[129px] relative min-h-[487px] md:min-h-[588px] lg:min-h-[579px]">
      {/* Background Pattern Mobile */}
      <div className="absolute left-0 right-0 bottom-0 md:left-1/2 md:-translate-x-1/2 lg:left-auto lg:right-[165px] lg:translate-x-0">
        <img src={bgPatternHero2} alt="Background Pattern" />
      </div>

      {/* Background Pattern Desktop */}
      <div className="hidden lg:block absolute left-0 -translate-x-1/2 top-1/2 -translate-y-[calc(50%+121px)]">
        <img src={bgPatternHero1} alt="Background Pattern" />
      </div>

      <div className="flex flex-col gap-[18px] md:gap-6 text-center text-primary-white lg:flex-row lg:text-left lg:justify-between xl:max-w-[1110px] xl:mx-auto lg:gap-[30px] relative z-10">
        <h1 className="text-[40px] leading-[40px] md:text-[64px] md:leading-[56px] font-bold md:max-w-[350px] md:mx-auto xl:mx-0 xl:text-[100px] xl:leading-[100px] lg:max-w-full xl:max-w-[635px] xl:pr-[100px]">
          Find the best <span className="text-primary-light-coral">talent</span>
        </h1>
        <p className="text-[15px] leading-[28px] font-semibold md:max-w-[547px] md:mx-auto xl:mx-0 xl:max-w-[445px] lg:text-b1 xl:flex-1">
          <div className="hidden h-1 w-[50px] lg:flex shrink-0 bg-secondary-reptaure-blue mb-[79px]"></div>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
    </header>
  );
};
