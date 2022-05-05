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
      <Navbar light expand="md">
        <NavbarBrand href="/">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className='d-flex justify-content-around ms-5' style={{ width: "80vw" }}>
            <NavItem>
              <NavLink href="/components/">ACCUEIL</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">À PROPOS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">PPE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">STAGES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">VEILLE INFORMATIQUE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">RÉCENT TRAVAUX</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">SUIVI SCOLAIRE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">CONTACT</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div style={{ paddingTop: "40vh", paddingLeft: "30vh" }}>
        <h1>Clément BONJOUR</h1>
        <h5>Etudiant en informatique</h5>
        {/* <Button outline size="lg" className='rounded-0 text-dark border-dark'>Découvrez moi</Button> */}
        <button type="button" className="btn btn-outline-dark rounded-0 btn-lg">Découvrez moi</button>
      </div>
    </div >
  );
}

export default Home;
