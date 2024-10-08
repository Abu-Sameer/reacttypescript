import React from "react";
import Header from "../header/Header";
import Body from "../body/Body";
import OurService from "../ourservice/OurService";
import Experience from "../experience/Experience";
import ServiceOffering from "../service/ServiceOffering";
import Benefits from "../beeseenbenefit/Benefits";
import Lpo from "../lpo/Lpo";
import CaseStudy from "../caseStudy/Case_Study";

export default function Home() {
  return (
    <div>
      <Header />
      <Body />
      <OurService />
      <Experience />
      <ServiceOffering />
      <Benefits />
      <Lpo />
      <CaseStudy />
    </div>
  );
}
