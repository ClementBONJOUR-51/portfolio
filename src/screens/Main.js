import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import SPP from '../components/SPP';
import Internships from '../components/Internships';
import PersonalWork from '../components/PersonalWork';
import Schooling from '../components/Schooling';
import Contact from '../components/Contact';

function Main() {

  return (
    <div>
      <Home />
      <About />
      <Skills />
      <SPP />
      <Internships />
      <PersonalWork />
      <Schooling />
      <Contact />
    </div>
  );
}

export default Main;
