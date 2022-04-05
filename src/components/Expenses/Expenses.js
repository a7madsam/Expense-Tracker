import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
function Expenses(props) {
    const [year, setYear] = useState('2021');
    const getSelectedYear = (year) => {
        setYear(year);
    }
    return (
        <div className='container'>
            <ExpenseFilter selected={year} onSelectedYear={getSelectedYear} />
            <Card className="expenses">
                <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} price={props.expenses[0].price}></ExpenseItem>
            </Card>
        </div>
    );
}
export default Expenses;