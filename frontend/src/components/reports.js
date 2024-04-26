import React, { useState } from 'react';
import Navbar from './navbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Reports = () => {
  const location = useLocation();
  const userId = location.state?.userId;

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportData, setReportData] = useState(null);

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === 'startDate') {
      setStartDate(value);
    } else if (name === 'endDate') {
      setEndDate(value);
    }
  };

  const fetchReports = async () => {
    if (userId && startDate && endDate) {
      const endpoint = `http://localhost:1800/reports/${userId}/${startDate}/${endDate}`;
      try {
        const response = await axios.get(endpoint);
        setReportData(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    }
  };

//   useEffect(() => {
//     fetchReports();
//   }, [userId, startDate, endDate]);

  const colors = [
    '#93c5fd', // Light Blue
    '#fbbf24', // Yellow
    '#f87171', // Red
    '#34d399', // Green
    '#a78bfa', // Purple
  ];

  // Prepare data for Bar chart
  const chartData = reportData
    ? {
      labels: Object.keys(reportData.categorizedExpense), // Categories from the endpoint
      datasets: [
        {
          label: 'Expenses',
          data: Object.values(reportData.categorizedExpense).map((expenses) =>
            expenses.reduce(
              (total, exp) => total + exp.expense_amount,
              0
            )
          ),
          backgroundColor: Object.keys(reportData.categorizedExpense).map(
            (_, index) => colors[index % colors.length]
          ), // Assign colors in a loop
        },
      ],
    }
    : null;

  return (
    <div>
      {userId && <Navbar userId={userId} />}
      <div className="p-6 bg-white rounded-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center underline">Reports</h2>
        <div className="flex space-x-4 mt-4 flex justify-center">
          <div>
            <label className="block text-gray-700">Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={handleDateChange}
              className="border-gray-200 border rounded-md py-2 px-3"
            />
          </div>
          <div>
            <label className="block text-gray-700">End Date:</label>
            <input
              type="date"
              name="endDate"
              onChange={handleDateChange}
              className="border-gray-200 border rounded-md py-2 px-3"
            />
          </div>
          <div>
            <button
              onClick={fetchReports}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-6"
            >
              Get Report
            </button>
          </div>
        </div>

        {chartData && (
          <div className="flex justify-center mt-6"> 
            <div className="w-2/3" style={{ height: '500px' }}> 
            <Bar
              data={chartData}
              options={{
                plugins: {
                  legend: {
                    display: false, 
                  },
                },
                scales: {
                  x: {
                    type: 'category',
                    ticks:{
                        font:{
                            size:14
                        }
                    },
                    title: {
                        display: true, 
                        text: 'Expenses', 
                        font:{
                            size:18
                        }
                      },
                  },
                  y: {
                    beginatZero:true,
                    title: {
                      display: true, 
                      text: 'Amount', 
                      font:{
                        size:18
                    }
                    },
                  },
                },
              }}
            />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
