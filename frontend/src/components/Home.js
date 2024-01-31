import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Button, Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContainer} style={{ padding: '50px' }}>
      <Container>
        <Typography variant='h3' gutterBottom>
          Welcome to Our Clinic
        </Typography>
        <Typography variant='h6' style={{ color: 'black' }}>
          Dedicated to providing the best in aesthetic medicine. We value your
          health and well-being above all else.
        </Typography>
        <Button
          variant='contained'
          color='secondary'
          size='large'
          className='goldGradient'
          style={{ marginTop: '16px', borderRadius: '10px' }}
        >
          Book an Appointment
        </Button>
      </Container>
    </div>
  );
};

export default Home;
