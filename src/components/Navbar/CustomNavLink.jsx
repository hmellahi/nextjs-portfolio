"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomNavLink({ href, children, isExternal }) {
  const pathname = usePathname();

  const isActive = pathname === href;
  const extraProps = [];

  if (isExternal) {
    extraProps["target"] = "_blank";
  }

  return (
    <Link
      href={href}
      className={`border-2  px-4 py-2 rounded-md text-sm font-semibold md:text-lg  text-primary-500 border-transparent shadow-md
       ${isActive && "bg-white"}
       ${pathname === "/" && "bg-white"}
       `}
      {...extraProps}
    >
      {children}
    </Link>
  );
}
