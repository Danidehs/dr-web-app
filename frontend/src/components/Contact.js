import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Typography, Container, Grid, TextField, Button } from '@mui/material';

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    contactContainer: {
      padding: theme.spacing(8, 2),
    },
  };
});

const Contact = () => {
  const classes = useStyles();

  return (
    <Container className={classes.contactContainer}>
      <Typography variant='h4' gutterBottom align='center'>
        Contact Us
      </Typography>

      <Grid container spacing={4} justifyContent='center'>
        <Grid item xs={12} md={6}>
          <form
            id='contact'
            className='formContainerBox'
            noValidate
            autoComplete='on'
          >
            <TextField
              fullWidth
              label='Name'
              margin='normal'
              className='lightGrayInput'
            />
            <TextField
              fullWidth
              label='Email'
              margin='normal'
              className='lightGrayInput'
            />
            <TextField
              fullWidth
              label='Message'
              multiline
              rows={4}
              margin='normal'
              className='lightGrayInput'
            />
            <Button
              fullWidth
              variant='contained'
              size='large'
              color='secondary'
              style={{ marginTop: '16px', borderRadius: '10px' }}
            >
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
