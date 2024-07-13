import { ExpenseItem } from "./ExpenseItem";
import "./ExpenseList.css";

export function ExenseList({
  filteredExpenses,
}: {
  filteredExpenses: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}) {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => <ExpenseItem key={expense.id} {...expense} />)}
    </ul>
  );
}
