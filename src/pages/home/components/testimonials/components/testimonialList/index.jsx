import avatarKady from "../../../../../../assets/avatar-kady.jpg";
import avatarAiysha from "../../../../../../assets/avatar-aiysha.jpg";
import avatarArthur from "../../../../../../assets/avatar-arthur.jpg";
import { Testimonial } from "../testimonial";

const testimonials = [
  {
    id: 0,
    testimonial:
      "  “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    author: "Kady Baker",
    position: "Product Manager at Bookmark",
    avatar: avatarKady,
  },
  {
    id: 1,
    testimonial:
      " “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    author: "Aiysha Reese",
    position: "Founder of Manage",
    avatar: avatarAiysha,
  },
  {
    id: 2,
    testimonial:
      "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    author: "Arthur Clarke",
    position: "Co-founder of MyFit",
    avatar: avatarArthur,
  },
];

export const TestimonalList = () => {
  return (
    <div className="flex flex-col gap-[84px] lg:flex-row lg:gap-[30px]">
      {testimonials.map((testimonial) => (
        <Testimonial testimonial={testimonial} key={testimonial.id} />
      ))}
    </div>
  );
};
