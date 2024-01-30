import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' className={classes.logo}>
          Doctor.
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
        <Button
          color='secondary'
          variant='contained'
          className={classes.menuButton}
        >
          Book Now
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
