"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomNavLink({ href, children }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`border-2  border-white px-2 py-2 rounded-md shadow-lg text-sm md:text-lg 
      ${pathname !== "/" && "!text-blue-500 "}
       ${!isActive ? "text-white border-blue-500" : "text-blue-500 bg-white"}`}
    >
      {children}
    </Link>
  );
}
