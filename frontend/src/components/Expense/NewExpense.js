import React, { useState } from "react";
import axios from "axios";

const NewExpense = ({ onExpenseAdded, userId}) => {
  const [head, setHead] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Create a new expense object
    const newExpense = {
      expense_date: date,
      expense_amount: parseFloat(amount),
      expense_head: head,
      userId
    };

    console.log(newExpense);

    try {
      const response = await axios.post(
        "http://localhost:1854/expenses",
        newExpense
      );

      // Notify parent component about the new expense
      if (onExpenseAdded) {
        onExpenseAdded(response.data);
      }

      // Clear input fields
      setHead("");
      setAmount("");
      setDate("");
    } catch (error) {
      console.error("Error adding new expense:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Add New Expense</h2>
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <div>
          <label className="block text-gray-700">Expense Head:</label>
          <input
            type="text"
            value={head}
            onChange={(e) => setHead(e.target.value)}
            required
            placeholder="Enter expense head"
            className="border-gray-200 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Amount:</label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="Enter amount"
            className="border-gray-200 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="border-gray-200 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default NewExpense;
