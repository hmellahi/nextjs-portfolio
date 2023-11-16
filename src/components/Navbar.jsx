import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        {/* <img
          width="48"
          height="48"
          src={logo}
          alt="logo"
          className="w-18 h-18 object-contain"
        /> */}
        <div className="!bg-white p-2 rounded-lg font-poppins font-medium shadow-sm">
          <div className="blue-gradient_text ">H<span className="ml-1">M</span></div>
        </div>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
