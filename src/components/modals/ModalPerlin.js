import React, { useRef, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Input, Collapse } from 'reactstrap';

function ModalPerlin() {

    const [open, setOpen] = useState(false)

    const [relief, setRelief] = useState(2000);
    const [nivEau, setNivEau] = useState(128);
    const [tailleContinent, setTailleContinent] = useState(25);

    const canvasBruit = useRef(null);
    const canvasResult = useRef(null);
    const convasColor = useRef(null);
    const canvasSmoother = useRef(null);

    const [collapseDetails, setCollapseDetails] = useState(false);

    const [demo, setDemo] = useState(false)

    const [load, setLoad] = useState(false)

    const reset = () => {
        if (canvasBruit.current) canvasBruit.current.innerHTML = ""
        if (canvasResult.current) canvasResult.current.innerHTML = ""
        if (convasColor.current) convasColor.current.innerHTML = ""
        if (canvasSmoother.current) canvasSmoother.current.innerHTML = ""
    }

    const refresh = () => {
        reset();

        var newCanvas = document.createElement("canvas");
        newCanvas.height = 500;
        newCanvas.width = 500;
        if (convasColor.current) convasColor.current.appendChild(newCanvas);
        var octaves = [];

        var context = newCanvas.getContext("2d");
        var width = newCanvas.width;
        var height = newCanvas.height;
        // var imageData = context.createImageData(width, height);
        var imageDataModel = context.createImageData(width, height);

        function createCanvas(imageData, taille, targetCanvas) {
            var newCanvas = document.createElement("canvas");
            newCanvas.height = taille;
            newCanvas.width = taille;
            newCanvas.style.margin = "1px";
            //newCanvas.style.border = "1px solid red";
            var newContext = newCanvas.getContext("2d");
            newContext.putImageData(imageData, 0, 0);
            if (targetCanvas.current) targetCanvas.current.insertBefore(newCanvas, targetCanvas.current.lastChild);
        }

        function moyenneVoisin(map, x, y, entourage) {
            var total = 0;
            var somme = 0;
            var voisins = [];
            for (var xvoisin = -entourage; xvoisin <= entourage; xvoisin++) {
                for (var yvoisin = -entourage; yvoisin <= entourage; yvoisin++) {
                    voisins.push([x + xvoisin, y + yvoisin]);
                }
            }
            voisins.forEach(voisin => {
                if (voisin[0] >= 0 && voisin[0] < width && voisin[1] >= 0 && voisin[1] < height) {
                    somme += map[voisin[0]][voisin[1]];
                    total++;
                }
            });

            return (somme / total);
        }

        function changeImageData(map) {
            var reponse = imageDataModel;
            for (var x = 0; x < width; x++) {
                for (var y = 0; y < height; y++) {
                    var pixelindex = (y * width + x) * 4;
                    reponse.data[pixelindex] = map[x][y];
                    reponse.data[pixelindex + 1] = map[x][y];
                    reponse.data[pixelindex + 2] = map[x][y];
                    reponse.data[pixelindex + 3] = 255;
                }
            }
            return reponse
        }

        function createRandomMap() {
            var tab2D = []
            for (var x = 0; x < width; x++) {
                var ligne = [];
                for (var y = 0; y < height; y++) {
                    var pixel = Math.random() * 255;
                    ligne.push(pixel);
                }
                tab2D.push(ligne);
            }
            return tab2D;
        }


        function smooth(map, nb, puissance) {
            for (var i = 0; i < nb; i++) {
                for (var x = 0; x < width; x++) {
                    for (var y = 0; y < height; y++) {
                        map[x][y] = moyenneVoisin(map, x, y, puissance);
                    }
                }
                octaves.push(changeImageData(map, imageDataModel));
                createCanvas(changeImageData(map, imageDataModel), 50, canvasSmoother);
            }
            return map;
        }


        function contrastImage(imageData, contrast, luminosite) {
            contrast = (contrast / 100) + 1;
            var intercept = luminosite * (1 - contrast);
            for (var i = 0; i < imageData.data.length; i += 4) {
                imageData.data[i] = imageData.data[i] * contrast + intercept;
                imageData.data[i + 1] = imageData.data[i + 1] * contrast + intercept;
                imageData.data[i + 2] = imageData.data[i + 2] * contrast + intercept;
            }
            return imageData;
        }

        function color(imageData) {
            for (var i = 0; i < imageData.data.length; i += 4) {
                if ((imageData.data[i]) <= 100) {
                    imageData.data[i + 2] = 255;
                }
                if ((imageData.data[i]) > 100 && (imageData.data[i]) <= 120) {
                    imageData.data[i] = 255;
                    imageData.data[i + 1] = 255;
                }
                if ((imageData.data[i]) > 120 && (imageData.data[i]) <= 140) {
                    imageData.data[i + 1] = 255;
                }
                if ((imageData.data[i]) > 140 && (imageData.data[i]) <= 150) {
                    imageData.data[i] = 60;
                    imageData.data[i + 1] = 200;
                    imageData.data[i + 2] = 60;
                }
                if ((imageData.data[i]) > 150 && (imageData.data[i]) <= 180) {
                    imageData.data[i] = 50;
                    imageData.data[i + 1] = 120;
                    imageData.data[i + 2] = 60;

                }
                if ((imageData.data[i]) > 180 && (imageData.data[i]) <= 200) {
                    imageData.data[i] = 70;
                    imageData.data[i + 1] = 50;
                    imageData.data[i + 2] = 0;
                }
                if ((imageData.data[i]) > 200 && (imageData.data[i]) <= 215) {
                    imageData.data[i] = 50;
                    imageData.data[i + 1] = 20;
                    imageData.data[i + 2] = 0;
                }
            }
            return imageData;
        }

        function generation() {
            var map = createRandomMap();
            createCanvas(changeImageData(map), 300, canvasBruit);
            var mapSmooth = smooth(map, tailleContinent, 2); // map,boucle,puissanceVoisinage
            var ImageDataSmooth = changeImageData(mapSmooth);
            var ImageDataContrast = contrastImage(ImageDataSmooth, relief, nivEau); //image,puissanceContrast,luminosité
            createCanvas(ImageDataContrast, 500, canvasResult);
            var ImageDataColor = color(ImageDataContrast);
            context.putImageData(ImageDataColor, 0, 0);
        }

        generation();
        setLoad(false)
    };


    return (
        <div>
            <Button className='rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121" }} onClick={() => setOpen(!open)}>Show</Button>
            <Modal isOpen={open} toggle={() => setOpen(!open)} size="lg" style={{ maxWidth: '1200px', width: '100%' }}>
                <ModalHeader toggle={() => setOpen(!open)}>Perlin</ModalHeader>
                <ModalBody>
                    <Button color="danger" className='w-100 my-5' onClick={() => { setDemo(!demo) }}>SEE DEMO !</Button>
                    <Container>
                        <Collapse isOpen={demo}>
                            <Row>
                                <Col xs={8}>
                                    <div>
                                        <label id="Relief">Mountain height : {relief}</label><br />
                                        <Input type="range" min="100" max="3000" defaultValue={relief} onChange={event => setRelief(event.target.value)} />
                                    </div>
                                    <div>
                                        <label id="NiveauEau">Water level : {nivEau}</label><br />
                                        <Input type="range" min="120" max="130" defaultValue={nivEau} onChange={event => setNivEau(event.target.value)} />
                                    </div>
                                    <div>
                                        <label id="TailleContinent">Mainland size : {tailleContinent}</label><br />
                                        <Input type="range" min="2" max="50" defaultValue={tailleContinent} onChange={event => setTailleContinent(event.target.value)} />
                                    </div>
                                </Col>
                                <Col>
                                    <Button color={load ? "secondary" : "danger"} className='w-100 h-100' disabled={load} id="generation" onClick={() => { setLoad(true); setTimeout(refresh, 500) }}>Generation</Button><br />
                                </Col>
                            </Row>

                            <Button color="primary" className='w-100 my-5' onClick={() => { setCollapseDetails(!collapseDetails) }}>See details</Button>

                            <Collapse isOpen={collapseDetails}>
                                <Row className='my-5'>
                                    <Col>
                                        <div id="canvas" ref={canvasBruit}><br /></div>
                                    </Col>
                                    <Col>
                                        <div id="canvas" ref={canvasSmoother}><br /></div>
                                    </Col>
                                </Row>
                            </Collapse>
                            <Row>
                                <Col>
                                    <div id="canvas" ref={canvasResult}><br /></div>
                                </Col>
                                <Col>
                                    <div id="canvas" ref={convasColor}></div>
                                </Col>
                            </Row>
                        </Collapse>
                        <Collapse isOpen={!demo}>
                            <div class="modal-header">
                                <img alt="" class="img-res img-fluid" src="https://clementbonjour-51.github.io/MapGen/bruit.jpg" />
                            </div>
                            <div class="modal-body">
                                <h4 class="modal-title">Map generation (JS)</h4><br />
                                <h2>Starting idea</h2>
                                <p>Reproduce the result of an algorithm such as Perlin noise without looking at the solution of the algorithm. Perlin noise (2nd image) is a procedural texture that is generated from noise (1st image). this is
                                    much used in visual effects such as for fogs or clouds but Perlin noise is also used as a map generator where the different areas of dark and light would be relief.</p>
                                <hr />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/bruitPixel.PNG" height="250px" width="250px" />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/perlin.png" height=" 250px " width="250px " />
                                <hr />
                                <p>The noise is an image randomly made up of black or white pixels and if we imagine that this noise is a map seen from above with relief according to the color of the pixel, that still makes no sense. Explanations:</p>
                                <hr />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/graphique1.png" /> All white image<br />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/graphique2.png" /> All black image<br />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/graphique3.png" /> Image with random pixels between white and black (says noise or snow)<br />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/graphique4.png" /> Image consisting of gray pixels (+ or - white and black)<br />
                                <hr />
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-6 col-xs-12">
                                            <p>So from above it might look like this:</p>
                                            <img alt="" src="https://clementbonjour-51.github.io/MapGen/perlin.png" height="250px" width="250px" />
                                        </div>
                                        <div class="col-sm-6 col-xs-12">
                                            <p>It's like a topographic map that shows us the relief:</p>
                                            <img alt="" src="https://clementbonjour-51.github.io/MapGen/carteFrancejpg.jpg" height="250px" width="250px" />
                                        </div>
                                    </div>
                                </div>

                                <hr />
                                <p>The goal is therefore to smooth out the differences between black and white pixels with different levels of gray to make a "gradient".</p>
                                <br />
                                <h2>Get Started</h2>
                                <p>In order for me to adjust the difference between the pixels, I have to make them uniform but only according to the surrounding pixels because if I made them all uniform, the result would be a square filled with a single gray color.
                                    So pixel by pixel, I look at the color of the pixels right next to it (with a defined radius) and I average it and mix it with my pixel. As a picture is worth a thousand words... :</p>
                                <hr />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/etape1.png" height="200px" width="200px" />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/etape2.png" height="200px" width="200px" />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/etape3.png" height="200px" width="200px" />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/etape4.png" height="200px" width="200px" />
                                <hr />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/etapeAll.png" height="200px" />
                                <hr />
                                <p>As each pixel changes according to the others around, groups of shapes, sort of spots like lumps in a paste.<br /> Then I increase the contrast of the image to make these spots stand out</p >
                                <hr />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/contraste.png" />
                                <h2>Observation and conclusion</h2>
                                <p>You will agree that my result does not really look like a cloud but can very well be used as a map!</p>
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/bruitPixel.PNG" height="200px" width="200px" />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/perlin.png" height="200px" width="200px" />
                                <img alt="" src="http://libnoise.sourceforge.net/tutorials/images/newheightmap.jpg" height="200px" width="200px" />
                                <hr />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/bruitPixel.PNG" height="200px" width="200px" />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/contraste.png" height="200px" width="200px" />
                                <img alt="" src="https://clementbonjour-51.github.io/MapGen/color.png" height="200px" width="200px" /><p><span role="img" aria-label="hello">🔼</span> my result <span role="img" aria-label="hello">🙂</span></p> <hr />
                                <p> The real "Perlin noise" does not use exactly the same process as me but I invite you to see it:
                                    <a href="http://www.hyena.net.ee/rwg/Perlin%20Noise%20Generator.pdf" target="_blank" rel="noopener noreferrer">Perlin Noise Generator - Erich Erstu, Janar Sell, Suido Valli</a></p>
                            </div>
                            <div class="modal-footer ">
                                <a href="https://clementbonjour-51.github.io/MapGen/map.html" target="_blank" rel="noopener noreferrer" class="btn btn-fill ">Rendering of work</a>
                            </div>
                        </Collapse>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => setOpen(!open)}>Close</Button>
                </ModalFooter>
            </Modal>
        </div >
    );
}

export default ModalPerlin;
