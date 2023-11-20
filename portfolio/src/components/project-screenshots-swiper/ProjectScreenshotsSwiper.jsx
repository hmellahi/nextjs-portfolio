"use client";

import { useEffect, useRef, useState } from "react";
import { Autoplay, EffectCards } from "swiper/modules";

import "./swiper-styles.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-cards";

import Image from "next/image";
import "./swiper.css";

export default function ProjectScreenshotsSwiper({ project, isPriority }) {
  const { screenshots, screenshotsFolderRoot, name } = project;
  const [swiperInstance, setSwiperInstance] = useState(null);
  const swiperContainerRef = useRef(null);

  const imgProps = [];

  if (!isPriority) {
    imgProps.push({ loading: "lazy" });
  }

  // Intersection Observer setup
  useEffect(() => {
    const swiperContainer = swiperContainerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          swiperInstance && swiperInstance.autoplay?.start();
        } else {
          swiperInstance && swiperInstance.autoplay?.stop();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust as needed
      }
    );

    if (swiperContainer) {
      observer.observe(swiperContainer);
    }

    return () => {
      observer.disconnect();
    };
  }, [swiperInstance]);

  return (
    <div ref={  } className="swiper-container h-full">
      <Swiper
        onSwiper={setSwiperInstance}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 1300,
          disableOnInteraction: true,
        }}
      >
        {screenshots.map((screenshot, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg w-full h-full shadow-lg card">
              <Image
                alt={name}
                className="rounded-2xl w-full h-full !border-0 p-2"
                src={`/assets/screenshots/${screenshotsFolderRoot}/${screenshot}`}
                fill
                priority={isPriority}
                // sizes="(min-width: 1300px) 583px, (min-width: 1040px) 508px, (min-width: 640px) calc(90vw - 131px), (min-width: 540px) calc(90vw - 74px), (min-width: 400px) calc(105vw - 152px), calc(90vw - 74px)"
                {...imgProps}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
