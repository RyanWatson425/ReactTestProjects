import React from "react";
import MealItem from "./MealItem";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form>
      {props.mealList.map((meal) => (
        <div className={classes.form} key={meal.id}>
          <MealItem
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
