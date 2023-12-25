"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomNavLink({ href, children }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`border-2  px-2 py-2 rounded-md text-sm md:text-lg 
      ${pathname !== "/" ? "!text-blue-500 border-transparent" : "border-white"}
       ${!isActive ? "text-white" : "text-blue-500 bg-white"}`}
    >
      {children}
    </Link>
  );
}
