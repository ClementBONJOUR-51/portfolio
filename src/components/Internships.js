import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import img_sncf from '../assets/img/SNCF.png';
import img_madara from '../assets/img/madara.png';
import img_albelli from '../assets/img/Albelli.svg';
import MultiLingualContent from '../utils/multilingualContent';

function Internships() {
    return (
        <Container className="container text-center my-5 pt-5">
            <div id='internships' style={{ position: "absolute", marginTop: "-100px" }}></div>
            <h1><MultiLingualContent contentID='Internships' /></h1>
            <img src={img_line} alt="line" className="img-fluid mb-5" />

            <Row>
                <Col className='bg-light p-2 m-2'>
                    {/* <h2>SNCF Réseau | DUT</h2> */}
                    <img src={img_sncf} alt="line" className="img-fluid my-2" width={100} />
                    <p className='m-3 text-start'><MultiLingualContent contentID='describe_SNCF' /></p>
                    {/* <Button color="danger rounded-0" style={{ cursor: "no-drop" }}><MultiLingualContent contentID='CONFIDENTIAL_PROJECT' /></Button> */}
                </Col>
                <Col className='bg-light p-2 m-2'>
                    {/* <h2>MADARA | BTS</h2> */}
                    <img src={img_madara} alt="line" className="img-fluid my-2" width={150} />
                    <p className='m-3 text-start'><MultiLingualContent contentID='describe_MADARA' /></p>
                </Col>

            </Row>
            <Row>
                <Col className='bg-light p-2 m-2'>
                    {/* <h2>Alternance SQUIRREL</h2> */}
                    <img src="https://www.squirrel.fr/wp-content/uploads/2021/09/Logo-3-418x100.png" alt="line" className="img-fluid my-2" width={180} />
                    <p className='m-3 text-start'><MultiLingualContent contentID='describe_SQUIRREL' /></p>
                </Col>
                <Col className='bg-light p-2 m-2'>
                    {/* <h2>ALBELLI PHOTOBOX GROUP</h2> */}
                    <img src={img_albelli} alt="line" className="img-fluid my-2" width={150} />
                    <p className='m-3 text-start' ><MultiLingualContent contentID='describe_ALBELLI' /></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Internships;
