import React from "react";
import Ellipse19 from "../../../../assets/Images/about-page/Ellipse19.png";
import Ellipse20 from "../../../../assets/Images/about-page/Ellipse20.png";
import Ellipse21 from "../../../../assets/Images/about-page/Ellipse21.png";
import OpinionsSupes from "./OpinionsSupes/OpinionsSupes";
import SectionHead from "../../../../Common/SectionHead";
import { Col, Container, Row } from "reactstrap";

export default function OpinionsSection() {
  const coustmerdata = [
    {
      title: "“The best restaurant”",
      discription:
        "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      img: Ellipse19,
      name: "Sophire Robson",
      location: "Los Angeles, CA",
    },
    {
      title: "“Simply delicious”",
      discription:
        "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      img: Ellipse20,
      name: "Matt Cannon",
      location: "San Diego, CA",
    },
    {
      title: "“One of a kind restaurant”",
      discription:
        "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      img: Ellipse21,
      name: "Andy Smith",
      location: "San Francisco, CA",
    },
  ];
  return (
    <section className="opinions-section">
      <div className="section">
        <Container>
          <div className="content">
            <SectionHead title={"What Our Customers Say"} />
            <div>
              <Row>
                {coustmerdata.map((item, key) => (
                  <Col key={key} lg={4} md={6} sm={12}>
                    <OpinionsSupes
                      title={item.title}
                      discription={item.discription}
                      img={item.img}
                      name={item.name}
                      location={item.location}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
