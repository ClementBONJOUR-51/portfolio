import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse, Card, CardBody } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import cv from '../assets/CV.pdf'
import imgProfil from '../assets/img/profil.png';

function About() {

    const [CollapseCV, setCollapseCV] = useState(false);
    return (
        <Container className="container text-center mt-5 p-5">
            <div id='about' style={{ position: "absolute", marginTop: "-100px" }}></div>
            <h1>About</h1>
            <img src={img_line} alt="line" className="img-fluid mb-5" />
            <Row className='mt-5'>
                <Col><img src={imgProfil} alt="line" className="img-fluid mb-5 h-50" /></Col>
                <Col>
                    <p style={{ textAlign: "start" }}>
                        Hello ! <span role="img" aria-label="hello">🖐</span> <br />
                        My name is Clément BONJOUR, student in engineering school<br />at the CESI school in Reims
                    </p>
                    <p style={{ textAlign: "start" }}>
                        <Button onClick={() => setCollapseCV(!CollapseCV)} className='rounded-0 p-3 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>My resume</Button>
                    </p>
                </Col>
            </Row>
            <Collapse isOpen={CollapseCV}>
                <Card>
                    <CardBody>
                        <embed src={cv} width="800" height="500" />
                        {/* <iframe src={cv} width="100%" height="500px" /> */}
                    </CardBody>
                </Card>
            </Collapse>
        </Container >
    );
}

export default About;