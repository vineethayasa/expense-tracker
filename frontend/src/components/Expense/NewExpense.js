import React, { useState } from "react";
import axios from "axios";

const NewExpense = ({ onExpenseAdded }) => {
  const [head, setHead] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newExpense = {
        expense_date: date,
        expense_amount: parseFloat(amount),
        expense_head: head,
      };
      const res = await axios.get("http://localhost:1854/session-info");
      console.log(res);
      const response = await axios.post(
        "http://localhost:1854/expenses",
        newExpense
      );
      console.log(newExpense);
      console.log(response);

      // Call a callback function to inform the parent component of the new expense
      if (onExpenseAdded) {
        onExpenseAdded(response.data);
      }

      setHead("");
      setAmount("");
      setDate("");
    } catch (error) {
      console.error("Error adding new expense:", error);
    }
  };

  return (
    <div>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Expense Head:</label>
          <input
            type="text"
            value={head}
            onChange={(e) => setHead(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default NewExpense;
