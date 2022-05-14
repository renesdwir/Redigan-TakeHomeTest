import React from "react";
import HeroImage from "../assets/hero-image.jpg";

export default function HomePage() {
  return (
    <>
      <div className="h-screen">
        <img
          className="w-full h-full object-cover object-top"
          src={HeroImage}
          alt="HeroImage"
        />
        <div className="w-full h-screen bg-slate-900 absolute top-0 opacity-30"></div>
        <div className="text-center w-96 md:w-[50rem] absolute top-[56%] right-1/2 transform -translate-y-1/2 translate-x-1/2 mx-auto text-white">
          <h1 className="text-4xl font-bold mb-2 md:text-6xl">
            Know Your Helmet
          </h1>
          <p className="text-base md:text-xl">
            Find your perfect helmet today in{" "}
            <span className="font-bold italic">
              HELMET.<span className="text-yellow-500">CO</span>
            </span>
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 text-lg mt-8 duration-300">
            START NOW
          </button>
        </div>
      </div>
    </>
  );
}
