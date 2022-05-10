import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import img_bg_SPP from '../assets/img/bg_SPP.jpg';
import FlipCard from './FlipCard';


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
                <Row className='my-5'>
                    <Col className='px-2'>
                        <FlipCard title={"Géneration de carte"} />
                    </Col>
                    <Col className='px-2'>
                        <FlipCard title={"Paysage animé sans fin"} />
                    </Col>
                    <Col className='px-2'>
                        <FlipCard title={"Génération d'un Labyrinthe"} />
                    </Col>
                </Row>
                <Row>
                    <Col className='px-2'>
                        <FlipCard title={"Géneration de carte"} />
                    </Col>
                    <Col className='px-2'>
                        <FlipCard title={"Paysage animé sans fin"} />
                    </Col>
                    <Col className='px-2'>
                        <FlipCard title={"Génération d'un Labyrinthe"} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PersonalWork;
