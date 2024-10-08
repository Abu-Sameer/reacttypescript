import rec from "../images/Rectangle 7.png";
import vec from "../images/Vector 3.png";
import Glance from "./Glance";
import OurClient from "./OurClient";

export default function CaseStudy() {
  return (
    <div className="my-16 px-14">
      <div className=" h-[74px] flex flex-col justify-center items-center relative">
        <img
          src={rec}
          loading="lazy"
          alt="box"
          className="w-[50px] h-[50px] bg-[#FFDD7E] "
        />
        <h2 className="w-[275] absolute -top-4 left-[45%] h-48 text-[40px] font-extrabold leading-[47px] tracking-[0.125px]">
          CASE STUDY
        </h2>
        <img
          src={vec}
          alt="box"
          loading="lazy"
          className="w-[121px] border-l-2 bg-[#FCB900] ml-4 mt-10"
        />
      </div>
      <div className="flex justify-between space-y-4">
        <OurClient />
        <Glance />
      </div>
    </div>
  );
}
