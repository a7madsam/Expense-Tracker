import React, { useState } from 'react';
import './ExpenseFilter.css'
function ExpenseFilter(props) {
    const getEnteredyear = (event) => {
        props.onSelectedYear(event.target.value);
    }

    return (
        <div className="filter-container">
            <div className="filter-container__label">Filter by year</div>
            <select className="filter-container__years" value={props.selected} onChange={getEnteredyear}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    );
}
export default ExpenseFilter;