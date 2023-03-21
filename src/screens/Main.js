import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Internships from '../components/Internships';
import PersonalWork from '../components/PersonalWork';
import Schooling from '../components/Schooling';
import Contact from '../components/Contact';
import Cesi from '../components/CESI';

function Main() {

  return (
    <div>
      <Home />
      <About />
      <Skills />
{/*       <Cesi /> */}
      <Internships />
      <PersonalWork />
      <Schooling />
      <Contact />
    </div>
  );
}

export default Main;
