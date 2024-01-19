import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const Services = () => {
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
    <div style={{ padding: 20 }}>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', marginBottom: 20, marginTop: 20 }}
      >
        Our Services
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        style={{ display: 'flex', alignItems: 'stretch' }}
      >
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <CardContent style={{ flexGrow: 1 }}>
                <Typography variant='h6' component='h2'>
                  {service.title}
                </Typography>
                <Typography
                  variant='body2'
                  component='p'
                  style={{ marginTop: 15 }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ size: 'small', textAlign: 'right', marginTop: 10 }}>
        <Button variant='contained' color='primary'>
          More Info
        </Button>
      </div>
    </div>
  );
};

export default Services;
