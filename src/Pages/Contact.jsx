import React from "react";
import ContactHeaderSection from "../Components/PagesSup/Contact/ContactHeaderSection/ContactHeaderSection";
import goup from "../Common/GoUp";
import SignIn from "./SignIn";

export default function Contact() {
  goup();

  return (
    <div>
      <ContactHeaderSection />
      <SignIn />
    </div>
  );
}
