import React from 'react';
import img_background from '../assets/img/background.jpg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import logo from '../assets/img/BC.png';

import imgDev from '../assets/img/dev.png'

function Home() {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="bg-image" style={{ backgroundImage: `url(${img_background}`, backgroundSize: 'cover', backgroundPosition: 'center', height: "100vh" }}>
      <div id='home' style={{ position: "absolute", marginTop: "-100px" }}></div>
      <Navbar light expand="md" className='py-4 bg-white' fixed="top">
        <NavbarBrand href="/portfolio" className='ms-5'><img alt="" src={logo} height="30px" width="30px" className='me-2' />Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className='d-flex justify-content-around' style={{ width: "60vw", marginLeft: "50px", marginRight: "100px" }}>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#cesi">Engineering themes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#internships">Internships</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="#Computer_manitoring">Computer monitoring</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="#personal_works">Personal works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#schooling">Schooling</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div style={{ paddingTop: "40vh", paddingLeft: "30vh" }}>
        <h1>Clément BONJOUR</h1>
        <h5>Computer science student</h5>
        <br />
        <div class="col-md-6 text-right">
          <img src={imgDev} alt="dev" style={{position: 'absolute',height:'400px', bottom:'-6px', right:'200px'}}/>
        </div>
        {/* <Button outline size="lg" className='rounded-0 text-dark border-dark'>Découvrez moi</Button> */}
        <a type="button" className="btn btn-outline-dark rounded-0 btn-lg" href="#about">Discover me</a>
      </div>
    </div >
  );
}

export default Home;
