// Footer.js
import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container maxWidth='lg'>
        <div className='footer-top-border'></div>
        <Grid container spacing={4} className='footer-content'>
          <Grid item xs={12} md={4}>
            <Typography variant='body1' className='footer-heading'>
              Our Motto
            </Typography>
            <Typography variant='body2'>
              We value your health and well-being above all else while aiming to
              natural beauty.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='body1' className='footer-heading'>
              Follow Us!
            </Typography>
            <div className='footer-socials'>
              <MuiLink href='https://instagram.com' target='_blank'>
                <InstagramIcon />
              </MuiLink>
              <MuiLink href='https://linkedin.com' target='_blank'>
                <LinkedInIcon />
              </MuiLink>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='body1' className='footer-heading'>
              Contact
            </Typography>
            <Typography variant='body2'>Email: info@example.com</Typography>
            <Typography variant='body2'>Phone: +1 234 567 890</Typography>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <Button size='small' color='secondary'>
                Or contact us here!
              </Button>
            </Link>
          </Grid>
        </Grid>
        <div className='footer-bottom'>
          <Typography variant='caption' className='footer-copy'>
            © {currentYear} Made by Daniel Hernandez
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
