import React, { useEffect, useState } from "react";
import axios from "axios";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:1854/expenses");
        setExpenses(response.data);
      } catch (err) {
        setError("Error fetching expenses");
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);
  

  if (loading) {
    return <div className="text-gray-700">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h1 className="text-lg font-semibold text-gray-800 mb-4">Expense List</h1>
      <ul className="space-y-2">
        {expenses.map((expense) => (
          <li key={expense.id} className="border-b border-gray-300 py-2">
            {expense.expense_head} - {expense.expense_amount} - {expense.expense_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
