import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import img_line from '../assets/img/lines.svg';

function ModalBruit() {
    return (
        <Container className="container text-center mt-5 p-5">
            <Row>
                <Col></Col>
                <Col>
                    <h1>About</h1>
                    <img src={img_line} alt="line" className="img-fluid mb-5" />
                    <p>
                        Hello ! <span role="img" aria-label="hello">🖐</span> <br />
                        My name is Clément BONJOUR, student in engineering school at the CESI school in Reims
                    </p>
                    <Button className='rounded-0 p-3 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>My resume</Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default ModalBruit;
