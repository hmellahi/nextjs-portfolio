import Link from "next/link";
import React from "react";

export default function LinkWithLabel({ link, label }) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold transition ease-in-out delay-150 mt-5 flex items-center gap-2 font-poppins border-transparent border-2 hover:text-blue-500 hover:border-blue-500 p-3 rounded-md hover:bg-white shadow-lg bg-blue-500 text-white cursor-pointer"
    >
      {label}
    </Link>
  );
}
