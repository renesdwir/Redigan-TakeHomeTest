import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function NewNavbar() {
  const [isActive, setIsActive] = useState(true);
  const activeHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="text-white fixed top-0 left-0 right-0 z-10">
      <div className="px-5 container mx-auto lg:px-10 md:flex flex-row justify-between py-5">
        <div className="flex flex-row justify-between w-full">
          <div className="font-bold text-2xl my-auto italic cursor-pointer">
            HELMET.<span className="text-yellow-500">CO</span>
          </div>
          <div onClick={activeHandler} className="flex md:hidden">
            {isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
        <nav className="md:block my-auto font-semibold">
          <ul
            className={`flex flex-col md:flex-row text-right md:text-center md:translate-x-0 ${
              isActive ? "-translate-x-[55rem]" : ""
            } transition-all duration-200 md:text-center md:gap-10 my-3 md:my-0`}
          >
            <li className="py-2 md:py-0">
              <Link to="/" className="duration-200 hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                to="/suggestion"
                className="duration-200 hover:text-yellow-500"
              >
                Suggestion
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/" className="duration-200 hover:text-yellow-500">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
