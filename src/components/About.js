import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse, Card, CardBody } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import cv from '../assets/Clement-BONJOUR_Resume.pdf'
import imgProfil from '../assets/img/profil.png';
import MultiLingualContent from '../utils/multilingualContent';

function About() {

    const [CollapseCV, setCollapseCV] = useState(false);
    return (
        <Container className="container text-center mt-5 p-5">
            <div id='about' style={{ position: "absolute", marginTop: "-100px" }}></div>
            <h1><MultiLingualContent contentID="About" /></h1>
            <img src={img_line} alt="line" className="img-fluid mb-5" />
            <Row className='mt-5'>
                <Col><img src={imgProfil} alt="line" className="mb-5" height="300px" /></Col>
                <Col>
                    <p style={{ textAlign: "start" }}>
                        <MultiLingualContent contentID="Hello" /> <span role="img" aria-label="hello">🖐</span> <br />
                        <MultiLingualContent contentID="Presentation1" /><br />
                        <MultiLingualContent contentID="Presentation2" />
                        <br />
                        <br />
                        <MultiLingualContent contentID="Presentation3" />
                        <br />
                        <MultiLingualContent contentID="Presentation4" />
                        <br />
                        <MultiLingualContent contentID="Presentation5" />
                        <br />
                        <MultiLingualContent contentID="Presentation6" />
                        <br />
                        <MultiLingualContent contentID="Presentation7" />
                    </p>
                    <p style={{ textAlign: "start" }}>
                        <Button href="#resume" onClick={() => setCollapseCV(!CollapseCV)} className='rounded-0 p-3 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}><MultiLingualContent contentID="My_resume" /></Button>
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
                    <Button onClick={() => setCollapseCV(!CollapseCV)} className='rounded-0 p-2 text-uppercase fw-bold mt-3 ' color="danger" href="#about"><MultiLingualContent contentID="Close_Resumé"/></Button>
                </Card>
            </Collapse>
        </Container >
    );
}

export default About;
