import React, { useState } from 'react';
import './NewExpense.css'
import FormExpense from './FormExpense';
function NewExpense(props) {
    const [currentState, setCurrentState] = useState(false);
    function getFormData(formData) {
        const newExpenseFormData = {
            ...formData,
            id: new Date().getTime().toString()
        }
        props.onExpenseItemData(newExpenseFormData);
        setCurrentState(false);
    }
    const showFormHandler = () => {
        setCurrentState(true);
    }
    const cancelButtonHandler = () => {
        setCurrentState(false);
    }
    //TO Handle what we need to show first based on current state 
    let newExpenseContent = <button onClick={showFormHandler} >Add New Expense</button>;
    if (currentState) {
        newExpenseContent = <FormExpense onCancelButton={cancelButtonHandler} onFormData={getFormData} />;
    }
    return (
        <div className="new-expense">
            {newExpenseContent}
        </div>
    );
}
export default NewExpense;