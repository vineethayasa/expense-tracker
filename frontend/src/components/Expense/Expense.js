import React from "react";
import NewExpense from "./NewExpense";
import ExpenseList from "./ExpenseList";

const Expense = () => {
  const handleExpenseAdded = (newExpense) => {
    console.log("Expense added:", newExpense);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Expense Tracker</h1>
      {/* NewExpense at the top */}
      <NewExpense onExpenseAdded={handleExpenseAdded} /> 

      {/* ExpenseList below */}
      <div className="mt-6">  {/* Adding margin-top to separate the list */}
        <ExpenseList />
      </div>
    </div>
  );
};

export default Expense;
