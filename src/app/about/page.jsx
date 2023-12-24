import CTA from "@/components/CTA";
import ExperienceTimeline from "@/components/ExperienceTimeline/ExperienceTimeline";
import Image from "next/image";
import { skills } from "@/constants";

const About = async() => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Hamza
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Front End Developer based in Morocco 🇲🇦, specializing in crafting
          engaging interfaces and optimizing web performance.
        </p>
        <video className="rounded-lg my-2 w-full shadow-xl" autoPlay loop muted>
          <source src="/assets/videos/nerd.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-12 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div
              className="block-container w-20 h-20 cursor-pointer"
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  loading="lazy"
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            My experience at Leyton and FileQA honed my skills, collaborating
            with talented individuals. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <ExperienceTimeline />
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
