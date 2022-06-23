import React, { useState } from 'react'
import { Button, Container, Offcanvas, Form } from 'react-bootstrap'
import "../style/job.scss"

function SideMenu(props) {
    // hook used for side menu, false no show / true will show
    const [show, setShow] = useState(false);

    // use case for form elements
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [linkdin, setLinkedin] = useState("");
    // to show weather results was succesful or not
    const [message, setMessage] = useState("");

    // handle function for side menu
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // handle function for submit Form
    // if succesfull itll send a 200 message, if not a 400 message

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://httpbin.org/post", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    linkdin: linkdin
                }),
            });

            let resJson = await res.json();

            if (res.status === 200) {
                setName("");
                setEmail("");
                setLinkedin("");
                setMessage("sucesfully submitted");
                console.log(res.status);
            } else {
                setMessage("Some error occured");
            }

        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            {/* job link that will apprear on the page */}
            <a onClick={handleShow}>
                <h5 className="job-title link-detail">
                    {props.jobTitle} {props.loc}
                </h5>
            </a>
            {/* code for the side menu */}
            <Offcanvas show={show} placement="end" onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        {props.jobTitle}
                        <p className="offcanvas-job-location">{props.loc}</p>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Container>

                </Container>
                <Offcanvas.Body>
                    <h6>{props.description}</h6>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label for="name" >Name</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label for="email">Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="linkedin">
                            <Form.Label for="linkedin" >Linkedin Profile</Form.Label>
                            <Form.Control type="url" placeholder="Enter your full Linkedin URL" value={linkdin} onChange={(e) => setLinkedin(e.target.value)} required></Form.Control>
                        </Form.Group>

                        <div className="button-location">
                            <Button role="submit button" variant="light" type="submit">
                                Submit Application
                            </Button>
                        </div>
                        <div className="message">{message ? <p>{message}</p> : null}</div>
                    </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SideMenu
