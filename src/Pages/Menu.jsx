import React from "react";
import MenuHeaderSection from "../Components/PagesSup/Menu/MenuHeaderSection/MenuHeaderSection";
import MenuSection from "../Components/PagesSup/Menu/MenuSection/MenuSection";
import MealsSection from "../Components/PagesSup/Menu/MealsSection/MealsSection";

export default function Menu() {
  return (
    <div>
      <MenuHeaderSection />
      <MenuSection />
      <MealsSection />
    </div>
  );
}
