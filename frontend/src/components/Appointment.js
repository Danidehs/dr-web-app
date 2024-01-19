import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

const Appointment = () => {
  const [appointment, setAppointment] = useState({
    patientName: '',
    email: '',
    date: '',
    time: '',
    treatmentType: '',
  });
  const [existingAppointments, setExistingAppointments] = useState([]);
  const [isSlotAvailable, setIsSlotAvailable] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/appointments');
        setExistingAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchAppointments();
  }, []);

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
    setIsSlotAvailable(true); // Reset availability check on change
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour <= 18; hour++) {
      if (hour !== 13) {
        ['00', '30'].forEach((minute) => {
          slots.push(`${hour < 10 ? '0' + hour : hour}:${minute}`);
        });
      }
    }
    return slots;
  };

  const checkAvailability = () => {
    const selectedDateTime = new Date(
      appointment.date + ' ' + appointment.time
    );
    const isAvailable = !existingAppointments.some((appt) => {
      const apptDateTime = new Date(appt.date);
      return apptDateTime.getTime() === selectedDateTime.getTime();
    });
    setIsSlotAvailable(isAvailable);
    return isAvailable;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkAvailability()) {
      return; // Stop submission if slot is not available
    }
    try {
      await axios.post('http://localhost:5000/appointments', appointment);
      alert(
        `Appointment successfully booked for ${appointment.date} at ${appointment.time}`
      );
      setAppointment({
        patientName: '',
        email: '',
        date: '',
        time: '',
        treatmentType: '',
      });
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', marginBottom: 20 }}
      >
        Book an Appointment
      </Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete='off'>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Name'
              name='patientName'
              value={appointment.patientName}
              onChange={handleChange}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Email'
              name='email'
              value={appointment.email}
              onChange={handleChange}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Treatment</InputLabel>
              <Select
                name='treatmentType'
                value={appointment.treatmentType}
                onChange={handleChange}
                label='Treatment'
              >
                <MenuItem value='Botox'>Botox</MenuItem>
                <MenuItem value='Fillers'>Fillers</MenuItem>
                <MenuItem value='Skincare Treatment'>Skincare</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Date'
              type='date'
              name='date'
              value={appointment.date}
              onChange={handleChange}
              variant='outlined'
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Time</InputLabel>
              <Select
                name='time'
                value={appointment.time}
                onChange={handleChange}
                label='Time'
              >
                {generateTimeSlots().map((slot) => (
                  <MenuItem key={slot} value={slot}>
                    {slot}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Book Appointment
            </Button>
            {!isSlotAvailable && (
              <Typography color='error' style={{ textAlign: 'center' }}>
                The selected time slot is not available.
              </Typography>
            )}
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Appointment;
