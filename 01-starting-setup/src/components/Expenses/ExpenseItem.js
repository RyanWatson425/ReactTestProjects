import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-itemdescription">
          <h2>{props.title}</h2>
          <div className="expense-itemprice">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
