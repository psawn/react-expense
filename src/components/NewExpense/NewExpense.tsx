import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export function NewExpense({
  onAddExpense,
}: {
  onAddExpense: (expense: {
    id: string;
    title: string;
    amount: string;
    date: Date;
  }) => void;
}) {
  const saveExpenseDataHandler = (enteredExpenseData: {
    title: string;
    amount: string;
    date: Date;
  }) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
