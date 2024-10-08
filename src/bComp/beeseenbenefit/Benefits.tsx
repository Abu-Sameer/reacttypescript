import vec from "../images/Vector 4.png";
import box from "../images/Rectangle 7.png";
import Card from "./Card";

export default function Benefits() {
  return (
    <div className="flex justify-center items-center flex-col my-16 ">
      <div className="w-[538px] h-[74px] relative">
        <h2 className=" w-[514px] h-[47px] text-[40px] font-extrabold leading-[47px] text-left -top-7 left-6 absolute">
          BeSeen Legal BENEFITS
        </h2>
        <img
          src={vec}
          loading="lazy"
          alt=""
          className="w-[405px] h-0 border-t-2 border-[#FCB900] absolute top-10 left-16"
        />
        <img src={box} loading="lazy" alt="" className="w-[50px] h-[50px] bg-[#FFDD7E]" />
      </div>
      <p className="w-[827px] h-[48px] font-normal text-sm leading-[16.45px] text-center text-[#131313] ">
        Legal Process Outsourcing (LPO) has become a common practice in the
        legal industry in recent years, and for good reason. With BeeSeen Legal,
        a leading provider of LPO services, law firms and legal departments can
        reap a range of benefits. Here are just a few reasons why LPO with
        BeeSeen Legal can be a game changer for your practice.
      </p>
      <Card />
    </div>
  );
}
