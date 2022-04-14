import React, { useState, useEffect } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [Expense, setExpense] = useState([{
    id: new Date().getTime().toString(),
    date: new Date(),
    title: "A Book",
    price: 123.23
  }]);
  useEffect(() => {
    let ourExpenses = localStorage.getItem('expenses');
    if (ourExpenses) {
      let our = JSON.parse(ourExpenses);
      our.forEach(element => {
        element.date = new Date(element.date);
      });
      setExpense(our);
    }
  }, [])
  function getExpenseItemData(ExpenseItemData) {
    setExpense(prevState => {
      let newOne = [ExpenseItemData, ...prevState];
      localStorage.setItem('expenses', JSON.stringify(newOne));
      return newOne;
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
