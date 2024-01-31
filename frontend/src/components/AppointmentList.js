import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
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
  Container,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; // or CloseIcon for an 'X' icon

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(4),
  },
}));

const AppointmentsList = () => {
  const classes = useStyles();
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
    <Container>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', marginBottom: 20 }}
      >
        Appointments
      </Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow
              style={{ backgroundColor: '#cccccc' /*fontWeight: 'bold'*/ }}
            >
              <TableCell align='center'>Patient</TableCell>
              <TableCell align='center'>Email</TableCell>
              <TableCell align='center'>Date</TableCell>
              <TableCell align='center'>Time</TableCell>
              <TableCell align='center'>Treatment</TableCell>
              <TableCell />
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
                    onClick={() => deleteAppointment(appointment._id)}
                    color='error'
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AppointmentsList;
