import React from 'react';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', marginBottom: 20, marginTop: 20 }}
      >
        Welcome to Our Clinic
      </Typography>
      <p className='text-center'>
        Providing expert care in aesthetic medicine.
      </p>
    </div>
  );
};

export default Home;
