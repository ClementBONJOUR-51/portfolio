import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalMaze() {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button className='rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121" }} onClick={() => setOpen(!open)}>Show</Button>
            <Modal isOpen={open} toggle={() => setOpen(!open)} size="lg" style={{ maxWidth: '1200px', width: '100%' }}>
                <ModalHeader toggle={() => setOpen(!open)}>Maze</ModalHeader>
                <ModalBody>
                    <div class="modal-header">
                        <img class="img-res img-fluid" src="https://clementbonjour-51.github.io/maze/lab.png" alt="" />
                    </div>
                    <div class="modal-body">
                        <h4 class="modal-title">Generating a Labyrinth</h4><br />
                        <h2>Starting idea</h2>
                        <p>A labyrinth is a structure made up of a large number of rooms arranged in such a way that it is very difficult to find the way out. Is finishing a maze such a complex problem or does the human mind complicate it?
                            ?
                        </p>
                        <p>To begin with, there are several types of mazes. Labyrinths with one and only one path (“perfect” Labyrinth) and mazes with multiple paths (“imperfect” Labyrinth)</p>
                        <hr />
                        <div class="row">
                            <figure class="col-sm-4 col-xs-12">
                                <img alt="" src="https://clementbonjour-51.github.io/maze/lab1.png" height="250px" width="250px" />
                                <figcaption>"Perfect" Maze</figcaption>
                            </figure>
                            <figure class="col-sm-4 col-xs-12">
                                <img alt="" src="https://clementbonjour-51.github.io/maze/lab2.png" height="250px" width="250px" />
                                <figcaption>“imperfect” maze</figcaption>
                            </figure>
                            <figure class="col-sm-4 col-xs-12">
                                <img alt="" src="https://clementbonjour-51.github.io/maze/lab3.png" height="250px" width="250px" />
                                <figcaption>“imperfect” maze</figcaption>
                            </figure>
                        </div>
                        <hr />
                        <p>An imperfect maze is nothing but a perfect maze with additional holes in the walls that lead to the creation of other paths and sometimes even loops.</p>
                        <p>My goal in this work is to learn how to create an algorithm to create a perfect maze.</p>
                        <h4>Get Started</h4>
                        <p>I started by creating a table of x columns and rows like a game board. In each of the boxes, information is stored, such as whether the box is a wall or a corridor or a start or a arrival.</p>
                        <p>I then created a function that allowed me, from a two-dimensional array that stores our information of the boxes, to reproduce the latter in the form of a drawing so that I could display my maze even if
                            this one at the start is not created in a <a href="https://fr.wikipedia.org/wiki/G%C3%A9n%C3%A9ration_proc%C3%A9durale" target="_blank" rel="noopener noreferrer">procedural way </a> ("random"). I go through my table and if a box is for information
                            if it is a wall, I display a black square, if it is a hallway, I display a white square.</p>
                        <p>In this way, I can have a visual of what my maze is.</p>
                        <br />
                        <p>Here begins the generation of my maze. Initially, the labyrinth set is composed only of walls. So there is no way...for now!</p>
                        <p> For these to create themselves (the corridors), I have to impose rules on them which are:
                            <ul>
                                <li>The first lane (the start) must be a random space.</li>
                                <li>The direction my path takes is also random. Either up, down, right or left.</li>
                                <li>I forbid my path to take the direction that will make it turn around to retrace its steps. So if my path comes from left to right, he won't be able to choose to go right to left.</li>
                                <li>I forbid my path to take the direction that takes it out of my plateau</li>
                                <li>If my path is going to cross another hallway, then that one makes the decision to eliminate that choice of direction.</li>
                                <li>If my corridor can't go in any direction because it came to a dead end (a dead end), then I go back to the previously created corridor to find another path (only backtracking exception) .
                                    So on.</li>
                                <li>If he only retraces his steps because no more intersections can be created, up to the starting point, my labyrinth will be created entirely and the last cul-de-sac encountered which at the largest path will become
                                    my exit.</li>
                            </ul>
                        </p>
                        <p>At first I did some tests with a corridor creation loop only on 20 iterations:</p>
                        <img alt="" src="https://clementbonjour-51.github.io/maze/lab5.png" height="250px" width="250px" />
                        <p>The red dot is my departure and my green dot is my arrival. It is with this loop that I started coding my conditions.</p>
                        <hr />
                        <p>I then applied my conditions until my plateau was filled</p>
                        <img alt="" src="https://clementbonjour-51.github.io/maze/lab4.png" height="250px" width="250px" />
                        <p>(Don't pay attention to the yellow dots, these just show some dead ends) </p>
                        <hr />
                        <h4>Observation and conclusion</h4>
                        <p>Thanks to my algorithm, I can generate a maze with a single good path in a 1000 x 1000 array in ~15sec!</p>
                        <p> It would be possible for me with certain conditions in addition to being able to ensure that the exit of the maze is at the perimeter of my game board or while random, I create shortcuts between corridors so that my maze
                            becomes an imperfect maze (several possible paths/loops).</p>
                        <hr />
                        <img alt="" src="https://clementbonjour-51.github.io/maze/lab6.png" height="400px" width="400px" />
                    </div>
                    <div class="modal-footer">
                        <a className='btn rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121", color: "white" }} href="https://clementbonjour-51.github.io/MapGen/map.html" target="_blank" rel="noopener noreferrer">DEMO</a>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => setOpen(!open)}>Close</Button>
                </ModalFooter>
            </Modal>
        </div >
    );
}

export default ModalMaze;
