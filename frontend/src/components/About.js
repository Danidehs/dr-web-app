import React from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { Typography, Container, Grid } from '@mui/material';
import aboutImage from '../assets/aboutUs-img2.png';

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    aboutContainer: {
      padding: theme.spacing(8, 2),
      textAlign: 'center',
    },
    aboutImage: {
      maxWidth: '80%',
      height: 'auto',
      borderRadius: '100%',
      marginLeft: theme.spacing(4),
    },
    aboutText: {
      paddingTop: theme.spacing(4),
      color: 'black',
    },
  };
});

const About = () => {
  const classes = useStyles();

  return (
    <Container className={classes.aboutContainer}>
      <Grid container spacing={4} alignItems='center' justifyContent='center'>
        <Grid item xs={12} sm={6}>
          <img
            src={aboutImage}
            alt='About the clinic'
            className={classes.aboutImage}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h4' gutterBottom>
            Who We Are
          </Typography>
          <Typography variant='body1' className={classes.aboutText}>
            Our clinic is dedicated to providing top-notch aesthetic medicine
            services. With a team of experienced professionals, we ensure that
            your beauty goals are met with the utmost care and precision.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
