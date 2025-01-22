import logoTheVerge from "../../../../../../assets/logo-the-verge.png";
import logoJakartaPost from "../../../../../../assets/logo-jakarta-post.png";
import logoTheGuardian from "../../../../../../assets/logo-the-guardian.png";
import logoTechRadar from "../../../../../../assets/logo-tech-radar.png";
import logoGadgetsNow from "../../../../../../assets/logo-gadgets-now.png";

export const CompanyLogos = () => {
  return (
    <div className="flex flex-col items-center gap-[56px] md:flex-row md:justify-between">
      <div>
        <img
          src={logoTheVerge}
          alt="The Verge Logo"
          className="h-[25px] md:h-[17px] lg:h-[28px]"
        />
      </div>
      <div>
        <img
          src={logoJakartaPost}
          alt="Jakarta Post Logo"
          className="h-[20px] md:h-[14px] lg:h-[23px]"
        />
      </div>
      <div>
        <img
          src={logoTheGuardian}
          alt="The Guardian Logo"
          className="h-[25px]  md:h-[17px] lg:h-[28px]"
        />
      </div>
      <div>
        <img
          src={logoTechRadar}
          alt="Tech Radar Logo"
          className="h-[25px]  md:h-[17px] lg:h-[28px]"
        />
      </div>
      <div>
        <img
          src={logoGadgetsNow}
          alt="Gadgets Now Logo"
          className="h-[40px] md:h-[28px] lg:h-[45px]"
        />
      </div>
    </div>
  );
};
