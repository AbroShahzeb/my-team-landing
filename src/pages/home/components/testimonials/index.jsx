import patternBackground1 from "../../../../assets/bg-pattern-home-4-about-3.svg";
import patternBackground2 from "../../../../assets/bg-pattern-home-5.svg";
import { TestimonalList } from "./components";

export const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-secondary-deep-jungle-green">
      {/* Background Pattern 1 */}
      <div className="absolute top-0 left-0 ">
        <img src={patternBackground1} alt="Background Pattern 1" />
      </div>

      {/* Background Pattern 2 */}
      <div className="absolute right-0 bottom-0">
        <img src={patternBackground2} alt="Background Pattern 2" />
      </div>

      <div className="px-6 pt-[140px] pb-[164px] md:px-[98px] md:py-[100px] xl:max-w-[1110px] xl:mx-auto xl:px-0 xl:py-[140px] relative z-10 flex flex-col gap-[84px] lg:gap-[92px]">
        {/* Heading */}
        <div>
          <h2 className="text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] font-bold text-primary-white text-center lg:max-w-[932px] lg:mx-auto">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-secondary-reptaure-blue">
              success stories.
            </span>
          </h2>
        </div>

        {/* Testimonial List */}
        <TestimonalList />
      </div>
    </section>
  );
};
