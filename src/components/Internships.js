import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import img_line from '../assets/img/lines.svg';

function Internships() {
    return (
        <Container className="container text-center mt-5 p-5" id='internships'>
            <Row>
                <Col></Col>
                <Col>
                    <h1>Internships</h1>
                    <img src={img_line} alt="line" className="img-fluid mb-5" />

                    <h2>SNCF Réseau | DUT</h2>
                    <p className='m-5'>Développement d'une application web pour les agents de la SNCF (intranet)</p>
                    <Button color="danger rounded-0">PROJET CONFIDENTIEL</Button>

                    <hr className='m-5' />

                    <h2>MADARA | BTS</h2>

                    <hr className='m-5' />

                    <h2>SQUIRREL | Licence et</h2>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Internships;
