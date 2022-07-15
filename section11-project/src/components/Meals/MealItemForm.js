import React from "react";
import MealItem from "./MealItem";
import Input from '../UI/Input';

const MealItemForm = (props) => {
  return (
    <div>
      {props.mealList.map((meal) => (
        <MealItem
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
      <Input />
    </div>
  );
};

export default MealItemForm;
