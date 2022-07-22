import React, { useState } from "react";
import Input from '../UI/Input';
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const [amount, setAmount] = useState(0);

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
      <Input updateAmount={setAmount} changeValue={0} />
      <button onClick={props.updateCart} type="button" >+Add</button>
    </div>
  );
};

export default MealItem;
