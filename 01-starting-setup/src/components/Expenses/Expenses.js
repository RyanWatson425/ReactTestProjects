import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterVal, setFilterVal] = useState('2020');

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterVal;
  })

  const saveFilterValueHandler = (filterValue) => {
    setFilterVal(filterValue);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterVal}
          onSaveFilterValue={saveFilterValueHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
