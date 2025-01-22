import avatarNikita from "../../../../../../assets/avatar-nikita.jpg";
import avatarChristian from "../../../../../../assets/avatar-christian.jpg";
import avatarCruz from "../../../../../../assets/avatar-cruz.jpg";
import avatarDrake from "../../../../../../assets/avatar-drake.jpg";
import avatarGriffin from "../../../../../../assets/avatar-griffin.jpg";
import avatarAden from "../../../../../../assets/avatar-aden.jpg";
import { DirectorCard } from "../directorCard";

const directorsData = [
  {
    id: 0,
    avatar: avatarNikita,
    name: "Nikita Marks",
    position: "Founder & CEO",
    quote:
      "“It always amazes me how much talent there is in every corner of the globe.”",
  },
  {
    id: 1,
    avatar: avatarChristian,
    name: "Cristian Duncan",
    position: "Co-founder & COO",
    quote:
      "“Distributed teams required unique processes. You need to approach work in a new way.”",
  },
  {
    id: 2,
    avatar: avatarCruz,
    name: "Cruz Hamer",
    position: "Co-founder & CTO",
    quote:
      " “Technology is at the forefront of enabling distributed teams. That's where we come in.”",
  },
  {
    id: 3,
    avatar: avatarDrake,
    name: "Drake Heaton",
    position: "Business Development Lead",
    quote:
      "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
  },
  {
    id: 4,
    avatar: avatarGriffin,
    name: "Griffin Wise",
    position: "Lead Marketing",
    quote:
      "“Unique perspectives shape unique products, which is what you need to survive these days.”",
  },
  {
    id: 5,
    avatar: avatarAden,
    name: "Aden Allan",
    position: "Head of Talent",
    quote:
      " “Empowered teams create truly amazing products. Set the north star and let them follow it.”",
  },
];

export const DirectorsList = () => {
  return (
    <div className="flex flex-col gap-[52px] md:grid md:grid-cols-[281px_281px] md:grid-rows-[253px_253px_253px] md:gap-x-[11px] md:gap-y-[76px] md:justify-center lg:grid-cols-[repeat(3,_1fr)] lg:grid-rows-[253px_253px] lg:gap-x-[30px] lg:gap-y-[76px] xl:max-w-[1110px] xl:mx-auto xl:px-0 xl:w-[1110px]">
      {directorsData.map((director) => (
        <DirectorCard director={director} key={director.id} />
      ))}
    </div>
  );
};
