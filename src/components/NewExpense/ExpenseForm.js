import React, { useState } from "react"

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input id="date" type="date" value={enteredDate} min="01-01-2020" max="31-12-2025" onChange={dateChangeHandler} />
        </div>
        <div className="new-expenses__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
