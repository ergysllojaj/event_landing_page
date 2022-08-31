import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto text-center flex flex-col justify-center mx-auto py-16 px-4  bg-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REAL ESTATE.</h1>
      <p className="py-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam
        iste repellat consequatur libero reiciendis, blanditiis accusantium.
      </p>
      <button className="mt-5 mx-auto bg-[#00df9a] hover:bg-[#01bb80] text-white font-bold w-[200px] py-3 rounded">
        JOIN NOW
      </button>
      <div className="mx-auto flex  my-6">
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
      </div>
    </div>
  );
};

export default Footer;
