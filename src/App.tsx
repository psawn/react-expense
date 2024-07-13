import { useState } from "react";
import { ExpensesFilter } from "./components/Expenses/ExpenseFilter";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { ExenseList } from "./components/Expenses/ExpenseList";
import { ExpenseChart } from "./components/Expenses/ExpenseChart";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExenseList filteredExpenses={filteredExpenses}/>
      </div>
    </>
  );
}

export default App;
