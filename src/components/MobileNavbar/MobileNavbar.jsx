"use client";

import { cn } from "@/helpers/cn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../Button";
import MenuToggle from "../MenuToggle/MenuToggle";
import SocialLinks from "./SocialLinks";

export default function MobileNavbar({ navRoutes }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const isCurrentRoute = (routeLink) => routeLink === pathname;

  const handleResize = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("w-full");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleNavbar}
        className="p-2 bg-primary-500 rounded-xl focus:outline-none block md:hidden z-50"
      >
        <MenuToggle open={isOpen} />
      </button>
      {(
        <div className="block md:hidden">
          <nav
            className={cn([
              "z-[40] fixed top-0 right-0 w-full h-full bg-white py-20 transform flex justify-center transition-transform duration-700 ease-in-out",
              isOpen ? "translate-x-0" : "translate-x-full",
            ])}
          >
            <ul className="space-y-4 text-3xl font-bold text-[#1a1a1a] flex justify-center items-center flex-col gap-4">
              {navRoutes.map((route) => (
                <li
                  key={route.key}
                  onClick={toggleNavbar}
                  className={cn([
                    "border-b-4 pb-1 border-transparent hover:border-b-primary-500 duration-300",
                    isCurrentRoute(route.href) && "border-b-primary-500",
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
            <SocialLinks />
          </nav>
        </div>
      )}
    </>
  );
}
