import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ userId }) => {
  const navigate = useNavigate(); 

  const handleNavigate = (path) => {
    navigate(path, { state: { userId } }); 
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-white"> {/* Use "className" instead of "class" */}
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h1 className="text-white font-bold text-2xl ml-2">Expense Tracker</h1>
        </div>
        <div>
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
            onClick={() => navigate('/')} 
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
