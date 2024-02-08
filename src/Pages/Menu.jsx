import React from "react";
import MenuHeaderSection from "../Components/PagesSup/Menu/MenuHeaderSection/MenuHeaderSection";
import MenuSection from "../Components/PagesSup/Menu/MenuSection/MenuSection";
import MealsSection from "../Components/PagesSup/Menu/MealsSection/MealsSection";
import SponsersSection from "../Components/PagesSup/Menu/SponsersSection/SponsersSection";
import goup from "../Common/GoUp";

export default function Menu() {
  goup()

  return (
    <div>
      <MenuHeaderSection />
      <MenuSection />
      <MealsSection />
      <SponsersSection />
    </div>
  );
}
