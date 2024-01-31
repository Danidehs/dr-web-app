import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Button, Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(4),
  },
  heroButton: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContainer}>
      <Container>
        <Typography variant='h3' gutterBottom>
          Welcome to Our Clinic
        </Typography>
        <Typography variant='h6'>
          Dedicated to providing the best in aesthetic medicine.
        </Typography>
        <Button
          variant='contained'
          color='secondary'
          className={classes.heroButton}
        >
          Book an Appointment
        </Button>
      </Container>
    </div>
  );
};

export default Home;
