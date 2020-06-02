import React from 'react';
import './App.css';
import Navgbar from './Components/Navgbar';
import Footer from './Components/Footer';
import Landingpage from './Components/Landingpage';
import About from './Components/About';
import Contact from './Components/Contact';
import Teams from './Components/Teams';
import Conquests from './Components/Conquests';

function App() {
  return (
    <div style={{backgroundColor:"black"}}>
    
      <Navgbar />
      <Landingpage />
      <About />
      <Teams />
      <Conquests />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
