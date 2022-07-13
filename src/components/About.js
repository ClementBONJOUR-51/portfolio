import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse, Card, CardBody } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import cv from '../assets/Clement-BONJOUR_Resume.pdf'
import imgProfil from '../assets/img/profil.png';

function About() {

    const [CollapseCV, setCollapseCV] = useState(false);
    return (
        <Container className="container text-center mt-5 p-5">
            <div id='about' style={{ position: "absolute", marginTop: "-100px" }}></div>
            <h1>About</h1>
            <img src={img_line} alt="line" className="img-fluid mb-5" />
            <Row className='mt-5'>
                <Col><img src={imgProfil} alt="line" className="mb-5" height="300px" /></Col>
                <Col>
                    <p style={{ textAlign: "start" }}>
                        Hello ! <span role="img" aria-label="hello">🖐</span> <br />
                        My name is Clément BONJOUR, student in engineering school<br />at the CESI school in Reims
                        <br />
                        <br />
                        Passionate about innovation and new technologies, I like to learn about robotics, artificial intelligence and spaceflight. I am also a great lover of art, especially music, drawing through computer graphics and photography.
                         <br />
                        My pronounced taste for creation and aesthetics allows me to produce, as far as possible, meticulous work with the intention of always doing better.
                        <br />
                        I want to later become a team leader in IT because this field is changing every day and we never stop learning new things and above all, I like logical challenges.
                        <br />
                        Courteous and curious, do not hesitate to contact me to discuss, I would be delighted.
                        <br />
                        Good visit and good day to you 🙂.
                    </p>
                    <p style={{ textAlign: "start" }}>
                        <Button href="#resume" onClick={() => setCollapseCV(!CollapseCV)} className='rounded-0 p-3 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>My resume</Button>
                    </p>
                </Col>
            </Row>
            <Collapse isOpen={CollapseCV}>
                <div id='resume' style={{ position: "absolute", marginTop: "-100px" }}></div>
                <Card>
                    <CardBody>
                        <embed src={cv} width="800" height="800" />
                        {/* <iframe src={cv} width="100%" height="500px" /> */}
                    </CardBody>
                    <Button onClick={() => setCollapseCV(!CollapseCV)} className='rounded-0 p-2 text-uppercase fw-bold mt-3 ' color="danger" href="#about">Close Resumé</Button>
                </Card>
            </Collapse>
        </Container >
    );
}

export default About;
