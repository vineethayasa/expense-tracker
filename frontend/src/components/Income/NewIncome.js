import React, { useState } from 'react';
import axios from 'axios';

const NewIncome = ({ onIncomeAdded }) => {
  const [head, setHead] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    try {
        const newIncome = {
            income_date:date,
            income_amount: parseFloat(amount),
            income_head:head
          };
      const res = await axios.get('http://localhost:1854/session-info');
      console.log(res);
      const response = await axios.post('http://localhost:1854/incomes', newIncome);
      console.log(newIncome);
      
      if (onIncomeAdded) {
        onIncomeAdded(response.data);
      }

      setHead('');
      setAmount('');
      setDate('');
    } catch (error) {
      console.error('Error adding new income:', error);
    }
  };

  return (
    <div>
      <h2>Add New Income</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Income Head:</label>
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
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default NewIncome;