import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import img_line from '../assets/img/lines.svg';
import MultiLingualContent from '../utils/multilingualContent';

function Internships() {
    return (
        <Container className="container text-center mt-5">
            <Row>
                <Col></Col>
                <Col xs={8}>
                    <div id='internships' style={{ position: "absolute", marginTop: "-100px" }}></div>
                    <h1><MultiLingualContent contentID='Internships' /></h1>
                    <img src={img_line} alt="line" className="img-fluid mb-5" />

                    <h2>SNCF Réseau | DUT</h2>
                    <p className='m-5'><MultiLingualContent contentID='describe_SNCF' /></p>
                    <Button color="danger rounded-0" style={{ cursor: "no-drop" }}><MultiLingualContent contentID='CONFIDENTIAL_PROJECT' /></Button>

                    <hr className='m-5' />

                    <h2>MADARA | BTS</h2>
                    {/* <table class="table table-bordered">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title of the professional situation</th>
                                <th scope="col">Language</th>
                                <th scope="col">Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Editing a web interface</td>
                                <td>
                                    <ul>
                                        <li>HTML/CSS</li>
                                    </ul>
                                </td>
                                <td>Creation of HTML/CSS form pages to help enter a company's customer information</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Updating an internal web application</td>
                                <td>
                                    <ul>
                                        <li>JavaScript</li>
                                        <li>HTML/CSS</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Rearrangement of file ordering and component logistics</li>
                                        <li>Rewriting and optimizing methods</li>
                                        <li>Inserting Hooks from the React.js library</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Creating a web application</td>
                                <td>
                                    <ul>
                                        <li>JavaScript</li>
                                        <li>HTML/CSS</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Creation of 27 tables (accounting balance sheet, income statement, ...)</li>
                                        <li>Added input and naming of fields</li>
                                        <li>Creating a function to calculate the results</li>
                                        <li>Creation of input control and targeted error handling</li>
                                        <li>Communication and voice exchanges with the customer for updates</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Inserting a music player</td>
                                <td>
                                    <ul>
                                        <li>JavaScript</li>
                                        <li>HTML/CSS</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Library import for music player</li>
                                        <li>Creating the page and its components (tiles, player)</li>
                                        <li>Display of music according to a json file (cover, url, title, author(s))</li>
                                        <li>Music change management</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table> */}
                    <MultiLingualContent contentID='describe_MADARA' />

                    <hr className='m-5' />

                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Internships;
