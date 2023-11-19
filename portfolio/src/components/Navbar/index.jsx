import Link from "next/link";
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
  return (
    <header className="header">
      <Link href="/">
        <div className="!bg-white p-2 rounded-lg font-poppins font-medium shadow-sm">
          <div className="blue-gradient_text ">
            H<span className="ml-1">M</span>
          </div>
        </div>
      </Link>
      <nav className="flex text-lg gap-3 md:gap-7 font-medium font-poppins">
        <CustomNavLink key="about" href="/about">
          About
        </CustomNavLink>
        <CustomNavLink key="projects" href="/projects">
          Projects
        </CustomNavLink>
      </nav>
    </header>
  );
};

export default Navbar;
