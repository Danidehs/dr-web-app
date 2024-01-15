import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Appointment from './components/Appointment';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Services />
      <Appointment />
      <Contact />
    </div>
  );
}

export default App;
