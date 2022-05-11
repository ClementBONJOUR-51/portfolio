import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import SPP from '../components/SPP';
import Internships from '../components/Internships';
import PersonalWork from '../components/PersonalWork';
import Schooling from '../components/Schooling';

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
    </div>
  );
}

export default Main;
