import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold text-center my-10'>Appointments</h1>
      <table className='min-w-full table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Patient Name</th>
            <th className='px-4 py-2'>Email</th>
            <th className='px-4 py-2'>Date</th>
            <th className='px-4 py-2'>Time</th>
            <th className='px-4 py-2'>Treatment Type</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td className='border px-4 py-2'>{appointment.patientName}</td>
              <td className='border px-4 py-2'>{appointment.email}</td>
              <td className='border px-4 py-2'>
                {new Date(appointment.date).toLocaleDateString()}
              </td>
              <td className='border px-4 py-2'>{appointment.time}</td>
              <td className='border px-4 py-2'>{appointment.treatmentType}</td>
              <button
                onClick={() => deleteAppointment(appointment._id)}
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsList;
