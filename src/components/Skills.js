import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import img_bg_skill from '../assets/img/bg_skills.jpg';
import MultiLingualContent from '../utils/multilingualContent';

const ProgressBar = ({ value }) => {
    return (
        <div className="progress rounded-0" style={{ backgroundColor: "#cfcfcf" }}>
            <div className="progress-bar" role="progressbar" style={{ width: `${value + 0}%`, backgroundColor: "#212121" }} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    );
}

function Skills() {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${img_bg_skill})`, minHeight: "300px",
                backgroundAttachment: "fixed", backgroundPosition: "center",
                backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}></div>
            <Container className="container text-center bg-white p-5" style={{ marginTop: "-100px", boxShadow: "0px 0px 80px 0.05px grey" }}>
                <div id='skills' style={{ position: "absolute", marginTop: "-100px" }}></div>
                <h1><MultiLingualContent contentID="Skills" /></h1>
                <img src={img_line} alt="line" className="img-fluid mb-5" />
                <Row className='my-5'>
                    <Col>
                        <h4 className='fw-normal text-start'>HTML/CSS</h4>
                        <ProgressBar value={95} />
                    </Col>
                    <Col>
                        <h4 className='fw-normal text-start'>JAVASCRIPT</h4>
                        <ProgressBar value={90} />
                    </Col>
                    <Col>
                        <h4 className='fw-normal text-start'>PHP</h4>
                        <ProgressBar value={80} />
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        <h4 className='fw-normal text-start'>SQL</h4>
                        <ProgressBar value={70} />
                    </Col>
                    <Col>
                        <h4 className='fw-normal text-start'>RUBY</h4>
                        <ProgressBar value={10} />
                    </Col>
                    <Col>
                        <h4 className='fw-normal text-start'>JAVA</h4>
                        <ProgressBar value={60} />
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        <h4 className='fw-normal text-start'>GOLANG</h4>
                        <ProgressBar value={50} />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        <h4 className='fw-normal text-start'>REACT (JS/NATIVE)</h4>
                        <ProgressBar value={90} />
                    </Col>
                    <Col>
                        <h4 className='fw-normal text-start'>SYMFONY</h4>
                        <ProgressBar value={70} />
                    </Col>
                    <Col>
                        <h4 className='fw-normal text-start'>ANGULAR</h4>
                        <ProgressBar value={40} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;
