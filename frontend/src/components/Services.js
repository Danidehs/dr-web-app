import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@mui/material';

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    servicesContainer: {
      padding: theme.spacing(8, 2),
    },
    serviceCard: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    serviceTitle: {
      flexGrow: 1,
    },
    serviceButton: {
      justifyContent: 'center',
    },
  };
});

const Services = () => {
  const classes = useStyles();
  const services = [
    {
      title: 'Botox',
      description:
        'A quick and effective treatment for reducing wrinkles and fine lines.',
    },
    {
      title: 'Fillers',
      description:
        'Enhance facial contours and restore volume with our safe fillers.',
    },
    {
      title: 'Skincare Treatments',
      description:
        'Personalized skincare solutions for radiant and healthy skin.',
    },
  ];

  return (
    <div className={classes.servicesContainer}>
      <Typography variant='h4' gutterBottom align='center'>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className={classes.serviceCard}>
              <CardContent className={classes.serviceTitle}>
                <Typography gutterBottom variant='h5' component='h2'>
                  {service.title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions className={classes.serviceButton}>
                <Button size='small' color='secondary'>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;
