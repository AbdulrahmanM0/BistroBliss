// eslint-disable-next-line no-unused-vars
import React from "react";
import FoodImg from "../../../../assets/Images/home-page/kebab-set-table 1.png";
import BirthdayImg from "../../../../assets/Images/home-page/charming-female-blowing-candles-birthday-cake-after-making-her-wish-party 1.png";
import WeedingImg from "../../../../assets/Images/home-page/happy-man-wife-sunny-day 1.png";
import FriendsImg from "../../../../assets/Images/home-page/group-friends-eating-restaurant 1.png";
import ServiceSupes from "./ServiceSupes/ServiceSupes";
import SectionHead from "../../../../Common/SectionHead";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

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
    <section className="service-section">
      <div className="section">
        <Container>
          <SectionHead
            title={"We also offer unique services for your events"}
          />
          <div className="service-container">
            <Row>
              {servicedata.map((item, key) => (
                <Col lg={3} md={6} ms={12} key={key}>
                  <ServiceSupes
                    img={item.img}
                    service={item.service}
                    des={item.des}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}
