import { CTA } from "../../layout/components";
import { Features, Hero } from "./components";
import { Testimonials } from "./components/testimonials";

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
};
