import { Col, Container, Row } from "reactstrap";
import SectionSupes from "./SectionSupes/SectionSupes";
import sectionInfoImg from "../../../../assets/Images/about-page/sectionInfoImg.png";

export default function GuestInfoSection() {
  const cardData = [
    {
      num: 6,
      dis: "Locations",
    },
    {
      num: 1995,
      dis: "Founded",
    },
    {
      num: "66+",
      dis: "Staff Members",
    },
    {
      num: "100%",
      dis: "satisfied Customers",
    },
  ];
  return (
    <section className="guestinfo-section">
      <div className="section">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div
                className="content details"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="discription">
                  <h1>We provide healthy food for your family.</h1>
                  <p>
                    At place, we believe that dining is not just about food, but
                    also about the overall experience. Our staff, renowned for
                    their warmth and dedication, strives to make every visit an
                    unforgettable event.
                  </p>
                </div>

                <div>
                  <Row>
                    {cardData.map((item, key) => (
                      <SectionSupes
                        number={item.num}
                        discription={item.dis}
                        key={key}
                      />
                    ))}
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="infoimg-container">
                <img src={sectionInfoImg} className="infoimg ms-auto d-block" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
