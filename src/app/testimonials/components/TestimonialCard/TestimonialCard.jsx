import Image from "next/image";
import Link from "next/link";
import "./TestimonialCard.css";

export default function TestimonialCard({ testimonial }) {
  const { name, text, role, profileImg = "default.jpg", link } = testimonial;

  const profileImgUrl = `/assets/testimonials/${profileImg}`;

  return (
    <div className="testimonial-wrapper relative">
      <ProfileImage link={link} profileImgUrl={profileImgUrl} name={name} />
      <div className="glassIco rounded-3xl relative overflow-hidden shadow-lg">
        <div className="p-10 mt-20">
          <h2 className="font-bold text-2xl mb-2 text-center">{name}</h2>
          <h3 className="text-md mb-2 text-center text-gray-400">{role}</h3>
          <div className="flex items-center justify-center">
            <Image
              className="text-center relative mb-7"
              src="/assets/icons/quote.png"
              width={60}
              height={60}
              alt="quote"
            />
          </div>
          <p className="text-gray-700 text-lg whitespace-pre-line">{text}</p>
        </div>
      </div>
    </div>
  );
}

const ProfileImage = ({ link, profileImgUrl, name }) => {
  if (!profileImgUrl) return null;

  const imageComponent = (
    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <Image
        alt={`${name}'s profile picture`}
        src={profileImgUrl}
        width={160}
        height={160}
        className="rounded-full shadow-xl"
      />
    </div>
  );

  return link ? (
    <Link
      target="_blank"
      href={link}
      rel="noopener"
      aria-label={`Link to ${name}'s profile`}
    >
      {imageComponent}
    </Link>
  ) : (
    imageComponent
  );
};
