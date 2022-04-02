import ExpenseItem from "./components/ExpenseItem";
function App() {
  const Expense = {
    date: new Date(),
    title: "lamp",
    price: 123.23
  }

  return (
    <div>
      <ExpenseItem title={Expense.title} date={Expense.date} price={Expense.price}></ExpenseItem>
    </div>
  );
}

export default App;
