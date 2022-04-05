import React, { useState } from 'react';
import './FormExpense.css'
function FormExpense(props) {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }
    function amountChangeHandler(event) {
        setAmount(event.target.value);
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
    }
    function submitFormHandler(event) {
        event.preventDefault();
        const formData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onFormData(formData);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return (
        <form onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2024-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default FormExpense;