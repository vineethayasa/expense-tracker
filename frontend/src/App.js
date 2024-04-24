import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ExpenseList from './components/Expense/ExpenseList.js';
import NewExpense from './components/Expense/NewExpense.js';
import IncomeList from './components/Income/IncomeList.js';
import NewIncome from './components/Income/NewIncome.js';
import Signup from './components/signup.js';
import Signin from './components/signin.js';
import Home from './components/home.js';

function App() {
  return (
    <Router>
      <div>
        <Signup/>

        <Routes>
          <Route path="/expenses" element={<ExpenseList />} />
          <Route path="/newexpense" element={<NewExpense />} />
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
