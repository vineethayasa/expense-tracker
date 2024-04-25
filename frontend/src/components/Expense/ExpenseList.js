import React, { useEffect, useState, useCallback} from "react";
import axios from "axios";

const ExpenseList = ({ refreshTrigger, userId}) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExpenses = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:1854/expenses/${userId}`);
      setExpenses(response.data);
    } catch (err) {
      setError("Error fetching expenses");
    } finally {
      setLoading(false);
    }
  }, [userId]);
  
  useEffect(() => {
    fetchExpenses();
  }, [refreshTrigger, fetchExpenses]);

  // Handle delete expense
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1854/expenses/${id}`);
      fetchExpenses();
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  };

  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.expense_amount,
    0
  );

  if (loading) {
    return <div className="text-gray-700">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h1 className="text-lg font-bold text-gray-800 mb-4">Expense List</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 py-2 text-left">Date</th>
            <th className="border-b-2 border-gray-300 py-2 text-left">Head</th>
            <th className="border-b-2 border-gray-300 py-2 text-left">Amount</th>
            <th className="border-b-2 border-gray-300 py-2"></th> {/* Empty column for delete icon */}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-b border-gray-300">
              <td className="py-2 text-left">{expense.expense_date}</td>
              <td className="py-2 text-left">{expense.expense_head}</td>
              <td className="py-2 text-left">{expense.expense_amount}</td>
              <td className="py-2">
                <button
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={() => handleDelete(expense.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </td>
            </tr>
            
          ))}
          {/* Display total amount */}
          <tr>
            <td className="py-2 font-bold text-left">Total</td>
            <td className="py-2 font-bold"></td>
            <td className="py-2 font-bold text-left">
              {totalAmount.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
