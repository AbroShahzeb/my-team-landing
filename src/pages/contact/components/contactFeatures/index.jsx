import iconPerson from "../../../../assets/icon-person.svg";
import iconCog from "../../../../assets/icon-cog.svg";
import iconChart from "../../../../assets/icon-chart.svg";

export const ContactFeatures = () => {
  return (
    <div className="flex flex-col gap-10 items-center lg:items-start text-primary-white md:max-w-[515px] md:mx-auto lg:flex-1 lg:gap-8">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-start gap-4 md:gap-6  font-bold">
        <h2 className="text-[40px] leading-[40px] md:text-[64px] md:leading-[56px] lg:leading-[100px] lg:gap-4">
          Contact
        </h2>
        <h3 className="text-[32px] leading-[48px] text-primary-light-coral">
          Ask us about
        </h3>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6 md:gap-2 lg:gap-6">
          <div className="flex-shrink-0">
            <img src={iconPerson} alt="Person Icon" />
          </div>
          <p className="text-b1 font-bold">The quality of our talent network</p>
        </div>
        <div className="flex items-center gap-6 md:gap-2 lg:gap-6">
          <div className="flex-shrink-0">
            <img src={iconCog} alt="Cog Icon" />
          </div>
          <p className="text-b1 font-bold">
            Usage & implementation of our software
          </p>
        </div>
        <div className="flex items-center gap-6 md:gap-2 lg:gap-6">
          <div className="flex-shrink-0">
            <img src={iconChart} alt="Chart Icon" />
          </div>
          <p className="text-b1 font-bold">How we help drive innovation</p>
        </div>
      </div>
    </div>
  );
};
