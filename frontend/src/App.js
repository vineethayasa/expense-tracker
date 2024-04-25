import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseList from './components/Expense/ExpenseList.js';
import Expense from './components/Expense/Expense.js';
import IncomeList from './components/Income/IncomeList.js';
import NewIncome from './components/Income/NewIncome.js';
import Signup from './components/signup.js';
import Signin from './components/signin.js';
import Home from './components/home.js';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/expenses" element={<ExpenseList />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/incomes" element={<IncomeList />} />
          <Route path="/newincome" element={<NewIncome />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
