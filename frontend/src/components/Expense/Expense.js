import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NewExpense from './NewExpense';
import ExpenseList from './ExpenseList';
import Navbar from '../navbar.js';

const Expense = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const location = useLocation();
  const userId = location.state?.userId; 

  const handleExpenseAdded = () => {
    setRefreshTrigger((prev) => prev + 1); // Trigger a refresh
  };

  return (
    <div>
      {userId && <Navbar userId={userId} />}
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-md shadow-md mt-5">
        <NewExpense onExpenseAdded={handleExpenseAdded} userId={userId} />

        <div className="mt-6">
          <ExpenseList refreshTrigger={refreshTrigger} userId={userId}/>
        </div>
      </div>
    </div>
  );
};

export default Expense;
