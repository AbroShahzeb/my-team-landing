import iconQuotes from "../../../../../../assets/icon-quotes.svg";

export const Testimonial = ({ testimonial }) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 text-primary-white text-center items-center relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[34px]">
        <img src={iconQuotes} alt={"Quotes Icon"} />
      </div>

      <div className="text-b2 font-semibold relative">
        <p>{testimonial.testimonial}</p>
      </div>
      <div
        className="flex flex-col gap-4 items-center text-center lg:gap-8"
        style={{
          gap: testimonial.author === "Arthur Clarke" ? "43px" : "32px",
        }}
      >
        <div className="flex flex-col gap-[2px]">
          <h4 className="text-b1 font-bold text-secondary-reptaure-blue">
            {testimonial.author}
          </h4>
          <p className="text-[13px] leading-[18px] italic font-medium">
            {testimonial.position}
          </p>
        </div>
        <div>
          <img
            src={testimonial.avatar}
            alt={`${testimonial.author} avatar`}
            className="size-[64px] rounded-full border-2 border-[#C4FFFE]"
          />
        </div>
      </div>
    </div>
  );
};
