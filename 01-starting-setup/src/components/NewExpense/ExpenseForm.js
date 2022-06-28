import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formActive, setFormActive] = useState(false);
  const [wasCancelClicked, setWasCancelClicked] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!wasCancelClicked) {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseData);
    } else {
      onCancelClick();
    }
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");

    setFormActive((prevFormActive) => {
      return !prevFormActive;
    });
  };

  const changeFormHandler = (event) => {
    event.preventDefault();
    setFormActive((prevFormActive) => {
      return !prevFormActive;
    });
  }

  const onCancelClick = () => {
    setWasCancelClicked((prevWasCancelClicked) => {
      return !prevWasCancelClicked;
    });
  }

  if (!formActive) {
    return (
      <form onSubmit={changeFormHandler}>
        <div className="new-expenseactions">
          <button type="submit">Add New Expense</button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expensecontrols">
        <div>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expenseactions">
        <button type="submit">Add New Expense</button>
        <button onClick={onCancelClick} type="submit">Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
