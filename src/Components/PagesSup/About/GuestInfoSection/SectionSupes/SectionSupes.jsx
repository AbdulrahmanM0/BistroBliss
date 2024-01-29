// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col } from "reactstrap";

export default function SectionSupes({ number, discription }) {
  return (
    <Col lg={6} md={6} sm={12}>
      <div className="info-card">
        <div>
          <h1>{number}</h1>
          <p>{discription}</p>
        </div>
      </div>
    </Col>
  );
}
