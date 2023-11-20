import CTA from "@/components/CTA";
import LinkWithLabel from "@/components/LinkWithLabel";
import ProjectScreenshotsSwiper from "@/components/project-screenshots-swiper/ProjectScreenshotsSwiper";
import { projects } from "@/constants";
import { Suspense } from "react";

export default async function page() {
  return (
    <Suspense>
      <section className="max-container xl:!px-0">
        {/* <div className='flex justify-center items-center '>
        <svg className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></svg>
      </div> */}
        

        {/* <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> */}
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Projects
          </span>
        </h1>

        <p className="text-slate-500 mt-2 leading-relaxed">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project, index) => (
            <div
              className="lg:w-full w-full flex gap-10 items-center relative flex-wrap"
              key={project.name}
            >
              <div
                className={`cursor-pointer mt-6 w-full lg:w-[65%] h-[19rem] sm:h-[30rem] overflow-hidden ${
                  index % 2 == 0 && "lg:order-2"
                }`}
              >
                <ProjectScreenshotsSwiper
                  project={project}
                  isPriority={index == 0}
                />
              </div>
              <div className=" flex flex-col w-full lg:w-[30%] px-6 lg:px-0">
                <h4 className="text-xl sm:text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-4 text-slate-500 whitespace-pre-line	">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project?.link && (
                    <LinkWithLabel label="Demo link" link={project.link} />
                  )}
                  {project.repoLink && (
                    <LinkWithLabel
                      label="Source Code"
                      link={project.repoLink}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </section>
    </Suspense>
  );
}