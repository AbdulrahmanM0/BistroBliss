import React from "react";
import MainSection from "../Components/PagesSup/Home/MainSection/MainSection";
import BrowsSection from "../Components/PagesSup/Home/BrowsSection/BrowsSection";
import VisitUsSection from "../Components/PagesSup/Home/VisitUsSection/VisitUsSection";
import ServicesSection from "../Components/PagesSup/Home/ServicesSection/ServicesSection";
import goup from "../Common/GoUp";

export default function Home() {
  goup()

  return (
    <div>
      <MainSection />
      <BrowsSection />
      <VisitUsSection />
      <ServicesSection />
    </div>
  );
}
