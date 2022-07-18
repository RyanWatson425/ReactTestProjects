import React from "react";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    //idea: use context to get the CartItemNumber value
  return (
    <button className={classes.button}>
      <label>Your Cart {props.cartItemNumber}</label>
    </button>
  );
};

export default HeaderCartButton;
