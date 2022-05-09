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

function Home() {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="bg-image" style={{ backgroundImage: `url(${img_background}`, backgroundSize: 'cover', backgroundPosition: 'center', height: "100vh" }}>
      <Navbar light expand="md" className='pt-4'>
        <NavbarBrand href="/" className='ms-5'>Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className='d-flex justify-content-around' style={{ width: "60vw", marginLeft: "200px", marginRight: "200px" }}>
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
              <NavLink href="#spp">SPP</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#internships">Internships</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Computer_manitoring">Computer manitoring</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#recent_works">Recent works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Schooling">Schooling</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div style={{ paddingTop: "40vh", paddingLeft: "30vh" }}>
        <h1>Clément BONJOUR</h1>
        <h5>Etudiant en informatique</h5>
        <br />
        {/* <Button outline size="lg" className='rounded-0 text-dark border-dark'>Découvrez moi</Button> */}
        <button type="button" className="btn btn-outline-dark rounded-0 btn-lg">Découvrez moi</button>
      </div>
    </div >
  );
}

export default Home;
