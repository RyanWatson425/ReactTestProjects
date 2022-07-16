import React from "react";
import MealItem from "./MealItem";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      {props.mealList.map((meal) => (
        <div>
          <MealItem
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        </div>
      ))}
    </form>
  );
};

export default MealItemForm;
