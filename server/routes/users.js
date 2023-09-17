const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { name, email, phone, idNumber } = req.body;
    const user = new User({ name, email, phone, idNumber });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user' });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve users' });
  }
});

// Other routes like updating and deleting users can be added here

module.exports = router;
