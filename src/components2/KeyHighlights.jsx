/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Key from "./assets/keyhigh.png";

const KeyHighlights = () => {
  return (
    <div className="flex flex-col items-center mt-4 px-4">
      <h1 className="text-center text-4xl pt-8 pb-4 text-orange-500 font-semibold">
        Key Highlights
      </h1>

      <div className="flex w-full lg:justify-center">
        {/* Left half with image */}
        <div className="w-1/2 xs:hidden lg:block ">
          <img style={{scale:'0.75'}}src={Key} alt="Your Image" className="w-full h-[420px]" />
        </div>

        {/* Right half with points */}
        <div className="lg:w-1/2 xs:w-full">
          <div className="lg:pt-16 xs:pt-4 space-y-8 ">
            <p className=" flex  lg:text-2xl xs:text-lg items-center">
              <FaCheckCircle className="bg-white text-orange-500 mr-2 " />
              Interactive Live Sessions.
            </p>
            <p className=" flex  lg:text-2xl xs:text-lg items-center">
              <FaCheckCircle className="bg-white text-orange-500 mr-2 " />
              Live Practices Exposure.
            </p>
            <p className=" flex  lg:text-2xl xs:text-lg items-center">
              <FaCheckCircle className="bg-white lg:text-[25px] xs:text-[27px] text-orange-500 mr-2 " />
              Recordings are Provided with Lifetime Access.
            </p>
          </div>
          <div className="space-y-8 pt-8">
            <p className=" flex  lg:text-2xl xs:text-lg items-center ">
              <FaCheckCircle className="bg-white lg:text-[25px] xs:text-[28px] text-orange-500 mr-2 " />
              Hands-On experience with Tools and Techniques.
            </p>
            <p className=" flex  lg:text-2xl xs:text-lg items-center">
              <FaCheckCircle className="bg-white text-orange-500 mr-2 " />
              Get Certified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyHighlights;
