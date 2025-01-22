import { ClientsSection, DirectorsSection, Hero } from "./components";
import { CTA } from "../../layout/components";

export const About = () => {
  return (
    <>
      <Hero />
      <DirectorsSection />
      <ClientsSection />
      <CTA />
    </>
  );
};
