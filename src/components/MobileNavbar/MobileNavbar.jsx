"use client";

import { cn } from "@/helpers/cn";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Button from "../Button";
import MenuToggle from "../MenuToggle/MenuToggle";
import "./MobileNavbar.css";
import SocialLinks from "./SocialLinks";

export default function MobileNavbar({ navRoutes, onOpenChange, isOpen }) {
  const pathname = usePathname();

  const toggleNavbar = () => {
    onOpenChange(!isOpen);
  };

  const isCurrentRoute = (routeLink) => routeLink === pathname;

  const closeNavbar = () => {
    onOpenChange(false);
  };

  useEffect(() => {
    window.addEventListener("resize", closeNavbar);
    window.addEventListener("scroll", closeNavbar);

    return () => {
      window.removeEventListener("resize", closeNavbar);
      window.removeEventListener("scroll", closeNavbar);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleNavbar}
        className="p-2 bg-primary-500 rounded-lg focus:outline-none block lg:hidden shadow-inner ml-auto z-50"
      >
        <MenuToggle open={isOpen} />
      </button>
      <nav
        className={cn([
          "z-[40] fixed top-0 right-0 w-full h-full bg-white py-20 transform flex justify-center transition-transform duration-700 ease-in-out ",
          isOpen ? "translate-x-0" : "translate-x-full",
        ])}
      >
        <ul className="space-y-4 text-3xl font-bold text-[#1a1a1a] flex justify-center items-center flex-col gap-2">
          {navRoutes.map((route) => (
            <li
              key={route.key}
              onClick={toggleNavbar}
              className={cn([
                "border-animation relative",
                isCurrentRoute(route.href) && "text-primary-500",
              ])}
            >
              <Button
                link={route.href}
                isExternal={!!route.isExternal}
                label={route.label}
                unstyled={true}
              />
            </li>
          ))}
        </ul>
        <SocialLinks className="absolute bottom-10 left-1/2 transform -translate-x-1/2 justify-center items-center" />
      </nav>
    </>
  );
}
