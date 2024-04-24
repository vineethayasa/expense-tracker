import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IncomeList = () => {
  const [incomes, setIncome] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const response = await axios.get('http://localhost:1854/incomes');
        setIncome(response.data);
        console.log(response.data);
      } catch (err) {
        setError('Error fetching incomes');
      } finally {
        setLoading(false);
      }
    };

    fetchIncomes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Income List</h1>
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>
            {income.Income_head} - {income.Income_amount} - {income.Income_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
