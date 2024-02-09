import React from "react";

export default function SectionHead(title) {
  return (
    <div
      className="section-head"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <h1>{title}</h1>
    </div>
  );
}
