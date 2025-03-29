"use client";
import Image from "next/image";
import Link from "next/link";

const talks = [
  {
    id: "0C010HLGVRc",
    title: "Frontend Engineering",
    description: "A talk about frontend engineering",
    date: "2024-03-29",
    duration: "3:20:00",
    url: "https://www.youtube.com/watch?v=0C010HLGVRc",
  },
];

export default function TalksPage() {
  const getThumbnailUrl = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <div className="!mx-0 max-container !max-w-none">
      <h1 className="head-text font-bold flex items-center justify-center">
        Talks
      </h1>

      <div
        className={`mt-10 ${
          talks.length === 1
            ? "flex justify-center"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }`}
      >
        {talks.map((talk) => (
          <div
            className={`${talks.length === 1 ? "max-w-2xl w-full" : ""}`}
            key={talk.id}
          >
            <Link
              href={talk.url}
              className="group hover:transform hover:scale-[1.02] transition-all duration-200 block"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src={getThumbnailUrl(talk.id)}
                    alt={talk.title}
                    fill
                    className="object-cover"
                    quality={100}
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {talk.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {talk.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {talk.description}
                  </p>
                  <time className="text-gray-500 text-sm">
                    {new Date(talk.date).toLocaleDateString()}
                  </time>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
