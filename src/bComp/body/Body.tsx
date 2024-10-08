import React from "react";
import line from "../images/Vector 4 (1).png";

export default function Body() {
  return (
    <div className="flex justify-center items-center space-x-20 my-4">
      <div className="w-[246px] h-[74px] top-[905px] left-[163px] gap-0  text-black ">
        <div className="w-12 h-12 top-[929px] left-[163px] gap-0 bg-[#FFDD7E] absolute"></div>
        <p className="w-[222px] h-[47px] top-[905px] left-[187px] gap-0 text-[40px] font-extrabold leading-[47px] tracking-wider text-left absolute">
          About us
        </p>
        <img
          src={line}
          alt=""
          loading="lazy"
          className="w-32 h-0 top-[972px] left-[230px] border-2 border-[#FCB900] absolute"
        />
      </div>
      <div className="w-[650px] h-[500px] top-[753px] left-[670px] px-6">
        <div className="font-sans font-normal text-sm leading-5 text-justify">
          Welcome to BeeSeen Legal, your trusted partner for Legal Process
          Outsourcing Services (LPO). We are a leading provider of high-quality
          legal support services to law firms, corporations, and other
          organisations worldwide. With over 25 years of experience, our team of
          legal professionals is dedicated to providing our clients with
          customised solutions that meet their specific needs and requirements.
          Supported with the highest levels of compliance and oversight we
          provide next generation solutions that create an immediate positive
          impact to our clients bottom line. <br /> <br /> At BeeSeen Legal we
          understand the challenges facing the legal industry today, and we are
          committed to helping our partners navigate the complex legal landscape
          with ease and confidence,{" "}
          <span className="text-sm font-medium leading-5 text-justify text-[#FCB900] ">
            in a cost-efficient and effective manner while maximising value for
            their clients.
          </span>{" "}
          Our comprehensive range of legal outsourcing services includes
          document review{" "}
          <span className="text-sm font-medium leading-5 text-justify text-[#FCB900] ">
            for both litigation and transactional matters,
          </span>{" "}
          contract management, legal research, drafting and filing of legal
          documents, litigation support, and more. We also offer a range of
          specialised services tailored to meet the unique needs of our clients,
          including virtual paralegal services, e-discovery, and legal
          transcription. <br /> <br /> We pride ourselves on delivering
          exceptional quality and service, and our team of legal experts has a
          proven track record of success in delivering cost-effective solutions
          that meet the highest standards of quality and professionalism. We are
          committed to upholding the highest ethical and professional standards,
          and we take the privacy and security of our clients’ data very
          seriously. <br /> <br />
          Whether you are a law firm looking to streamline your operations and
          reduce costs, or a corporation seeking to outsource legal work to
          improve efficiency and productivity, BeeSeen Legal has the expertise
          and experience to help you achieve your goals. Contact us today to
          learn more about our legal outsourcing services and how we can help
          your organisation succeed.
        </div>
      </div>
    </div>
  );
}
