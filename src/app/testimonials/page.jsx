import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import { testimonials } from "@/constants/testimonials";
import Image from "next/image";

export default async function page() {
  return (
    <section className="!mx-0 max-container !max-w-none">
      <h1 className="head-text flex !font-normal items-center justify-center">
        Happy Colleagues
        {/* TODo change name & alt */}
        <Image
          className="draggable rounded-lg mb-2 ml-2 bg-gray-200 shadow-lg"
          src={"/assets/icons/bfR.gif"}
          alt="deadpool"
          width={60}
          height={60}
          draggable={false}
        />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-28 relative gap-x-10 gap-y-28">
        {testimonials.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
