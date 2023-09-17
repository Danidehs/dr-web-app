const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

// Create a new appointment
router.post('/api/appointments', async (req, res) => {
  try {
    console.log('Received POST request to /api/appointments');
    const { userId, date, description } = req.body;
    const appointment = new Appointment({ userId, date, description });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create appointment' });
  }
});

// Get all appointments
router.get('/api/appointments', async (req, res) => {
  try {
    console.log('Received GET request to /api/appointments');
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve appointments' });
  }
});

// Other routes like updating and deleting appointments can be added here

module.exports = router;
