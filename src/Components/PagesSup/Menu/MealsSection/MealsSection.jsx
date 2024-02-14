import React from "react";
import MealsSupes from "./MealsSupes/MealsSupes";
import { Col, Container, Row } from "reactstrap";
import meal1 from "../../../../assets/Images/menu/meal/meal1.png";
import meal2 from "../../../../assets/Images/menu/meal/meal2.png";
import meal3 from "../../../../assets/Images/menu/meal/meal3.png";
import meal4 from "../../../../assets/Images/menu/meal/meal4.png";
import meal5 from "../../../../assets/Images/menu/meal/meal5.png";
import meal6 from "../../../../assets/Images/menu/meal/meal6.png";
import meal7 from "../../../../assets/Images/menu/meal/meal7.png";
import meal8 from "../../../../assets/Images/menu/meal/meal8.png";
export default function MealsSection() {
  const mealsData = [
    {
      mealImg: meal1,
      price: "$ 9.99",
      mealName: "Fried Eggs",
      mealDiscription:
        "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      mealImg: meal2,
      price: "$ 15.99",
      mealName: "Hawaiian Pizza",
      mealDiscription:
        "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      mealImg: meal3,
      price: "$ 7.25",
      mealName: "Martinez Cocktail",
      mealDiscription:
        "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      mealImg: meal4,
      price: "$ 20.99",
      mealName: "Butterscotch Cake",
      mealDiscription:
        "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      mealImg: meal5,
      price: "$ 5.89",
      mealName: "Mint Lemonade",
      mealDiscription:
        "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      mealImg: meal6,
      price: "$ 18.05",
      mealName: "Chocolate Icecream",
      mealDiscription:
        "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      mealImg: meal7,
      price: "$ 12.55",
      mealName: "Cheese Burger",
      mealDiscription:
        "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      mealImg: meal8,
      price: "$ 12.99",
      mealName: "Classic Waffles",
      mealDiscription:
        "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
  ];
  return (
    <section className="service-section">
      <div className="section">
        <Container>
          <div className="service-container ">
            <Row>
              {mealsData.map((item, key) => (
                <Col key={key} lg={3} md={6} ms={12}>
                  <MealsSupes
                    mealImg={item.mealImg}
                    price={item.price}
                    mealName={item.mealName}
                    mealDiscription={item.mealDiscription}
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
