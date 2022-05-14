import React from "react";
import city from "../assets/city.jpg";
import travelling from "../assets/travelling.jpg";

export default function SuggestionPage() {
  return (
    <div className="max-h-screen">
      <div className="relative">
        <div className="max-h-screen flex flex-row relative">
          <div className="flex-1 max-h-screen">
            <img className="h-screen w-full object-cover" src={city} alt="" />
          </div>
          <div className="flex-1 max-h-screen">
            <img
              className="h-screen w-full object-cover object-center md:object-bottom"
              src={travelling}
              alt=""
            />
          </div>
          <div className="w-full h-screen bg-slate-900 absolute top-0 opacity-30"></div>
        </div>
        <div className="absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Are you a <span className="text-yellow-500 italic">city</span>{" "}
            person
          </h1>
          <h1 className="text-white text-2xl md:text-4xl font-semibold">or</h1>
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            <span className="text-yellow-500 italic">travelling</span> person ?
          </h1>
          <div className="mt-10 flex flex-row gap-5 justify-center text-white">
            <button className="w-28 uppercase py-2 hover:bg-yellow-500 shadow-sm  shadow-yellow-500 font-bold border-2 border-yellow-500">
              city
            </button>
            <button className="w-28 uppercase py-2 hover:bg-yellow-500 shadow-sm  shadow-yellow-500 font-bold border-2 border-yellow-500">
              traveling
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
