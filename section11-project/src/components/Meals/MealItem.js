import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  //unused classes.meal css class (?)
  return (
    <div className={classes.meal} key={props.id}>
      <span>
        <h3>{props.name}</h3>
      </span>
      <span className={classes.description}>
        <p>{props.description}</p>
      </span>
      <span>
        <h3 className={classes.price}>{"$" + props.price}</h3>
      </span>
    </div>
  );
};

export default MealItem;
