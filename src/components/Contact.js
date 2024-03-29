import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import { SocialIcon } from 'react-social-icons';
import './contactFlip.css';
import MultiLingualContent from '../utils/multilingualContent';

const ContactFlip = ({ url }) => {
  return (
    <div class="flip-card-contact">
      <div class="flip-card-inner-contact">
        <div class="flip-card-front-contact">
          <SocialIcon style={{ height: 50, width: 50 }} url={url} />
        </div>
        <div class="flip-card-back-contact">
          <SocialIcon style={{ height: 50, width: 50 }} url={url} />
        </div>
      </div>
    </div>)
}

function Contact() {
  return (
    <Container className="text-center mb-5">
      <div id='contact' style={{ position: "absolute", marginTop: "-300px" }}></div>
      <h1><MultiLingualContent contentID='Contact'/></h1>
      <img src={img_line} alt="line" className="img-fluid mb-5" />
      <Row className="m-4" style={{ height: "100px" }}>
        {/* <Col><ContactFlip url={"https://twitter.com/"} /></Col> */}
        <Col><ContactFlip url={"https://github.com/ClementBONJOUR-51"} /></Col>
        <Col><ContactFlip url={"https://www.facebook.com/clement.bonjour.9/"} /></Col>
        <Col><ContactFlip url={"https://www.linkedin.com/in/cl%C3%A9ment-bonjour-8b2994189/"} /></Col>
        {/* <Col><ContactFlip url={"https://www.discord.com/"} /></Col> */}
        <Col><ContactFlip url={"mailto:bonjourclement51100@gmail.com"} /></Col>
      </Row>
    </Container>
  );
}

export default Contact;
