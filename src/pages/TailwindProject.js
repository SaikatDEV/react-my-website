import React from "react";
import asm from "../img/ASM-logo.jpg";
import apple from "../img/apple.svg";

const TailwindProject = () => {
  return (
    <>
      <div className="mt-40 ml-40 md:ml-20 sm:ml-10 sm:mt-64">
        <h2 className="font-thin text-white text-xl sm:text-lg">Card</h2>
        <div className="w-80 h-96 bg-slate-300 rounded-2xl mt-8 text-black p-4 flex flex-col justify-between border-4 border-white hover:border-green-600 sm:w-64 sm:h-80">
          <p className="text-sm font-bold">
            Subscribe to the daily.dev <br />
            <span>YouTube channel today</span>
          </p>
          <div className="flex justify-between">
            <img
              className="rounded-md h-32 w-32 sm:h-24 sm:w-24"
              src={asm}
              alt="ASM"
            />
            <img className="w-24 sm:w-16" src={apple} alt="Apple Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TailwindProject;
