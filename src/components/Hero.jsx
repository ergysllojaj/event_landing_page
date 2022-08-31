import React from "react";

export default function Hero() {
  return (
    <div className="text-white">
      <div className=" mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] text-7xl font-bold">JOIN OUR EVENT</p>
        <h1 className="text-xl mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <button className="mt-5 mx-auto bg-[#00df9a] hover:bg-[#01bb80] text-white font-bold w-[200px] py-3 rounded">
          JOIN NOW
        </button>
      </div>
    </div>
  );
}
