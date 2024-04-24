import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:1854/expenses');
        setExpenses(response.data);
      } catch (err) {
        setError('Error fetching expenses');
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Expense List</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.expense_head} - {expense.expense_amount} - {expense.expense_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
