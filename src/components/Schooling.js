import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import img_line from '../assets/img/lines.svg';
import 'react-vertical-timeline-component/style.min.css';

function Schooling
    () {
    return (
        <Container id="Schooling" className="container text-center mt-5 p-5">
            <div id='schooling' style={{ position: "absolute", marginTop: "-300px" }}></div>
            <h1>Schooling</h1>
            <img src={img_line} alt="line" className="img-fluid mb-5" />
            <hr className='mb-0' />
            <VerticalTimeline lineColor='#464646'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#111', boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.5)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2021 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "0 0 0 4px #1873BB" }}
                    icon={""}
                    dateClassName={"text-start"}
                >
                    <h3 className="vertical-timeline-element-title text-white">Engineering degree</h3>
                    <h5 className="vertical-timeline-element-subtitle text-white">CESI Reims</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '3px solid #2196f3', boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.5)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2020 - 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "0 0 0 4px #1873BB" }}
                    icon={null}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#b3b3b3" }}>Licence WIMSI</h3>
                    <h5 className="vertical-timeline-element-subtitle" style={{ color: "#333333" }}>IUT Reims-Châlons-Charleville</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '3px solid #2196f3', boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.5)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2019 - 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "0 0 0 4px #1873BB" }}
                    icon={null}
                    dateClassName={"text-start"}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#b3b3b3" }}>BTS SIO (SLAM)</h3>
                    <h5 className="vertical-timeline-element-subtitle">CNED</h5>
                    <p className='text-black'><small>{'(Only the second year)'}</small></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '3px solid #E7BE00', boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.5)', marginTop: "-15px" }}
                    contentArrowStyle={{ borderRight: '7px solid  #E7BE00' }}
                    date="2010 - 2020"
                    iconStyle={{ background: '#E7BE00', color: '#fff', boxShadow: "0 0 0 4px #D6A416", width: '40px', height: '40px', marginLeft: '-20px' }}
                    icon={""}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#b3b3b3" }}>Brevet de fin de 2e cycle de Musique</h3>
                    <h5 className="vertical-timeline-element-subtitle">Conservatoire à rayonnement régional | REIMS</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '3px solid #2196f3', boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.5)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2017 - 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "0 0 0 4px #1873BB" }}
                    icon={""}
                    dateClassName={"text-start"}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#b3b3b3" }}>DUT Informatique</h3>
                    <h5 className="vertical-timeline-element-subtitle">IUT Reims-Châlons-Charleville</h5>
                </VerticalTimelineElement>
                <Row className='m-5'>
                    <Col xs={8} className="px-0"><hr /></Col>
                    <Col className='border border-end-0 p-4 text-uppercase'
                        style={{
                            border: "505050",
                            marginTop: "-30px",
                            boxShadow: '5px 10px 10px 0px rgba(0, 0, 0, 0.5)',
                            color: "#999999"
                        }}><h2>Higher study</h2></Col>
                </Row>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '3px solid rgb(233 30 99)', boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.5)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233 30 99)' }}
                    date="2015 - 2017"
                    iconStyle={{ background: 'rgb(233 30 99)', color: '#fff', boxShadow: "0 0 0 4px  #B61B50" }}
                    icon={""}
                    dateClassName={"text-start"}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#b3b3b3" }}>Baccalauréat STI2D (SIN)</h3>
                    <h5 className="vertical-timeline-element-subtitle">Lycée Franklin Roosevelt</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '3px solid rgb(233 30 99)', boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.5)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233 30 99)' }}
                    date="2014 - 2015"
                    iconStyle={{ background: 'rgb(233 30 99)', color: '#fff', boxShadow: "0 0 0 4px  #B61B50" }}
                    icon={""}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#b3b3b3" }}>Seconde Générale</h3>
                    <h5 className="vertical-timeline-element-subtitle">Lycée Hugues Libergier | Reims</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '3px solid rgb(233 30 99)', boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.5)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233 30 99)' }}
                    date="2010 - 2014"
                    iconStyle={{ background: 'rgb(233 30 99)', color: '#fff', boxShadow: "0 0 0 4px  #B61B50" }}
                    icon={""}
                    dateClassName={"text-start"}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#b3b3b3" }}>Diplôme national du brevet</h3>
                    <h5 className="vertical-timeline-element-subtitle">Pierre de Coubertin College | Cormontreuil</h5>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <hr className='mt-0' />
        </Container>
    );
}

export default Schooling;
