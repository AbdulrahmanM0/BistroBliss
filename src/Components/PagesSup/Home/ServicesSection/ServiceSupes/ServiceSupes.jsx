import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

export default function ServiceSupes({ img, service, des }) {
  return (
    <Card className="my-2 border-0"                     
    data-aos="fade-left"
    data-aos-duration="1000"
    >
      <CardImg
        className="rounded mb-3"
        alt="Card image cap"
        src={img}
        top
        width="100%"
      />
      <CardTitle tag="h4" className="card-title mb-3">
        {service}
      </CardTitle>
      <CardText tag="p">{des}</CardText>
    </Card>
  );
}
