import { Link } from "react-router-dom";
import { Button } from "../../../generalComponents";
import patternBackground from "../../../assets/bg-pattern-home-6-about-5.svg";

export const CTA = () => {
  return (
    <section className="bg-primary-light-coral relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute left-0 bottom-0">
        <img src={patternBackground} alt="Background Pattern" />
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:gap-[84px] gap-6 items-center text-center relative z-10 px-6 py-[83px] md:px-[98px] md:py-[76px] lg:max-w-[917px] lg:mx-auto lg:px-0">
        <h2 className="text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] font-bold text-secondary-sacremento-state-green max-w-[327px] md:max-w-full">
          Ready to get started?
        </h2>
        <Link to="/contact">
          <Button label="contact us" variant="primaryOnLight" />
        </Link>
      </div>
    </section>
  );
};
