import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Appointment from './components/Appointment';
import AppointmentsList from './components/AppointmentList';
import Contact from './components/Contact';

function App() {
  return (
    <div className='app-container'>
      <Home />
      <About />
      <Services />
      <Appointment />
      <AppointmentsList />
      <Contact />
    </div>
  );
}

export default App;
