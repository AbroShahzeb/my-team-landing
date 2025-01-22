import bgPattern from "../../../../assets/bg-pattern-about-4.svg";
import { CompanyLogos } from "./components";

export const ClientsSection = () => {
  return (
    <section className="px-6 py-[88px] md:px-10 lg:py-[140px] md:py-[100px] xl:px-0 relative overflow-hidden bg-secondary-sacremento-state-green">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 lg:translate-y-0">
        <img src={bgPattern} alt="Background Pattern" />
      </div>

      <div className="relative z-10 flex flex-col gap-16 md:gap-12 xl:max-w-[1110px] xl:mx-auto">
        {/* Heading */}
        <div>
          <h2 className="text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] font-bold text-primary-white text-center">
            Some of our clients
          </h2>
        </div>

        {/* Company Logos */}
        <CompanyLogos />
      </div>
    </section>
  );
};
