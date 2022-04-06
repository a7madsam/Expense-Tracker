import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [Expense, setExpense] = useState([{
    id: new Date().getTime().toString(),
    date: new Date(),
    title: "A Book",
    price: 123.23
  }]);
  function getExpenseItemData(ExpenseItemData) {
    setExpense(prevState => {
      return [ExpenseItemData, ...prevState];
    });
  }
  return (
    <div>
      <NewExpense onExpenseItemData={getExpenseItemData} />
      <Expenses expenses={Expense}></Expenses>
    </div>
  );
}

export default App;
