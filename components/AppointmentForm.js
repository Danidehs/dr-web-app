import React, { useState } from 'react';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    userId: '',
    date: '',
    description: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API request to create a new appointment using formData
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Appointment created successfully');
        // You can reset the form here if needed
        setFormData({
          userId: '',
          date: '',
          description: '',
        });
      } else {
        setMessage('Error creating appointment. Please check your input.');
      }
    } catch (error) {
      setMessage('An error occurred while creating the appointment.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date and Time:</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
