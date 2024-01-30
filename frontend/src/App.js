import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Appointment from './components/Appointment';
import AppointmentsList from './components/AppointmentList';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Appointment />
          <AppointmentsList />
          <Route path='/contact' component={Contact} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// function App() {
//   return (
//     <div className='app-container'>
//       <Home />
//       <About />
//       <Services />
//       <Appointment />
//       <AppointmentsList />
//       <Contact />
//     </div>
//   );
// }

// export default App;
