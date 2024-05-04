# Expense Tracker Application

Welcome to the Expense Tracker application! This project is designed to help users track their expenses and generate reports to analyze their spending habits. Built with a React front-end and Node.js back-end, this application is a comprehensive solution for expense management.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
- [Endpoints](#endpoints)


## Project Overview
The Expense Tracker application is designed to help users manage their personal finances. Users can create an account, sign in, add expenses, and generate reports for a specified date range. The back-end uses Node.js, Express, PostgreSQL, and Sequelize ORM for database management, while the front-end is built with React and Tailwind CSS.

## Features
- **Authentication**: Users can sign up and sign in.
- **Expense Management**: After signing in, users can add new expenses and view their expense list.
- **Expense Reports**: Users can generate expense reports for a specified date range and view a chart of their categorized expenses. The Chart.js library is used to visualize the expense reports.

## Installation
To run the application locally, you need to set up both the backend and frontend. Follow the steps below to install and run the application.

### Backend
1. Ensure you have Node.js and PostgreSQL installed on your machine.
2. Clone the repository to your local environment.
3. Navigate to the backend folder:
   ```bash
   cd backend
   ```
4. Install the dependencies:
   ```bash
   npm install
   ```
5. Set up the PostgreSQL database and update credentials in `config.json` file.
6. Run the following commands to set up the database:
   ```bash
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   ```
7. Start the backend server with the following command:
   ```bash
   npm start
   ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server with the following command:
   ```bash
   npm start
   ```
4. Open a browser and visit `http://localhost:3000` to view the application.

## Usage
1. **Sign Up**: Create a new account to start using the application.
![signup](https://raw.githubusercontent.com/vineethayasa/expense-tracker/main/public/signup.png)
2. **Sign In**: Use your credentials to sign in.
![signin](https://raw.githubusercontent.com/vineethayasa/expense-tracker/main/public/signin.png)
3. **Add Expenses**: Once signed in, navigate to the "Expenses" page to add new expenses, including the expense category, amount, and date.
![expense](https://raw.githubusercontent.com/vineethayasa/expense-tracker/main/public/expenes.png)
4. **Generate Reports**: Visit the "Reports" page to generate a report by selecting a start and end date. You will see a bar chart representing the total expense amounts for each category within the specified date range.
![reports](https://raw.githubusercontent.com/vineethayasa/expense-tracker/main/public/reports.png)

## Endpoints
Below are the main endpoints used in this project.

### Backend Endpoints
- **User Authentication**:
  - POST `/signup`: User sign-up.
  - POST `/signin`: User sign-in.
- **Expense Management**:
  - POST `/expenses`: Add new expense.
  - GET `/expenses/:userId`: Get all expenses for a user.
- **Expense Reports**:
  - GET `/reports/:userId/:startDate/:endDate`: Get expense reports for a user within a specified date range.
