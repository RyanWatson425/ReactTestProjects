import React from 'react';
import classes from './Input.module.css';

const Input = () => {
  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input type='number' value='0'></input>
    </div>
  );
};

export default Input;
