import Image from "next/image";
import Link from "next/link";
import "./TestimonialCard.css";

export default function TestimonialCard({ testimonial }) {
  const { name, text, role, profileImg = "default.jpg", link } = testimonial;

  const profileImgUrl = `/assets/testimonials/${profileImg}`;

  return (
    <div className="glassIco rounded-3xl">
      <ProfileImage link={link} profileImgUrl={profileImgUrl} name={name} />
      <div className="p-6 mt-20">
        <h3 className="font-bold text-2xl mb-2 text-center">{name}</h3>
        <h2 className="text-md mb-2 text-center text-gray-400">{role}</h2>
        <div className="flex items-center justify-center">
          <Image
            className="text-center relative mb-7"
            src="/assets/icons/quote2.png"
            width={60}
            height={60}
            alt="quote"
          />
        </div>
        <p className="text-gray-700 text-lg whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
}

const ImageComponent = ({ src, alt, className }) => (
  <Image
    src={src}
    alt={alt}
    width={180}
    height={160}
    className={`rounded-full ${className}`}
  />
);

const ProfileImage = ({ link, profileImgUrl, name }) => {
  if (!profileImgUrl) return null;

  const imageComponent = (
    <ImageComponent
      src={profileImgUrl}
      alt={name}
      className="-mt-20 z-10 absolute right-[35%] p-4"
    />
  );

  return link ? (
    <Link target="_blank" href={link}>
      {imageComponent}
    </Link>
  ) : (
    imageComponent
  );
};
