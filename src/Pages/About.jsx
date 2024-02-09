import React from "react";
import VisitUsSection from "../Components/PagesSup/About/VisitUsSection/VisitUsSection";
import VideoSection from "../Components/PagesSup/About/VideoSection/VideoSection";
import GuestInfoSection from "../Components/PagesSup/About/GuestInfoSection/GuestInfoSection";
import OpinionsSection from "../Components/PagesSup/About/OpinionsSection/OpinionsSection";
import DescriptionSection from "../Components/PagesSup/About/DescriptionSection/DescriptionSection";
import goup from "../Common/GoUp";

export default function About() {
  goup()

  return (
    <div>
      <VisitUsSection />
      <VideoSection />
      <DescriptionSection />
      <GuestInfoSection />
      <OpinionsSection />
    </div>
  );
}
