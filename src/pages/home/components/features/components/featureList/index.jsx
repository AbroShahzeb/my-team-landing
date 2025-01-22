import iconPerson from "../../../../../../assets/icon-person.svg";
import iconCog from "../../../../../../assets/icon-cog.svg";
import iconChart from "../../../../../../assets/icon-chart.svg";
import { Feature } from "../feature";

const features = [
  {
    id: 0,
    icon: iconPerson,
    title: "Experienced Individuals",
    description:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },
  {
    id: 1,
    icon: iconCog,
    title: "Easy to Implement",
    description:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    id: 2,
    icon: iconChart,
    title: "Enhanced Productivity",
    description:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];

export const FeatureList = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-8">
      {features.map((feature) => (
        <Feature feature={feature} key={feature.id} />
      ))}
    </div>
  );
};
