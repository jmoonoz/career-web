import React from 'react';
import { Container, Navbar, Nav, Link } from 'react-bootstrap';

export default function nav() {
    return (
        <Navbar fixed="top"  expand="lg" >
            <Container className="d-flex">
                <Navbar.Brand href="#">Qvin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="ml-auto">
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Values">Values</Nav.Link>
                        <Nav.Link href="#Team">Team</Nav.Link>
                        <Nav.Link href="#Jobs">Jobs</Nav.Link>
                        <Nav.Link href="#Mission">Mission</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
