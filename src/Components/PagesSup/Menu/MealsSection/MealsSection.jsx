import React from "react";
import MealsSupes from "./MealsSupes/MealsSupes";
import { Col, Container, Row } from "reactstrap";

export default function MealsSection() {
  return (
    <section className="service-section">
      <div className="section">
        <Container>
          <div className="service-container ">
            <Row>
              <Col lg={3} md={6} ms={12}>
                <MealsSupes />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}
