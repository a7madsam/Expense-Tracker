import React, { useState } from 'react';
import './FormExpense.css'
function FormExpense(props) {
    const [enteredTitle, setTitle] = useState('');
    const [enteredPrice, setPrice] = useState('');
    const [enteredDate, setDate] = useState('');
    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }
    function amountChangeHandler(event) {
        setPrice(event.target.value);
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
    }
    function submitFormHandler(event) {
        event.preventDefault();
        const formData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onFormData(formData);
        setTitle('');
        setPrice('');
        setDate('');
        props.onCancelButton();
    }


    return (
        <form id='expense-form' className='erase-form' onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredPrice} onChange={amountChangeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2024-12-31" value={enteredDate} onChange={dateChangeHandler} required />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={props.onCancelButton}>Cancel</button>
            </div>
        </form >
    );
}
export default FormExpense;