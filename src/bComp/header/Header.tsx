import React from "react";
import ladyLaptop from "../images/header image.png";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <div>
      <div className="h-[631.01px] w-screen relative">
        <img
          src={ladyLaptop}
          alt=""
          loading="lazy"
          className="h-[631.01px] w-screen absolute"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
      </div>
      <img
        src={logo}
        loading="lazy"
        alt=""
        className="absolute top-10 left-32 w-20 h-20"
      />
      <div className="w-[632px] h-[224px] top-[236px] left-[120px] absolute">
        <p className="text-white font-black text-5xl leading-[52px] font-sans">
          A <span className="text-yellow-400">Premier</span> Provider in Legal
          Process Outsourcing
        </p>
        <p className="font-semibold text-base leading-[18.8px] text-white">
          {" "}
          Customised Strategies to Transform Your Business
        </p>
        <button className="bg-[#FCB900] mt-4 w-52 h-14 top-[401px] left-[120px]  rounded-3xl py-5 px-14 gap-3">
          Contact Us
        </button>
      </div>
    </div>
  );
}
