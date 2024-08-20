import CTA from "@/components/CTA";
import { skills } from "@/constants";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import Skill from "./components/Skill";

const About = async () => {
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
        <p className="mb-2">
          Front-end Engineer based in Morocco 🇲🇦 <br /> Specializing in crafting
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
            <Skill skill={skill} />
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            My experience at Leyton and FileQA honed my skills, collaborating
            with talented teammates. Here's the rundown:
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
