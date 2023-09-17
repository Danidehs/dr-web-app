import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentList from '../components/AppointmentList';

function HomePage() {
  return (
    <div>
      <h1>Dermatologist Office</h1>
      <h2>Dr. Esy Serna</h2>
      <p>Specializing in Dermatology</p>
      <p>Contact: +## ###-#######</p>
        {/* Appointment Scheduling Form */}
        <AppointmentForm />

        {/* List of Appointments */}
        <AppointmentList />
    </div>
  );
}

export default HomePage;