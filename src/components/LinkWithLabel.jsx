import React from "react";
import { Link } from "react-router-dom";

export default function LinkWithLabel({ link, label }) {
  return (
    <div className="transition ease-in-out delay-150 mt-5 flex items-center gap-2 font-poppins border-transparent border-2 hover:text-blue-500 hover:border-blue-500 p-3 rounded-md hover:bg-white shadow-lg bg-blue-500 text-white cursor-pointer">
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold "
      >
        {label}
      </Link>

      {/* <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" /> */}
    </div>
  );
}
