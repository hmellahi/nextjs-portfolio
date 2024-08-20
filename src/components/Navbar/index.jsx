"use client";
import Link from "next/link";
import { useState } from "react";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import CustomNavLink from "./CustomNavLink";

const navRoutes = [
  { key: "about", href: "/about", label: "About" },
  { key: "projects", href: "/projects", label: "Projects" },
  { key: "testimonials", href: "/testimonials", label: "Testimonials" },
  {
    key: "blog",
    href: "https://blog.hmellahi.me/",
    label: "Blog",
    isExternal: true,
  },
  { key: "contact", href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header font-poppins z-20">
      <Link
        href="/"
        className="!bg-white p-2 rounded-lg font-poppins font-medium shadow-[inset_0_0px_4px_rgba(0,0,0,0.1)] z-50"
        onClick={() => setIsOpen(false)}
      >
        <div className="blue-gradient_text text-lg">
          H<span className="ml-1">M</span>
        </div>
      </Link>
      <nav className="hidden lg:flex text-lg gap-3 md:gap-7 font-medium font-poppins">
        {navRoutes.map((route) => (
          <CustomNavLink
            key={route.key}
            href={route.href}
            isExternal={!!route.isExternal}
          >
            {route.label}
          </CustomNavLink>
        ))}
      </nav>
      <MobileNavbar
        navRoutes={navRoutes}
        onOpenChange={setIsOpen}
        isOpen={isOpen}
      />
    </header>
  );
};

export default Navbar;
