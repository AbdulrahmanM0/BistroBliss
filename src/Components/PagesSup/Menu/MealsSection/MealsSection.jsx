import React, { useCallback } from "react";
import MealsSupes from "./MealsSupes/MealsSupes";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import mealsData from './MealsSupes/Meals.json'


export default function MealsSection() {
  const meals = useSelector(state => state.Menu.type)


  const getCategory = useCallback((meals) => {
    let arrayFood = [];
  
    switch (meals) {
      case 'All':
        arrayFood = mealsData;
        break;
      case 'Breakfast':
        console.log('filtered', mealsData.filter(item => item.type === 'Breakfast'));
        arrayFood = mealsData.filter(item => item.type === 'Breakfast');
        break;
      case 'Main Dishes':
        console.log('filtered', mealsData.filter(item => item.type === 'Main Dishes'));
        arrayFood = mealsData.filter(item => item.type === 'Main Dishes');
        break;
      case 'Drinks':
        console.log('filtered', mealsData.filter(item => item.type === 'Drinks'));
        arrayFood = mealsData.filter(item => item.type === 'Drinks');
        break;
      case 'Desserts':
        console.log('filtered', mealsData.filter(item => item.type === 'Desserts'));
        arrayFood = mealsData.filter(item => item.type === 'Desserts');
        break;
      default:
        arrayFood = mealsData;
    }
    return arrayFood;
  }, [meals]);
  

console.log(getCategory(meals))

  return (
    <section className="service-section">
      <div className="section">
        <Container>
          <div className="service-container ">
            <Row>
              {getCategory(meals).map((item, key) => (
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
