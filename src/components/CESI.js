import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import img_line from '../assets/img/lines.svg';

import imgAdminSI from '../assets/img/AdminSI.jpg';
import imgPS from '../assets/img/ProgSyst.jpg';
import imgBigData from '../assets/img/Info_Stockage.jpg';
import imgAlgo from '../assets/img/Traitementdonnees.jpg';

function Cesi() {
    return (
        <Container className="container text-center mt-5">
            <div id='cesi' style={{ position: "absolute", marginTop: "-100px" }}></div>
            <h1>Engineering themes</h1>
            <img src={img_line} alt="line" className="img-fluid mb-5" />
            <Row>
                <Col>
                    <Card>
                        <CardImg top width="100%" height="300px" src={imgAdminSI} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Administration of the IS</CardTitle>
                            <CardSubtitle style={{ color: "grey" }}>27/09/2021 - 09/11/2021</CardSubtitle>
                            <Button className='rounded-0 py-2 px-3  text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>Show</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg top width="100%" height="300px" src={imgPS} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>System programming</CardTitle>
                            <CardSubtitle style={{ color: "grey" }}>10/11/2021 - 17/12/2021</CardSubtitle>
                            <Button className='rounded-0 py-2 px-3 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>Show</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg top width="100%" height="300px" src={imgAlgo} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Storage and Big Data</CardTitle>
                            <CardSubtitle style={{ color: "grey" }}>02/05/2022 - 20/05/2022</CardSubtitle>
                            <Button className='rounded-0 py-2 px-3 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>Show</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <Card>
                        <CardImg top width="100%" height="300px" src={imgBigData} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Advanced algorithms</CardTitle>
                            <CardSubtitle style={{ color: "grey" }}>30/05/2022 - 01/07/2022</CardSubtitle>
                            <Button className='rounded-0 py-2 px-3 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>Show</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <hr />
        </Container>

    );
}

export default Cesi;
