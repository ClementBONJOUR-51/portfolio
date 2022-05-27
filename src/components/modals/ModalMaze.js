import React, { useRef, useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Input, Collapse } from 'reactstrap';

function ModalMaze() {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button className='rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121" }} onClick={() => setOpen(!open)}>Show</Button>
            <Modal isOpen={open} toggle={() => setOpen(!open)} size="lg" style={{ maxWidth: '1200px', width: '100%' }}>
                <ModalHeader toggle={() => setOpen(!open)}>Maze</ModalHeader>
                <ModalBody>
                    <div class="modal-header">
                        <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
                        <img class="img-res img-fluid" src="https://clementbonjour-51.github.io/maze/lab.png" alt="" />
                    </div>
                    <div class="modal-body">
                        <h4 class="modal-title">Génération d'un Labyrinthe</h4><br />
                        <h2>Idée de départ</h2>
                        <p>Un labyrinthe est un édifice composé d'un grand nombre de pièces disposées de telle manière qu'on en trouve que très difficilement l'issue. Finir un labyrinthe est-il un si complèxe problème que ça ou l'esprit humain le complique-t-il
                            ?
                        </p>
                        <p>Pour commencer, il y a plusieurs types de labyrinthes. Les labyrinthes avec un et un seul chemin (Labyrinthe « parfait ») et les labyrinthes avec multitude de chemins (Labyrinthe « imparfait »)</p>
                        <hr />
                        <div class="row">
                            <figure class="col-sm-4 col-xs-12">
                                <img src="https://clementbonjour-51.github.io/maze/lab1.png" height="250px" width="250px" />
                                <figcaption>Labyrinthe « parfait »</figcaption>
                            </figure>
                            <figure class="col-sm-4 col-xs-12">
                                <img src="https://clementbonjour-51.github.io/maze/lab2.png" height="250px" width="250px" />
                                <figcaption> Labyrinthe « imparfait »</figcaption>
                            </figure>
                            <figure class="col-sm-4 col-xs-12">
                                <img src="https://clementbonjour-51.github.io/maze/lab3.png" height="250px" width="250px" />
                                <figcaption>Labyrinthe « imparfait »</figcaption>
                            </figure>
                        </div>
                        <hr />
                        <p>Un labyrinthe imparfaits n'est rien d'autre qu'un labyrinthe parfait avec en plus des trous dans les murs qui amènent à créer d'autres chemins et parfois même des boucles.</p>
                        <p>Mon but dans ce travail est d'apprendre à créer un algorithme pour créer un labyrinthe parfait.</p>
                        <h4>Démarche</h4>
                        <p>J'ai commencé par créer un tableau de x colonnes et lignes comme un plateau de jeu. Dans chacune des cases sont stockées des informations comme par exemple si la case est un mur ou alors un couloir ou bien alors un départ ou un arrivée.</p>
                        <p>J'ai ensuite créé une function qui me permetait, à partir dans tableau à deux dimensions qui stocke nos informations des cases, de reproduire ce dernier sous la forme d'un dessins pour que je puisse afficher mon labyrinthe même si
                            celui-ci au départ n'est pas créé de manière <a href="https://fr.wikipedia.org/wiki/G%C3%A9n%C3%A9ration_proc%C3%A9durale" target="_blank">procédurale</a> ("aléatoire"). Je parcours mon tableau et si une case à pour information
                            qu'elle est un mur, j'affiche un carré noir, si elle est un couloir, j'affiche un carré blanc.</p>
                        <p>De cette manière, je peux avoir un visuels de ce qu'est mon labyrinthe.</p>
                        <br />
                        <p>Ici commence la géneration de mon labyrinthe. Au départ, l'ensemble de labyrinthe est composé que de murs. Il n'y a donc aucun chemin ... pour l'instant !</p>
                        <p>Pour que ceux-ci se créer de eux même (les couloirs), je dois leurs imposé des règles qui sont:
                            <ul>
                                <li>Le premier couloir (le départ) doit être une case prise au hasard.</li>
                                <li>La direction que prend mon chemin se fait aussi aléatoirement. Soit vers le haut, vers le bas, à droite ou à gauche.</li>
                                <li>J'interdis à mon chemin qu'il prenne la direction qui lui fasse faire demi-tour pour revenir sur ses pas. Donc si mon chemin viens de la gauche vers la droite, il ne pourra pas choisir d'aller de droite à gauche.</li>
                                <li>j'interdis à mon chemin qu'il prenne la direction qui lui fasse sortie de mon plateau</li>
                                <li>Si mon chemin va croiser un autre couloir, alors celui prend la décission d'éliminer ce choix de direction.</li>
                                <li>Si mon couloir ne peut aller dans aucune direction car il est arrivé dans une voie sans issue (un cul-de-sac), alors je reviens au couloir précédemment créé pour trouver un autre chemin (seule exception de retour en arrière).
                                    Cela ainsi de suite.</li>
                                <li>Si il ne fait que de revenir sur ses pas car plus aucune intersection ne peut être créée, jusqu'au point de départ, mon labyrinthe sera créé entièrement et le dernier cul-de-sac rencontré qui à la plus grand chemin deviendra
                                    ma sortie.</li>
                            </ul>
                        </p>
                        <p>Dans un premier temps j'ai fait des tests avec une boucle de création de couloir seulement sur 20 itération :</p>
                        <img src="https://clementbonjour-51.github.io/maze/lab5.png" height="250px" width="250px" />
                        <p>Le point rouge est mon départ et mon point vert est mon arrivée. C'est avec cette boucle que j'ai commencé à coder mes conditions.</p>
                        <hr />
                        <p>J'ai ensuite appliqué mes conditions jusqu'à ce que mon plateau soit rempli</p>
                        <img src="https://clementbonjour-51.github.io/maze/lab4.png" height="250px" width="250px" />
                        <p>(Ne pretez pas attention aux points jaunes, ceux-ci montrent juste certaines voies sans issue) </p>
                        <hr />
                        <h4>Observation et conclusion</h4>
                        <p>Grâce à mon algorithme, il m'est possible de générer un labyrinthe avec un seul et unique bon chemin dans un tableau de 1000 x 1000 en ~15sec !</p>
                        <p>Il me serait possible avec certaines conditions en plus de pouvoir faire en sorte que la sortie du labyrinthe soit au périmètre de mon plateau de jeu ou alors que aléatoire, je créé des raccourcie entre couloir pour que mon labyrinthe
                            devienne un labyrinthe imparfait (plusieurs chemins possible/boucles).</p>
                        <hr />
                        <img src="https://clementbonjour-51.github.io/maze/lab6.png" height="400px" width="400px" />
                    </div>
                    <div class="modal-footer">
                        <a className='btn rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121", color: "white" }} href="https://clementbonjour-51.github.io/MapGen/map.html" target="_blank">DEMO</a>
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
