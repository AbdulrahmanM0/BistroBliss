import React from "react";

export default function ServiceSupes({ img, service, des }) {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h6>{service}</h6>
        <p>{des}</p>
      </div>
    </div>
  );
}
