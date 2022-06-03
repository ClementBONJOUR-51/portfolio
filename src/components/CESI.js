import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardImg, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import img_line from '../assets/img/lines.svg';

import imgAdminSI from '../assets/img/AdminSI.jpg';
import imgPS from '../assets/img/ProgSyst.jpg';
import imgBigData from '../assets/img/Info_Stockage.jpg';
import imgAlgo from '../assets/img/Traitementdonnees.jpg';

import imgPS1 from '../assets/SP/cmd.png';
import imgPS2 from '../assets/SP/logiciel.png';
import imgPS3 from '../assets/SP/Image3.png';
import imgPS4 from '../assets/SP/Image4.png';
import imgPS5 from '../assets/SP/Image5.png';
import imgPS6 from '../assets/SP/Image6.png';


import imgBD1 from '../assets/BigData/Image1.png';
import imgBD2 from '../assets/BigData/Image2.png';
import imgBD3 from '../assets/BigData/Image3.png';
import imgBD4 from '../assets/BigData/Image4.png';
import imgBD5 from '../assets/BigData/Image5.png';
import imgBD6 from '../assets/BigData/Image6.png';



function Cesi() {

    const [PS, setPS] = useState(false);
    const [BigData, setBigData] = useState(false);
    const [Algo, setAlgo] = useState(false);


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
                            {/* <Button className='rounded-0 py-2 px-3  text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>Show</Button> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg top width="100%" height="300px" src={imgPS} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>System programming</CardTitle>
                            <CardSubtitle style={{ color: "grey" }}>10/11/2021 - 17/12/2021</CardSubtitle>
                            <Button onClick={() => { setPS(!PS) }} className='rounded-0 py-2 px-3 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>Show</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg top width="100%" height="300px" src={imgAlgo} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Storage and Big Data</CardTitle>
                            <CardSubtitle style={{ color: "grey" }}>02/05/2022 - 20/05/2022</CardSubtitle>
                            <Button onClick={() => { setBigData(!BigData) }} className='rounded-0 py-2 px-3 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }}>Show</Button>
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
                            <Button onClick={() => { setAlgo(!Algo) }} className='rounded-0 py-2 px-3 text-uppercase fw-bold mt-3' style={{ backgroundColor: "#212121" }} disabled>Learning ...</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <hr />

            <Modal isOpen={PS} toggle={() => { setPS(!PS) }} size="lg">
                <ModalHeader toggle={() => { setPS(!PS) }}>System programming</ModalHeader>
                <ModalBody>
                    <h2>Targeted Learning Outcomes</h2>
                    <ul>
                        <h5>[Understanding] .NET Core and .NET Framework</h5>
                        <li>Describe .NET Core and .NET Framework and their role in .Net</li>
                        <li>Write .NET architectures (Core and Framework)</li>
                        <li>Explain the evolutions between .NET Core and .NET Framework</li>
                        <li>Explain the notions of CoreCLR and CLR (architecture, components, execution process, automatic memory management)</li>
                        <li>Explain assembly concepts for .NET Core and .NET Framework (deployment, GAC)</li>
                    </ul>

                    <ul>
                        <h5>[Understanding] Devops and Integration Chain continue</h5>
                        <li> Know the different processes, practices of the continuous integration chain, DevOps.</li>
                        <li> Know the main tools supporting the continuous integration chain</li>
                    </ul>

                    <ul>
                        <h5>[Understanding] Docker and Containerization</h5>
                        <li> Know the general principles of containerization and its advantages in terms of deploying solutions</li>
                        <li>Know Docker environments and tools</li>
                    </ul>

                    <ul>
                        <h5>[Application] Git and Versioning</h5>
                        <li>Practice installing and configuring Git</li>
                        <li>Link Visual Studio to a Git repository</li>
                        <li>Illustrate general versioning principles for a file and apply associated Git commands</li>
                    </ul>


                    <hr />

                    <ul>
                        <h5>[Application] UML and Object Oriented Design</h5>
                        <li> Identify the different types of UML diagrams used to carry out the conception and design of an application</li>
                        <li> Know the UML formalisms used to describe the concepts of object-oriented programming: encapsulation, inheritance, ...</li>
                        <li> Practice class and sequence diagrams</li>
                    </ul>

                    <ul>
                        <h5>[Knowledge] MVC and MVVM Architecture Patterns</h5>
                        <li>  Cite the usefulness of MVC and MVVM and their differences</li>
                        <li> Describe the role of each MVC and MVVM component</li>
                    </ul>

                    <ul>
                        <h5>[App] The C# language</h5>
                        <li> Know the syntax of the C# language</li>
                        <li> Practice the C# language</li>
                    </ul>


                    <ul>
                        <h5>[Application] MVC and MVVM</h5>
                        <li> Practice MVC and MVVM architectures</li>
                    </ul>

                    <hr />

                    <ul>
                        <h5>[Knowledge] Design Patterns</h5>
                        <li> Identify Design Pattern categories (Creation, Structural, Behavior)</li>
                        <li> Must describe the following five Design Patterns Singleton, Factory, Observer, Bridge, Strategy</li>
                    </ul>

                    <ul>
                        <h5>[Application] Design Patterns</h5>
                        <li> Practice the following Design Patterns Singleton, Factory, Observer, Bridge, Strategy</li>
                    </ul>

                    <hr />
                    <ul>
                        <h5>Memory organization and how it works</h5>
                        <li>[Knowledge] Describe memory, registers and cache, memory, physical/virtual, shared memory</li>
                        <li>[Knowledge] Describe the memory manager in the OS: role, operation</li>
                        <li>[Knowledge] Describe addressing, address translation, memory allocation and freeing mechanisms</li>
                        <li>[Knowledge] Know and know how to explain the two structures (Heap and Stack) and their differences.</li>
                        <li>[Knowledge] Know the two allocation modes: contiguous and fragmented</li>
                        <li>[Knowledge] Know the different techniques: fixed or variable size, pagination and segmentation. Explain the different mechanisms with the advantages and disadvantages</li>
                        <li>[Knowledge] List and know how to explain, at least, the operation of the following memory allocation algorithms: First fit, Best fit, Worst fit</li>
                        <li>[Knowledge] List and be able to explain, at least, the functioning of the following page replacement algorithms: Ramdom, FIFO, NRU, LRU, LFU</li>
                    </ul>

                    <ul>
                        <h5> Memory management in .Net</h5>
                        <li>[App] Implement iDisposable</li>
                        <li>[Application] Using a using</li>
                        <li>[Application] Using a using</li>
                        <li>[Application] Using a using</li>
                        <li>[Knowledge] Describe the managed execution process</li>
                        <li>[Knowledge] Describe how the framework performs automatic memory management</li>
                        <li>[Understanding] Know, understand, explain memory collection algorithms</li>
                    </ul>

                    <ul>
                        <h5> Function pointers</h5>
                        <li>[Application] Know, explain, use the delegate mechanism</li>
                        <li> [Application] Know, explain, use the anonymous delegate mechanism</li>
                    </ul>

                    <hr />

                    <ul>
                        <li>[Understanding] Explain the main types of OS for process management: monoprogramming, multiprogramming, time-sharing, current OS"</li>
                        <li>[Understanding] Explain the notion of running program and its main characteristics</li>
                        <li>[Understanding] List, describe and explain the following components: PID Pointer to Stack State of the process Program counter CPU register List of open files</li>
                        <li>[Understanding] Describe and explain the two mechanisms (Preemptive and collaborative); explain the difference between the two</li>
                        <li>[Understanding] Perfectly describe the two concepts</li>
                        <li>[Understanding] Describe interprocess relationships (context switching)</li>
                        <li>[Knowledge] List the most important algorithms</li>
                        <li>[Understanding] Describe and explain how they work (Secondary-Not assessed in the CCTL)</li>
                        <li>[Application] Code one of the algorithms in a simple way ("out of context" of an SE)</li>
                        <li>[Application] Code a program in C# to manage processes with the .NET framework</li>
                    </ul>

                    <hr />

                    <ul>
                        <li> Define Thread, Multi-threading, IPC Mechanisms, Critical Resource/Critical Section, Cross-Blocking</li>
                        <li> Quote, Describe and explain the main issues related to the critical section</li>
                        <li>List, Describe and Explain the main IPC mechanisms and organize them into categories</li>
                        <li>Implement synchronization mechanisms in C#</li>
                    </ul>

                    <hr />

                    <ul>
                        <li>Know / understand the communication mechanism of sockets</li>
                        <li> Know / understand the operating principle of the Client-Server architecture</li>
                        <li>Stream Transmission</li>
                        <li> Develop a Client-Server GUI handling sockets in C#</li>
                    </ul>

                    <hr />

                    <Row>
                        <Col><img class="img-fluid" src={imgPS1} alt="" /></Col>
                        <Col><img class="img-fluid" src={imgPS2} alt="" /></Col>
                    </Row>
                    <Row>
                        <Col> <img class="img-fluid" src={imgPS3} alt="" /></Col>
                        <Col><img class="img-fluid" src={imgPS4} alt="" /></Col>
                    </Row>
                    <Row>
                        <Col><img class="img-fluid" src={imgPS5} alt="" /></Col>
                        <Col><img class="img-fluid" src={imgPS6} alt="" /></Col>
                    </Row>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => { setPS(!PS) }}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={BigData} toggle={() => { setBigData(!BigData) }} size="lg">
                <ModalHeader toggle={() => { setBigData(!BigData) }}>Storage and Big Data</ModalHeader>
                <ModalBody>
                    <h2>Targeted Learning Outcomes</h2>
                    <ul>
                        <li>Identify GDPR-related data constraints</li>
                        <li>Interpreting the 5Vs of Big Data</li>
                        <li>Describe a Big Data architecture</li>
                        <li>Describe a distributed storage infrastructure (cluster of servers, virtualization, NAS vs SAN, …)</li>
                        <li>Describe the use of the cloud as part of data storage</li>
                        <li>Present data processing in a distributed way (example: Map Reduce)</li>
                        <li>Describe how distributed file systems work</li>
                        <li>Identify the difficulties associated with distributed processing</li>
                    </ul>
                    <hr />
                    <ul>
                        <li>Design a dimensional model (Data Mart)</li>
                        <li>Writing SQL queries using multiple tables</li>
                        <li>Translate a request into requests</li>
                        <li>Use an ETL to retrieve data</li>
                        <li>Qualify a dataset</li>
                        <li>Propose a data analysis strategy</li>
                        <li>Carry out data processing taking into account GDPR constraints (anonymization)</li>
                        <li>Propose a Data Lake type organization</li>
                        <li>Using an ETL to integrate data into a NoSQL database</li>
                    </ul>
                    <hr />
                    <ul>
                        <li>Distinguish the different types of NoSQL databases (key-value, document-oriented, column-oriented, graph-oriented) in their organization and in their use case</li>
                        <li>Compare properties of RDBMS and NoSQL databases (ACID vs BASE properties, CAP theorem)</li>
                        <li>Using an ETL to integrate data into a NoSQL database</li>
                        <li>Select the type of storage adapted to a business need</li>
                        <li>Use MapReduce to extract information</li>
                        <li>Optimize the physical model (partitioning, bucket)</li>
                    </ul>

                    <Row>
                        <Col><img class="img-fluid" src={imgBD1} alt="" /></Col>
                        <Col><img class="img-fluid" src={imgBD2} alt="" /></Col>
                    </Row>
                    <hr />
                    <h4>Talend</h4>
                    <Row>
                        <Col> <img class="img-fluid" src={imgBD3} alt="" /></Col>
                        <Col><img class="img-fluid" src={imgBD4} alt="" /></Col>
                    </Row>
                    <Row>
                        <Col><img class="img-fluid" src={imgBD5} alt="" /></Col>
                        <Col></Col>
                    </Row>
                    <hr />
                    <h4>PowerBI</h4>
                    <Row>
                        <Col><img class="img-fluid" src={imgBD6} alt="" /></Col>
                    </Row>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => { setBigData(!BigData) }}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={Algo} toggle={() => { setAlgo(!Algo) }} size="lg">
                <ModalHeader toggle={() => { setAlgo(!Algo) }}>Advanced algorithms</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => { setAlgo(!Algo) }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Container >

    );
}

export default Cesi;
