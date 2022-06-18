import React, { useState } from 'react'
import { Button, Offcanvas, Form } from 'react-bootstrap'

function SideMenu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} placement="end" onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>

                    </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SideMenu
