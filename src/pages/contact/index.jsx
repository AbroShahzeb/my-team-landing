import patternBackground1 from "../../assets/bg-pattern-contact-2.svg";
import patternBackground2 from "../../assets/bg-pattern-about-2-contact-1.svg";
import { ContactFeatures, ContactForm } from "./components";

export const Contact = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 md:translate-y-0">
        <img src={patternBackground1} alt="Background Pattern" />
      </div>

      <div className="hidden md:block absolute  top-[112px] left-0  -translate-x-1/2">
        <img src={patternBackground2} alt="Background Pattern" />
      </div>

      <div className="px-6 pt-20 pb-[88px] md:py-[112px] lg:py-[120px] flex flex-col gap-[56px] md:gap-16 lg:flex-row lg:items-center lg:gap-8 relative z-10 xl:max-w-[1110px] xl:mx-auto xl:px-0">
        <ContactFeatures />
        <ContactForm />
      </div>
    </section>
  );
};
