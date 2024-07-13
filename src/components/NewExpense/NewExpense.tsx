import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export function NewExpense({
  onAddExpense,
}: {
  onAddExpense: (expense: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }) => void;
}) {
  const saveExpenseDataHandler = (enteredExpenseData: {
    title: string;
    amount: number;
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
