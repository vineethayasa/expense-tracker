import React from 'react';
import { Link } from 'react-router-dom';

const Newnav = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Expense Tracker</h1>
        <div>
          <Link to="/signup" className="font-bold text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            Sign Up
          </Link>
          <Link to="/signin" className="font-bold text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Newnav;
