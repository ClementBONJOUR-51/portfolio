import React from 'react';
import cv from '../assets/Clement-BONJOUR_Resume.pdf'
import { Container } from 'reactstrap';

function Resume() {

    return (
        <div>
            <Container className="container text-center mt-5 p-5" style={{height:"100vh"}}>
                <embed src={cv} width="100%" height="100%" />
            </Container>
        </div>

    );
}

export default Resume;