import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    appBar: {
      backgroundColor: '#4caf50',
    },
    logo: {
      flexGrow: 1,
      cursor: 'pointer',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
    menuButton: {
      marginLeft: theme.spacing(1),
    },
  };
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' className={classes.logo}>
          Dr. Erika.
        </Typography>
        <Link to='/' className={classes.link}>
          <Button color='inherit'>Home</Button>
        </Link>
        <Link to='/about' className={classes.link}>
          <Button color='inherit'>About</Button>
        </Link>
        <Link to='/services' className={classes.link}>
          <Button color='inherit'>Services</Button>
        </Link>
        <Link to='/contact' className={classes.link}>
          <Button color='inherit'>Contact</Button>
        </Link>
        <Link to='/bookAppointment' className={classes.link}>
          <Button
            color='secondary'
            variant='contained'
            style={{ marginLeft: '15px', borderRadius: '50px' }}
          >
            Book Now
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
