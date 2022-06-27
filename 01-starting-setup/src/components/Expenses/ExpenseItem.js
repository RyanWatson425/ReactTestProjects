import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-itemdescription">
        <h2>{title}</h2>
        <div className="expense-itemprice">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
