import React from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swiper.css";

export default function ProjectScreenshotsSwiper({ project, isPriority }) {
  const { screenshots, screenshotsFolderRoot, name } = project;

  const imgProps = [];

  if (!isPriority) {
    imgProps.push({ loading: "lazy" });
  }

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      autoplay={{
        delay: 1300,
        disableOnInteraction: true,
      }}
    >
      {screenshots.map((screenshot, index) => (
        <SwiperSlide key={index}>
          <div className="rounded-lg w-full h-full  shadow-lg">
            <img
              alt={name}
              className="rounded-2xl w-full h-full border-6 p-2"
              src={`/assets/screenshots/${screenshotsFolderRoot}/${screenshot}`}
              {...imgProps}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
