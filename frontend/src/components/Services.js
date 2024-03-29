import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  servicesContainer: {
    padding: theme.spacing(8, 2),
  },
  serviceCard: {
    marginTop: theme.spacing(4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
    borderRadius: '12px',
  },
  serviceTitle: {
    flexGrow: 1,
  },
  serviceButton: {
    justifyContent: 'right',
  },
}));

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
            <Card
              className={classes.serviceCard}
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                fontWeight: 'bold',
              }}
            >
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

//   return (
//     <div style={{ padding: 20 }}>
//       <Typography
//         variant='h4'
//         style={{ textAlign: 'center', marginBottom: 20, marginTop: 20 }}
//       >
//         Our Services
//       </Typography>
//       <Grid
//         container
//         spacing={2}
//         justifyContent='center'
//         style={{ display: 'flex', alignItems: 'stretch' }}
//       >
//         {services.map((service, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 height: '100%',
//               }}
//             >
//               <CardContent style={{ flexGrow: 1 }}>
//                 <Typography variant='h6' component='h2'>
//                   {service.title}
//                 </Typography>
//                 <Typography
//                   variant='body2'
//                   component='p'
//                   style={{ marginTop: 15 }}
//                 >
//                   {service.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <div style={{ size: 'small', textAlign: 'right', marginTop: 10 }}>
//         <Button variant='contained' color='primary'>
//           More Info
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Services;
