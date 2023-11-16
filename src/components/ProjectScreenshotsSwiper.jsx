import React from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swiper.css";

export default function ProjectScreenshotsSwiper({ project }) {
  const { screenshots, screenshotsFolderRoot, name } = project;

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
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      slideShadows={true}
    >
      {screenshots.map((screenshot) => (
        <SwiperSlide>
          <div className="rounded-lg w-full h-full  shadow-lg">
            <img
              alt={name}
              className="rounded-2xl w-full h-full border-6 p-2"
              src={`/assets/screenshots/${screenshotsFolderRoot}/${screenshot}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
