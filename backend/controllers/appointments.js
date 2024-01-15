const Appointment = require('../models/Appointment');

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createAppointment = async (req, res) => {
  const appointment = new Appointment({
    patientName: req.body.patientName,
    email: req.body.email,
    date: req.body.date,
    treatmentType: req.body.treatmentType,
  });

  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllAppointments,
  createAppointment,
};
