"use client";

import { experiences } from "@/constants";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component/dist-modules";
import "react-vertical-timeline-component/style.min.css";

export default function ExperienceTimeline() {
  return (
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <VerticalTimelineElement
          key={experience.date}
          date={experience.date}
          visible={true}
          icon={
            <Image
              src={experience.icon}
              alt={experience.company_name}
              className="w-[100%] h-[100%] object-fit"
              loading="lazy"
              sizes="(min-width: 1180px) 60px, 40px"
            />
          }
          contentStyle={{
            borderBottom: "8px",
            borderStyle: "solid",
            borderBottomColor: experience.iconBg,
            boxShadow: "none",
          }}
          className="!rounded-none"
          iconClassName="!rounded-none"
        >
          <div>
            <h3 className="text-black text-xl font-poppins font-semibold">
              {experience.title}
            </h3>
            <p
              className="text-black-500 font-medium text-base"
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>

          <ul className="my-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-black-500/50 font-normal pl-1 text-sm"
              >
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
