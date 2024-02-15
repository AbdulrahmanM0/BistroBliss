import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function MealsSupes({
  mealImg,
  price,
  mealName,
  mealDiscription,
}) {
  return (
    <Card className="my-2 meal-card ">
      <CardImg
        alt="Card image cap"
        src={`${mealImg}`}
        className="rounded mb-3 "
        width="100%"
      />
      <CardBody className="meal-info">
        <CardTitle tag="h4" className="card-price">
          {price}
        </CardTitle>
        <CardSubtitle className="card-title mb-3" tag="h4">
          {mealName}
        </CardSubtitle>
        <CardText tag="p">{mealDiscription}</CardText>
      </CardBody>
    </Card>
  );
}
