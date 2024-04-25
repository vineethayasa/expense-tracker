/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { request, response } = require("express");
const express = require("express");
const app = express();

const { User, Income , Expense } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(
  session({
    secret: "this is my secret-258963147536214",
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

const cors = require('cors');

const allowedOrigins = ['http://localhost:3000']; 

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

// Create a new user
app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  console.log("nnn",firstname, lastname, email, password);
  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existingUser = await User.getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: "Email already in use" });
    }
    
    const hashedPwd = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPwd,
    });

    res.status(201).json(newUser); 
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

//signin
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Create a session for the authenticated user
    req.session.userId = user.id;
    console.log(req.session.userId);
    res.status(200).json({ message: 'Sign-in successful',userId:user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Create a new expense
app.post('/expenses', async (req, res) => {
  try {
    const expense = await Expense.addExpense({
      expense_head:req.body.expense_head,
      expense_date:req.body.expense_date,
      expense_amount:req.body.expense_amount,
      userId:req.body.userId
    });
    console.log("chek here",expense);
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/expenses/:userId', async (req, res) => {
  const { userId } = req.params; // Extract userId from path parameters

  try {
    const expenses = await Expense.findAll({
      where: { userId }, // Filter by userId
    });

    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Update an expense
app.put('/expenses/:id', async (req, res) => {
  try {
    const [updated] = await Expense.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedExpense = await Expense.findOne({ where: { id: req.params.id } });
      res.status(200).json(updatedExpense);
    } else {
      res.status(404).json({ error: 'Expense not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an expense
app.delete('/expenses/:id', async (req, res) => {
  try {
    const deleted = await Expense.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Expense not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
