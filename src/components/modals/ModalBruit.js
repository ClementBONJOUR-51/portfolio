import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalBruit() {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button color="danger" onClick={() => setOpen(!open)}>Show</Button>
            <Modal isOpen={open} toggle={() => setOpen(!open)} size="lg">
                <ModalHeader toggle={() => setOpen(!open)}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setOpen(!open)}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={() => setOpen(!open)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalBruit;
