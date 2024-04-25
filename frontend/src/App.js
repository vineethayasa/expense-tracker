import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Expense from './components/Expense/Expense.js';
import Signup from './components/signup.js';
import Signin from './components/signin.js';
import Reports from './components/reports.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/expenses" element={<Expense />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
