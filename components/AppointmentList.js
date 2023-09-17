import React, { useEffect, useState } from 'react';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to fetch the list of appointments
    async function fetchAppointments() {
      try {
        const response = await fetch('/api/appointments');
        if (response.ok) {
          const data = await response.json();
          setAppointments(data);
        } else {
          console.error('Failed to fetch appointments.');
        }
      } catch (error) {
        console.error('An error occurred while fetching appointments.', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      {loading ? (
        <p>Loading appointments...</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id}>
              User ID: {appointment.userId}, Date: {appointment.date}, Description: {appointment.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AppointmentList;
