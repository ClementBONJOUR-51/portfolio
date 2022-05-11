import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import img_bg_SPP from '../assets/img/bg_SPP.jpg';
import FlipCard from './FlipCard';

import img_bruit from '../assets/img/bruit.jpg'
import img_rain from '../assets/img/rain.png'
import img_lab from '../assets/img/lab.png'
import img_aqua from '../assets/img/aqua.png'

import ModalBruit from './modals/ModalBruit'


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
                <Row className='my-4'>
                    <Col className='px-2'>
                        <FlipCard title={"Géneration de carte"} img_front={img_bruit}>
                            <ModalBruit />
                        </FlipCard>
                    </Col>
                    <Col className='px-2'>
                        <FlipCard title={"Paysage animé sans fin"} img_front={img_rain}>
                        </FlipCard>
                    </Col>
                    <Col className='px-2'>
                        <FlipCard title={"Génération d'un Labyrinthe"} img_front={img_lab}>
                        </FlipCard>
                    </Col>
                </Row>
                <Row>
                    <Col className='px-2'>
                        <FlipCard title={"Géneration de carte"} img_front={img_aqua}>
                        </FlipCard>
                    </Col>
                    <Col className='px-2'>
                    </Col>
                    <Col className='px-2'>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PersonalWork;
