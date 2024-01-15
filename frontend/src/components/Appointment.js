import React, { useState } from 'react';
import axios from 'axios';

const Appointment = () => {
  const [appointment, setAppointment] = useState({
    patientName: '',
    email: '',
    date: '',
    treatmentType: '',
  });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/appointments', appointment);
      // Reset form or provide user feedback
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold text-center my-10'>
        Book an Appointment
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='patientName'
          placeholder='Your Name'
          value={appointment.patientName}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={appointment.email}
          onChange={handleChange}
        />
        <input
          type='date'
          name='date'
          value={appointment.date}
          onChange={handleChange}
        />
        <select
          name='treatmentType'
          value={appointment.treatmentType}
          onChange={handleChange}
        >
          <option value=''>Select Treatment</option>
          <option value='Botox'>Botox</option>
          <option value='Fillers'>Fillers</option>
          <option value='Skincare'>Skincare Treatments</option>
          {/* Add more options as needed */}
        </select>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;
