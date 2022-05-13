import React from "react";

export default function Navbar() {
  return (
    <header class="bg-slate-800 text-white">
      <div class="px-4 md:px-0 container mx-auto flex flex-row justify-between py-5">
        <div className="font-bold text-2xl my-auto italic cursor-pointer">
          HELMET.<span className="text-yellow-500">CO</span>
        </div>
        <nav class="hidden sm:block my-auto font-semibold">
          <ul class="flex flex-row gap-10 ">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
          </ul>
        </nav>
        <div class="sm:hidden flex flex-col gap-1 my-auto">
          <div class="w-6 bg-white h-[0.15rem]"></div>
          <div class="w-6 bg-white h-[0.15rem]"></div>
          <div class="w-6 bg-white h-[0.15rem]"></div>
        </div>
      </div>
    </header>
  );
}
