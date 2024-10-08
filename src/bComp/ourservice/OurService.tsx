import React from "react";
import data from "./data";

export default function OurService() {
  return (
    <div className="flex flex-col justify-center items-center w-screen my-8">
      <div className="w-[697px] h-[76px] top-[1288px] left-[372px] my-6">
        <p className="text-[32px] font-extrabold leading-9 text-center">
          Our Legal Service Offering are such as but not limited to
        </p>
      </div>
      <div className="px-16 flex justify-between items-center w-[1200px] h-[242px] top-[1410px] left-[120px] border-2 rounded-md bg-white border-[#FCB900]">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[139px] h-[109px] top-[67px] left-[370px] flex flex-col justify-center items-center space-y-2 text-center"
          >
            <img src={item.imgUrl} loading="lazy" alt="imgs" />
            <div className="w-[141px] h-[19px] top-[157.09px] left-[697px] font-medium text-base leading-[18.8px] ">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
