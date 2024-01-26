import React from "react";
import MainSection from "../Components/PagesSup/Home/MainSection/MainSection";
import BrowsSection from "../Components/PagesSup/Home/BrowsSection/BrowsSection";
import VisitUsSection from "../Components/PagesSup/Home/VisitUsSection/VisitUsSection";
import ServicesSection from "../Components/PagesSup/Home/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <div>
      <MainSection />
      <BrowsSection />
      <VisitUsSection />
      <ServicesSection />
    </div>
  );
}
