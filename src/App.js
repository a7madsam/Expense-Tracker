import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const [Expense, setExpense] = useState([{
    date: new Date(),
    title: "lamp",
    price: 123.23
  }]);
  function getExpenseItemData(ExpenseItemData) {
    const ExpenseFormData = {
      ...ExpenseItemData
    }
    Expense.push(ExpenseFormData);
    setExpense(Expense);
    console.log(Expense);
  }
  return (
    <div>
      <NewExpense onExpenseItemData={getExpenseItemData} />
      <Expenses expenses={Expense}></Expenses>
    </div>
  );
}

export default App;
