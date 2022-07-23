import React, { useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`
  const [amount, setAmount] = useState(0);

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>

      </div>
    </li>
  );
};

export default MealItem;
