import React, { useState } from 'react';
import axios from 'axios';
import Newnav from './newnav.js';
import { useNavigate } from 'react-router-dom';

const Signin = ({ onSigninSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:1854/signin', {
        email,
        password,
      });

      setSuccessMessage('Sign-in successful!');
      setError('');
      setEmail('');
      setPassword('');

      const { userId } = response.data;
      console.log("here",response.data);

      navigate('/expenses', {
        state: { userId },
      });

      if (onSigninSuccess) {
        onSigninSuccess(response.data);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Sign-in failed. Please try again.';
      setError(errorMessage);
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <Newnav />
      <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-lg mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign In</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full border rounded-md py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              className="w-full border rounded-md py-2 px-3 text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
