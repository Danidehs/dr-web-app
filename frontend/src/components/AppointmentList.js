import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from '@mui/material';

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const result = await axios('http://localhost:5000/appointments');
      setAppointments(result.data);
    };
    fetchAppointments();
  }, []);

  const deleteAppointment = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        await axios.delete(`http://localhost:5000/appointments/${id}`);
        setAppointments(
          appointments.filter((appointment) => appointment._id !== id)
        );
      } catch (error) {
        console.error('Error deleting appointment:', error);
      }
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', marginBottom: 20 }}
      >
        Appointments
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Treatment</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment._id}>
                <TableCell>{appointment.patientName}</TableCell>
                <TableCell>{appointment.email}</TableCell>
                <TableCell>
                  {new Date(appointment.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.treatmentType}</TableCell>
                <TableCell>
                  <Button
                    color='secondary'
                    onClick={() => deleteAppointment(appointment._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AppointmentsList;
