import React, { useState } from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  const onChangeHandler = (event) => {
    //send current value to MealItem where it can be added to the cart
    props.updateAmount(event.target.value);
  }

  
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
