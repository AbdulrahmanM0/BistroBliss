// eslint-disable-next-line no-unused-vars
import React from "react";
import FoodImg from "../../../../assets/Images/home-page/kebab-set-table 1.png";
import BirthdayImg from "../../../../assets/Images/home-page/charming-female-blowing-candles-birthday-cake-after-making-her-wish-party 1.png";
import WeedingImg from "../../../../assets/Images/home-page/happy-man-wife-sunny-day 1.png";
import FriendsImg from "../../../../assets/Images/home-page/group-friends-eating-restaurant 1.png";
import ServiceSupes from "./ServiceSupes/ServiceSupes";

export default function ServicesSection() {
  const servicedata = [
    {
      img: FoodImg,
      service: "Caterings",
      des: "In the new era of technology we look in the future with certainty for life.",
    },
    {
      img: BirthdayImg,
      service: "Birthdays",
      des: "In the new era of technology we look in the future with certainty for life.",
    },
    {
      img: WeedingImg,
      service: "Weddings",
      des: "In the new era of technology we look in the future with certainty for life.",
    },
    {
      img: FriendsImg,
      service: "Events",
      des: "In the new era of technology we look in the future with certainty for life.",
    },
  ];
  return (
    <section>
      <div className="section">
        <div className="service-container">
          <h1>We also offer unique services for your events</h1>
          <div className="service-container">
            {servicedata.map((item, key) => (
              <ServiceSupes
                img={item.img}
                service={item.service}
                des={item.des}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
