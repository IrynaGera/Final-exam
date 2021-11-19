import React from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Services from './Services/Services';
import Works from './Works/Works';
import Team from './Team/Team';
import Contact from './Contact/Contact';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/works" element={<Works />}/>
      <Route path="/team" element={<Team />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  )
}

export default App