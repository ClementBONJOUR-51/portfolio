import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalJoystick() {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button className='rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121" }} onClick={() => setOpen(!open)}>Show</Button>
            <Modal isOpen={open} toggle={() => setOpen(!open)} size="lg" style={{ maxWidth: '1200px', width: '100%' }}>
                <ModalHeader toggle={() => setOpen(!open)}>Maze</ModalHeader>
                <ModalBody>
                    <div class="modal-header">
                        <img alt="" class="img-res img-fluid" src="https://clementbonjour-51.github.io/webjoystick/aqua.png" />
                    </div>
                    <div class="modal-body">
                        <h4 class="modal-title">Moving with the mouse in a "joystick" way</h4><br />
                        <h2>Starting idea</h2>
                        <p>The main peripherals of a computer are the keyboard and the mouse. In computer video games, when we move our character, it is then frequently useful to use the directional keys on our keyboard
                            <span role="img" aria-label="hello">&#9193;&#9194;&#9195;&#9196;</span> or else the Z Q S D keys. The problem with the keyboard keys is that they are pressed or not. There is then little freedom as to the movement of our character because there is only
                            8 possible directions (up, down, right, left, up-left, up-right, down-left, down-right) and no movement speed depending on whether the key is pressed a lot or not.</p>
                        <hr />
                        <div class="row">
                            <figure class="col-sm-4 col-xs-12">
                                <img alt="" src="https://clementbonjour-51.github.io/webjoystick/8deplacement.png" height="250px" width="250px" />
                                <figcaption>Only 8 possible directions</figcaption>
                            </figure>
                            <figure class="col-sm-4 col-xs-12">
                                <img alt="" src="https://clementbonjour-51.github.io/webjoystick/infiniDeplacement.png" height="250px" width="250px" />
                                <figcaption>An infinity of possible direction (Mathematically speaking)</figcaption>
                            </figure>
                            <figure class="col-sm-4 col-xs-12">
                                <img alt="" src="https://clementbonjour-51.github.io/webjoystick/curseur.jpg" height="250px" width="250px" />
                                <figcaption>Moves directly (direction is the movement the user's hand is taking at the moment)</figcaption>
                            </figure>
                        </div>
                        <hr />
                        <p>The mouse will be useful for controlling the camera/viewing angle. Very useful in games where you can move in a 3-dimensional space (examples: World of Warcraft, Minecraft, Fornite, etc ...) but what about
                            games where you can only move in a 2-dimensional space?</p>

                        <p>While the directional keys on a console can be compared to the directional keys on a keyboard, the joystick will not be exactly like the mouse because when using a mouse to point at something, the pointer/cursor
                            will directly follow the movement of our hand whereas with a joystick, the "pointer" will move in the direction that we will indicate to it until we decide to let go of this joystick so that it stops. We don't move it
                            not directly but we give it a speed in a specific direction so that it then moves. The difference is subtle and not easy to transcribe in writing but I hope you have understood me <span role="img" aria-label="hello">&#129310;</span>.</p>

                        <p>My goal in this work was to transcribe this way of moving with a joystick but with a mouse</p>

                    </div>
                    <div class="modal-footer">
                        <a className='btn rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121", color: "white" }} href="https://clementbonjour-51.github.io/webjoystick/aqua.html" target="_blank" rel="noopener noreferrer">DEMO</a>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => setOpen(!open)}>Close</Button>
                </ModalFooter>
            </Modal>
        </div >
    );
}

export default ModalJoystick;
