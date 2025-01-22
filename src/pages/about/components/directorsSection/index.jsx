import { DirectorsList } from "./components";
3;
import bgPattern1 from "../../../../assets/bg-pattern-about-2-contact-1.svg";
import bgPattern2 from "../../../../assets/bg-pattern-home-4-about-3.svg";

export const DirectorsSection = () => {
  return (
    <section className="px-6 pt-[88px] pb-[116px] relative overflow-hidden bg-secondary-deep-jungle-green">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <img src={bgPattern1} alt="Background Pattern 1" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={bgPattern2} alt="Background Pattern 2" />
      </div>

      <div className="relative z-10 flex flex-col gap-12 lg:gap-16">
        {/* Heading */}
        <div>
          <h2 className="text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] font-bold text-primary-white text-center">
            Meet the directors
          </h2>
        </div>

        {/* Directors List */}
        <DirectorsList />
      </div>
    </section>
  );
};
