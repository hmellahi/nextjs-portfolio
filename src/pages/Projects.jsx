import { CTA } from "../components";
import LinkWithLabel from "../components/LinkWithLabel";
import ProjectScreenshotsSwiper from "../components/ProjectScreenshotsSwiper";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="max-container lg:!px-0">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div
            className="lg:w-full w-full flex gap-10 items-center relative flex-wrap "
            key={project.name}
          >
            <div
              className={`cursor-pointer mt-6 w-full md:w-[65%] h-[30rem] overflow-hidden ${
                index % 2 == 0 && "md:order-2"
              }`}
            >
              <ProjectScreenshotsSwiper project={project} />
            </div>
            <div className="mt-5 flex flex-col w-full md:w-[30%] ">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-4 text-slate-500 ">{project.description}</p>
              <div className="flex gap-4">
                {project?.link && (
                  <LinkWithLabel label="Demo link" link={project.link} />
                )}
                {project.repoLink && (
                  <LinkWithLabel label="Source Code" link={project.repoLink} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
