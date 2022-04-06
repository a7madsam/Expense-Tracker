import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
function Expenses(props) {
    const [year, setYear] = useState(new Date().getFullYear().toString());
    const getSelectedYear = (year) => {
        setYear(year);
    }
    //to filter Expenses dependes on year
    const filteredExpenses = props.expenses.filter((item) => {
        return item.date.getFullYear().toString() === year;
    })
    //check if there is an expenses or not 
    let expenseContent = <h2 className='no-content'>There is No Expenses</h2>
    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((item) => {
            return <ExpenseItem key={item.id} title={item.title} date={item.date} price={item.price} />
        })
    }
    return (
        <div className='container'>
            <ExpenseFilter selected={year} onSelectedYear={getSelectedYear} />
            <ExpensesChart filteredExpenses={filteredExpenses} />
            <Card className="expenses">
                {expenseContent}
            </Card>
        </div>
    );
}
export default Expenses;