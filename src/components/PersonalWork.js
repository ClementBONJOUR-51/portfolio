import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import img_bg_SPP from '../assets/img/bg_SPP.jpg';

function PersonalWork() {
    return (
        <div id='spp'>
            <div style={{
                backgroundImage: `url(${img_bg_SPP})`, minHeight: "300px",
                backgroundAttachment: "fixed", backgroundPosition: "center",
                backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}></div>
            <Container className="container text-center bg-white p-5" id='about' style={{ marginTop: "-100px", boxShadow: "0px 0px 80px 0.05px grey" }}>
                <h1>Personal Works</h1>
                <img src={img_line} alt="line" className="img-fluid mb-5" />
                <Row>
                    <Col className='px-5'>
                        <h4>Géneration de carte</h4>
                    </Col>
                    <Col className='px-5'>
                        <h4>Paysage animé sans fin</h4>
                    </Col>
                    <Col className='px-5'>
                        <h4>Génération d'un Labyrinthe</h4>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </div>
    );
}

export default PersonalWork;
