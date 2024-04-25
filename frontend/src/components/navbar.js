import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl">Expense Tracker</h1>
        <div>
          <Link to="/expenses" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            Expenses
          </Link>
          <Link to="/reports" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            Reports
          </Link>
          <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            Signout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
