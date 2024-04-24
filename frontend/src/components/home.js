import React from 'react';
import ExpenseList from './Expense/ExpenseList.js';
import NewExpense from './Expense/NewExpense.js';
import IncomeList from './Income/IncomeList.js';
import NewIncome from './Income/NewIncome.js';

function Home() {
  return (
      <div>
          <ExpenseList />
          <NewExpense />
          <IncomeList />
          <NewIncome />
      </div>
  );
}

export default Home;
