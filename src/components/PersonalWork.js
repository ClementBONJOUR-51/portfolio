import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import img_bg_work from '../assets/img/bg_project.jpg';
import FlipCard from './FlipCard';

import img_bruit from '../assets/img/relief.jpg'
import img_rain from '../assets/img/rainwindow.jpg'
import img_lab from '../assets/img/maze.jpg'
import img_aqua from '../assets/img/joystick.jpg'
import img_flock from '../assets/img/flock.jpg'
import img_worldboss from '../assets/img/worldboss.jpg'

import ModalPerlin from './modals/ModalPerlin';
import ModalMaze from './modals/ModalMaze';
import ModalJoystick from './modals/ModalJoystick';

import MultiLingualContent from '../utils/multilingualContent';


function PersonalWork() {

    return (
        <div>
            <div style={{
                backgroundImage: `url(${img_bg_work})`, minHeight: "300px",
                backgroundAttachment: "fixed", backgroundPosition: "center",
                backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}></div>
            <Container className="container text-center bg-white p-5" id='about' style={{ marginTop: "-100px", boxShadow: "0px 0px 80px 0.05px grey" }}>
                <div id='personal_works' style={{ position: "absolute", marginTop: "-200px" }}></div>
                <h1><MultiLingualContent contentID='Personal_works' /></h1>
                <img src={img_line} alt="line" className="img-fluid mb-5" />
                <Row className='my-4'>
                    <Col className='px-2'>
                        <FlipCard title={<MultiLingualContent contentID="Map_generation" />} img_front={img_bruit}>
                            <Row>
                                <Col> <a className='btn rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121", color: "white" }} href="https://clementbonjour-51.github.io/MapGen/map.html" target="_blank" rel="noopener noreferrer">DEMO</a></Col>
                                <Col><ModalPerlin /></Col>
                            </Row>

                        </FlipCard>
                    </Col>
                    <Col className='px-2'>
                        <FlipCard title={<MultiLingualContent contentID="Endless_animated_landscape" />} img_front={img_rain}>
                            <a className='btn rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121", color: "white" }} href="https://clementbonjour-51.github.io/rain/rain.html" target="_blank" rel="noopener noreferrer">DEMO</a>
                        </FlipCard>
                    </Col>
                    <Col className='px-2'>
                        <FlipCard title={<MultiLingualContent contentID="Generating_a_Labyrinth" />} img_front={img_lab}>
                            <Row>
                                <Col> <a className='btn rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121", color: "white" }} href="https://clementbonjour-51.github.io/maze/index.html?size=100&scale=10" target="_blank" rel="noopener noreferrer">DEMO</a></Col>
                                <Col><ModalMaze /></Col>
                            </Row>

                        </FlipCard>
                    </Col>
                    <Col className='px-2'>
                        <FlipCard title={<MultiLingualContent contentID="Joystick_mouse_movement" />} img_front={img_aqua}>
                            <Row>
                                <Col><a className='btn rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121", color: "white" }} href="https://clementbonjour-51.github.io/webjoystick/aqua.html" target="_blank" rel="noopener noreferrer">DEMO</a></Col>
                                <Col><ModalJoystick /></Col>
                            </Row>

                        </FlipCard>
                    </Col>
                    <Col className='px-2'>
                        <FlipCard title={<MultiLingualContent contentID="Flocking_behavior_of_birds" />} img_front={img_flock}>
                            <Row>
                                <Col><a className='btn rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121", color: "white" }} href="https://codepen.io/ClementBONJOUR-51/pen/XWBEQpW" target="_blank" rel="noopener noreferrer">DEMO</a></Col>
                            </Row>
                        </FlipCard>
                    </Col>
                    <Col className='px-2'>
                        <FlipCard title={<MultiLingualContent contentID="WorldBoss" />} img_front={img_worldboss}>
                            <Row>
                                <Col>Work in Progress</Col>
                            </Row>
                        </FlipCard>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default PersonalWork;
