import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <p>
          My Portfolio ! <code>WIP</code> Good visit
        </p>
        <Link to="/contact">Contact</Link>
      </header>
    </div>
  );
}

export default Home;
