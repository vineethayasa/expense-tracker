import React, { useState } from 'react';
import axios from 'axios';

const Signin = ({ onSigninSuccess }) => {
  // Form data states for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // States for error and success messages
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
    
    // Basic validation: Ensure email and password are provided
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:1854/signin', {
        email,
        password,
      });

      // If successful, trigger success callback and reset the form
      setSuccessMessage('signin successful!');
      setError('');
      setEmail('');
      setPassword('');

      if (onSigninSuccess) {
        onSigninSuccess(response.data); // Pass the response data (e.g., a token) to the parent component
      }
    } catch (error) {
      setError(error.response?.data?.message || 'signin failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
