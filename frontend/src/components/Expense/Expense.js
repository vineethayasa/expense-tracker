import React, { useState } from "react";
import NewExpense from "./NewExpense";
import ExpenseList from "./ExpenseList";
import Navbar from "../navbar.js";

const Expense = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleExpenseAdded = () => {
    // Increment the refreshTrigger to force a re-fetch in ExpenseList
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div>
      <Navbar />
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-md shadow-md mt-5">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Expense Tracker</h1>
      {/* NewExpense at the top */}
      <NewExpense onExpenseAdded={handleExpenseAdded} /> 

      {/* ExpenseList below */}
      <div className="mt-6">  {/* Adding margin-top to separate the list */}
      <ExpenseList refreshTrigger={refreshTrigger} />
      </div>
    </div>
    </div>
  );
};

export default Expense;
