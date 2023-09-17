import connectDb from '../../server/db'; // Import the database connection function
import Appointment from '../../server/models/appointment'; // Import the Mongoose model
//import mongoose from 'mongoose'; 

connectDb(); // Ensure database connection

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request to create an appointment
    try {
      // Extract appointment data from req.body
      const { userId, date, description } = req.body;
      const appointment = new Appointment({ userId, date, description });
      // Save the appointment to the database
      await appointment.save();

      // Respond with the created appointment
      res.status(201).json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not create/retrieve appointments', details: error.message });
    }
  } else if (req.method === 'GET') {
    // Handle GET request to retrieve a list of appointments
    try {
      // Retrieve and send a list of appointments as a JSON response
      const appointments = await Appointment.find();
      res.status(200).json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not create/retrieve appointments', details: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed for other request methods
  }
}
