import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NewExpense from './NewExpense';
import ExpenseList from './ExpenseList';
import Navbar from '../navbar.js';

const Expense = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const location = useLocation();
  const userId = location.state?.userId; // Get the userId from location state

  const handleExpenseAdded = () => {
    setRefreshTrigger((prev) => prev + 1); // Trigger a refresh
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-md shadow-md mt-5">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Expense Tracker</h1>
        {/* Pass userId to NewExpense */}
        <NewExpense onExpenseAdded={handleExpenseAdded} userId={userId} />

        <div className="mt-6">
          <ExpenseList refreshTrigger={refreshTrigger} userId={userId}/>
        </div>
      </div>
    </div>
  );
};

export default Expense;
