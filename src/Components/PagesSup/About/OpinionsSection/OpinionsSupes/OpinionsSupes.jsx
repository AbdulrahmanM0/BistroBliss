// eslint-disable-next-line no-unused-vars
import React from "react";

export default function OpinionsSupes({
  title,
  discription,
  img,
  name,
  location,
}) {
  return (
    <div className="user-card">
      <div className="top-part">
        <h5>{title}</h5>
        <p>{discription}</p>
      </div>
      <div className="down-part">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="userdata">
          <h6>{name}</h6>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
