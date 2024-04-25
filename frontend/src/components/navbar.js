import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ userId }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleNavigate = (path) => {
    navigate(path, { state: { userId } }); // Pass state during navigation
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Expense Tracker</h1>
        <div>
          {/* Using onClick to navigate */}
          <button
            onClick={() => handleNavigate('/expenses')}
            className="font-bold text-white hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Expenses
          </button>
          <button
            onClick={() => handleNavigate('/reports')}
            className="font-bold text-white hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Reports
          </button>
          <button
            onClick={() => navigate('/')} // Signout button does not need state
            className="font-bold text-white hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Signout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
