import React from "react";
import Input from '../UI/Input';
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <div className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.description}>
        <p>{props.description}</p>
      </div>
      <div>
        <h3 className={classes.price}>{"$" + props.price}</h3>
      </div>
      <Input />
      <button type="submit">+Add</button>
    </div>
  );
};

export default MealItem;
