import { useState } from "react";
import iconCross from "../../../../../../assets/icon-cross.svg";
import { IconTwitter } from "../../../../../../assets/svgIconComponents";
import { IconLinkedin } from "../../../../../../assets/svgIconComponents/IconLinkedin";

export const DirectorCard = ({ director }) => {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <div className="px-6 pt-8 pb-[56px] bg-secondary-sacremento-state-green flex flex-col gap-4 items-center text-center text-white relative min-h-[253px] max-h-[253px] lg:w-full">
      {detailOpen ? (
        <div>
          <div>
            <h4 className="text-b1 font-bold text-secondary-reptaure-blue">
              {director.name}
            </h4>
            <p className="text-b2 font-semibold mt-2 max-w-[234px] mx-auto">
              {director.quote}
            </p>
          </div>
          <div className="flex items-center gap-4 justify-center mt-6">
            <div className="hover:text-primary-light-coral">
              <IconTwitter />
            </div>
            <div className="hover:text-primary-light-coral">
              <IconLinkedin />
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div>
            <img
              src={director.avatar}
              alt={`${director.name} avatar`}
              className="size-[98px] rounded-full border-2 border-[#C4FFFE]"
            />
          </div>
          <div>
            <h4 className="text-b1 font-bold text-secondary-reptaure-blue">
              {director.name}
            </h4>
            <p className="text-b2 font-medium italic">{director.position}</p>
          </div>
        </>
      )}
      <button
        className={`size-[56px] rounded-full flex items-center justify-center absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 ${
          detailOpen ? "bg-secondary-reptaure-blue" : "bg-primary-light-coral "
        }`}
        onClick={() => setDetailOpen((prev) => !prev)}
      >
        <img
          src={iconCross}
          alt="Add Icon"
          className={`${detailOpen ? "rotate-45" : "rotate-0"}`}
        />
      </button>
    </div>
  );
};
