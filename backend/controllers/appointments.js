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
    time: req.body.time,
    treatmentType: req.body.treatmentType,
  });

  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).send('No appointment found');
    }
    res.status(200).send('Appointment deleted');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllAppointments,
  createAppointment,
  deleteAppointment,
};
