import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import img_bg_SPP from '../assets/img/bg_SPP.jpg';

function SPP() {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${img_bg_SPP})`, minHeight: "300px",
                backgroundAttachment: "fixed", backgroundPosition: "center",
                backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}></div>
            <Container className="container text-center bg-white p-5" id='about' style={{ marginTop: "-100px", boxShadow: "0px 0px 80px 0.05px grey" }}>
                <h1>SPP - SUPERVISED PERSONAL PROJECTS</h1>
                <img src={img_line} alt="line" className="img-fluid mb-5" />
                <Row>
                    <Col className='px-5'>
                        <h4>GSB - Application web | Gestion fiche de frais (PHP/SQL)</h4>
                    </Col>
                    <Col className='px-5'>
                        <h4>GSB - Programme | Script clôture (C#/SQL)</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className='px-5'>
                        <p>La société GSB a pour activité la recherche et la fabrication de médicaments.
                            Suite à plusieurs différentes fusions, le suivi des frais est actuellement géré de plusieurs façons.
                            Il s’agit d’uniformiser la gestion du suivi des visites.
                            Le laboratoire GSB désire mettre en production une application Web à disposition des acteurs de l'entreprise.
                            L'application doit permettre d'enregistrer tout frais engagé.</p>
                    </Col>
                    <Col className='px-5'>
                        <p>Au début de la campagne de validation des fiches de frais par le service comptable de la société GSB,
                            un script est lancé qui clôture toutes les fiches de frais créées le mois N-1.
                            Elle permettra, d’autre part, à partir du 20e jour du mois N la mise en remboursement des fiches créées le mois N-1.
                            Une nouvelle application C# doit être créée.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='px-5'>
                        <Button className='rounded-0 py-3 px-4 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>Détails <span role="img" aria-label="hello">🔎</span></Button>
                    </Col>
                    <Col className='px-5'>
                        <Button className='rounded-0 py-3 px-4 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>Détails <span role="img" aria-label="hello">🔎</span></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SPP;
