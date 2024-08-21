import { testimonials } from "@/constants/testimonials";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";

export default async function page() {
  return (
    <section className="!mx-0 max-container !max-w-none">
      <h1 className="head-text flex !font-normal items-center justify-center">
        Happy Colleagues 😎
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mt-10 relative gap-x-10 gap-y-14">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            testimonial={testimonial}
            key={index}
            lazyLoadProfileImg={index > 2}
          />
        ))}
      </div>
    </section>
  );
}
