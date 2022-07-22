import React from "react";
import classes from "./Card.module.css";
import MealItemForm from "../Meals/MealItemForm";
import MealSummary from "../Meals/MealsSummary";

const Card = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  return (
    <React.Fragment>
      <div className={classes.card}>
        <MealSummary />
        <MealItemForm mealList={DUMMY_MEALS} />
      </div>
    </React.Fragment>
  );
};

export default Card;