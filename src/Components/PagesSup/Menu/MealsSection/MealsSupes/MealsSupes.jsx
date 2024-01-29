import React from "react";
import EggImg from "../../../../../assets/Images/menu/pexels-daniela-constantini-5591664 1.png";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function MealsSupes() {
  return (
    <Card className="my-2 border-0">
      <CardImg
        alt="Card image cap"
        src={EggImg}
        className="rounded mb-3 "
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h4">$ 9.99</CardTitle>
        <CardSubtitle className="card-title mb-3" tag="h4">
          Fried Eggs
        </CardSubtitle>
        <CardText tag="p">
          Made with eggs, lettuce, salt, oil and other ingredients.
        </CardText>
      </CardBody>
    </Card>
  );
}
