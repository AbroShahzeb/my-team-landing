import { FeatureList } from "./components";
import patternBackground from "../../../../assets/bg-pattern-home-3.svg";

export const Features = () => {
  return (
    <section className="relative bg-secondary-sacremento-state-green overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 translate-x-1/2 lg:bottom-0 lg:top-auto">
        <img src={patternBackground} alt="Background Pattern" />
      </div>

      <div className="px-6 py-16  relative z-10 md:px-[98px] md:py-[100px] lg:px-[165px] lg:py-[140px] xl:max-w-[1110px] xl:mx-auto xl:px-0">
        <div className="h-1 w-[50px] bg-primary-light-coral flex-shrink-0 mb-8 lg:mb-[54px] hidden xl:block"></div>

        <div className="flex flex-col gap-14 lg:flex-row lg:items-start  xl:gap-[125px]">
          {/* Heading */}
          <div>
            <div className="h-1 w-[50px] bg-primary-light-coral flex-shrink-0 mb-8 lg:mb-[54px] xl:hidden"></div>
            <h2 className="text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] font-bold text-primary-white max-w-[240px] md:max-w-[445px] xl:w-full">
              Build & manage distributed teams like no one else.
            </h2>
          </div>

          {/* Feature List */}
          <FeatureList />
        </div>
      </div>
    </section>
  );
};
