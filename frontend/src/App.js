import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Appointment from './components/Appointment';
import AppointmentsList from './components/AppointmentList';
import Contact from './components/Contact';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7ce380',
    },
    secondary: {
      main: '#cdb450',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app-container'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/bookAppointment' element={<Appointment />} />
          </Routes>
          {/* <AppointmentsList /> */}
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
