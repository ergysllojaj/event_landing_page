import React from "react";
import businesspartners from "../assets/businesspartnersimg.jpg";

export default function AboutUs() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={businesspartners}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-left text-[#00df9a] font-bold ">
            WHO WE ARE
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga. Temporibus ad vel provident! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Quasi enim neque
            possimus, temporibus autem numquam velit, quo sunt dolore tempore,
            exercitationem ut earum error recusandae. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Laborum illo maxime doloremque
            consequuntur fuga voluptates in quisquam, amet fugiat dolorem
            corrupti quia voluptatibus laboriosam nihil suscipit.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
