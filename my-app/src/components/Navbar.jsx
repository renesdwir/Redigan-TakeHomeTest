import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="bg-slate-800 text-white fixed top-0 left-0 right-0 z-10">
      <div className="px-4 md:px-0 container mx-auto 2xl:px-10 md:flex flex-row justify-between py-5">
        <div className="font-bold text-2xl my-auto italic cursor-pointer">
          HELMET.<span className="text-yellow-500">CO</span>
        </div>
        <nav className="sm:block my-auto font-semibold">
          <ul className="flex flex-col md:flex-row gap-3 text-center md:gap-10 my-3 md:my-0 ">
            <li>
              <Link to="/" className="duration-200 hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/suggestion"
                className="duration-200 hover:text-yellow-500"
              >
                Suggestion
              </Link>
            </li>
            <li>
              <Link to="/" className="duration-200 hover:text-yellow-500">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sm:hidden flex flex-col gap-1 my-auto">
          <div className="w-6 bg-white h-[0.15rem]"></div>
          <div className="w-6 bg-white h-[0.15rem]"></div>
          <div className="w-6 bg-white h-[0.15rem]"></div>
        </div>
      </div>
    </header>
  );
}
