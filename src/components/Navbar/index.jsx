import { NavLink } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <div className="!bg-white p-2 rounded-lg font-poppins font-medium shadow-sm">
          <div className="blue-gradient_text ">
            H<span className="ml-1">M</span>
          </div>
        </div>
      </NavLink>
      <nav className="flex text-lg gap-3 md:gap-7 font-medium font-poppins">
        <CustomNavLink key='about' to='/about'>About</CustomNavLink>
        <CustomNavLink key='projects' to='/projects'>Projects</CustomNavLink>
      </nav>
    </header>
  );
};

export default Navbar;
