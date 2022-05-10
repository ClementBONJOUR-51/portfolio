import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import img_line from '../assets/img/lines.svg';

const ProgressBar = ({ value }) => {
    return (
        <div className="progress rounded-0" style={{ backgroundColor: "#dfdfdf" }}>
            <div className="progress-bar" role="progressbar" style={{ width: `${value + 0}%`, backgroundColor: "#212121" }} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    );
}

function Skills() {
    return (
        <Container className="container text-center mt-5 p-5" id='skills'>
            <h1>Skills</h1>
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
    );
}

export default Skills;
