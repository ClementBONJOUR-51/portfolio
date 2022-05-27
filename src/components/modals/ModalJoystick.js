import React, { useRef, useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Input, Collapse } from 'reactstrap';

function ModalJoystick() {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button className='rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121" }} onClick={() => setOpen(!open)}>Show</Button>
            <Modal isOpen={open} toggle={() => setOpen(!open)} size="lg" style={{ maxWidth: '1200px', width: '100%' }}>
                <ModalHeader toggle={() => setOpen(!open)}>Maze</ModalHeader>
                <ModalBody>
                    <div class="modal-header">
                        <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
                        <img class="img-res img-fluid" src="https://clementbonjour-51.github.io/webjoystick/aqua.png" alt="" />
                    </div>
                    <div class="modal-body">
                        <h4 class="modal-title">Déplacement à la souris de facon "joystick"</h4><br />
                        <h2>Idée de départ</h2>
                        <p>Les principaux périphériques d'un ordinateur sont le clavier et la souris. Dans les jeux vidéos sur ordinateur, lorsque l'on déplace notre personnage, il est alors fréquemment utile d'utiliser les touches directionnelles de notre clavier
                            &#9193;&#9194;&#9195;&#9196; ou bien alors les touches Z Q S D. Le soucis avec les touches de clavier est qu'elles sont enfoncées, ou non. Il n'y a alors que peu de liberté quant au déplacement de notre personnage car il y a seulement
                            8 directions possibles (haut, bas, droite, gauche, haut-gauche, haut-droite, bas-gauche, bas-droite) et pas de vitesse de déplacement suivant si la touche est beaucoup enfoncée ou non.</p>
                        <hr />
                        <div class="row">
                            <figure class="col-sm-4 col-xs-12">
                                <img src="https://clementbonjour-51.github.io/webjoystick/8deplacement.png" height="250px" width="250px" />
                                <figcaption>Seulement 8 directions possibles</figcaption>
                            </figure>
                            <figure class="col-sm-4 col-xs-12">
                                <img src="https://clementbonjour-51.github.io/webjoystick/infiniDeplacement.png" height="250px" width="250px" />
                                <figcaption> Une infinité de direction possible (Mathématiquement parlant)</figcaption>
                            </figure>
                            <figure class="col-sm-4 col-xs-12">
                                <img src="https://clementbonjour-51.github.io/webjoystick/curseur.jpg" height="250px" width="250px" />
                                <figcaption>Se déplace directement (la direction est le mouvent que prend la main de l'utilisateur à l'instant même)</figcaption>
                            </figure>
                        </div>
                        <hr />
                        <p>La souris elle, nous sera utile pour le contrôle de la caméra/l'angle de vue. Fort utile dans les jeux ou l'on peut se mouvoir dans un éspace en 3 dimensions (exemple: World of Warcraft, Minecraft, Fornite, etc ...) mais qu'en est-il
                            des jeux ou l'on ne peut se mouvoir que dans un espace en 2 dimensions ?</p>

                        <p>Si les touches directionnelles d'une console peuvent être comparées aux touches directionnelles d'un clavier, le joystick lui ne sera pas exactement comme la souris car lorsqu'on utilise une souris pour pointer quelque chose, le pointeur/curseur
                            suivra directement le déplacement de notre main alors qu'avec un joystick, le "pointeur" lui se déplacera dans la direction qu'on lui indiquera jusqu'à ce que nous décidons de lacher ce joystick pour qu'il s'arrête. On ne le déplace
                            pas directement mais on lui donne une vitesse dans une direction précise pour que ensuite il se déplace. La difference est subtile et pas facile à retranscrire par écrit mais j'espère que vous m'aurez compris &#129310;.</p>

                        <p>Mon but dans ce travail a été de retranscrire cette manière de se déplacer avec un joystick mais à la souris</p>

                    </div>
                    <div class="modal-footer">
                        <a className='btn rounded-0 p-3 text-uppercase fw-bold' style={{ backgroundColor: "#212121", color: "white" }} href="https://clementbonjour-51.github.io/webjoystick/aqua.html" target="_blank">DEMO</a>
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
