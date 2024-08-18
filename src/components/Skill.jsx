"use client";

import Image from "next/image";

export default function Skill({ skill }) {
  return (
    <div className="block-container w-20 h-20 cursor-pointer" key={skill.name}>
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
  );
}
