import React from 'react'
import goup from '../Common/GoUp'
import ContactHeaderSection from '../Components/PagesSup/Contact/ContactHeaderSection/ContactHeaderSection'
import SignIn from "./SignIn";

export default function Contact() {
  goup()

  return (
    <div>
      <ContactHeaderSection />
      <SignIn />
    </div>
  );
}
