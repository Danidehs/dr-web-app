import React from 'react';
import { Typography } from '@mui/material';

const About = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', marginBottom: 20, marginTop: 20 }}
      >
        About the Doctor
      </Typography>
      <p className='text-center'>
        Dr. Erika Serna, a renowned specialist in aesthetic medicine...
      </p>
    </div>
  );
};

export default About;
