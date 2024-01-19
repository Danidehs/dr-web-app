import { Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', marginBottom: 20, marginTop: 20 }}
      >
        Contact Us
      </Typography>
      <p className='text-center'>
        Email: contact@clinic.com
        <br />
        Phone: +34 123-456-7890
      </p>
    </div>
  );
};

export default Contact;
