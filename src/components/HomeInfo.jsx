import arrow from "@@/assets/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Hamza Mellahi</span>
        👋
        <br />A Front-end Developer from Morocco 🇲🇦
      </h1>
    );
  else if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          I've worked on many projects, acquiring many skills.
        </p>

        <Link href="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <Image src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  } else if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Worked on many projects. Want to know more about them?
        </p>

        <Link href="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <Image src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link href="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <Image src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
};

export default HomeInfo;
