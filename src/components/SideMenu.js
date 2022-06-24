import React, { useState } from 'react'
import { Button, Container, Offcanvas, Form } from 'react-bootstrap'
import "../style/job.scss"

function SideMenu(props) {
    // hook used for side menu, false no show / true will show
    const [show, setShow] = useState(false);

    // use case for form elements
    const [name, setName] = useState("");
    const [id, setId] = useState(0)
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
            // this is a fake REST api, which will accept whats in the form
            // only used during this mock, will return a 200 response
            let res = await fetch('https://webhook.site/3a6ffaf7-0cad-42d5-9aa2-dc50f9745444', {
                method: 'POST',
                mod: 'no-cors',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type':"application/json"
            },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    linkedin: linkdin
                }),
            });

            // checks status of results and clears useStates
            if (res.status === 200) {
                setId(id+1);
                setName("");
                setEmail("");
                setLinkedin("");
                setMessage("sucesfully submitted");
                // console.log(res.status);
            } else {
                // console.log(res.status);
                setMessage("Submit failed");
            }

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {/* job link that will apprear on the page */}
                <h5 key={props.keyId} className="job-title link-detail" onClick={handleShow}>
                    {props.jobTitle} {props.loc}
                </h5>
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
                    <Form role="form" onSubmit={handleSubmit}>
                    {/* form to apply */}
                        <Form.Group controlId="name">
                            <Form.Label >Name</Form.Label>
                            <Form.Control htmlFor="name" type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label >Email</Form.Label>
                            <Form.Control htmlFor="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="linkedin">
                            <Form.Label  >Linkedin Profile</Form.Label>
                            <Form.Control htmlFor="linkedin url" type="url" placeholder="Enter your full Linkedin URL" value={linkdin} onChange={(e) => setLinkedin(e.target.value)} required></Form.Control>
                        </Form.Group>

                        <div className="button-location">
                            <Button htmlFor="submit button" role="submit button" variant="light" type="submit">
                                Submit Application
                            </Button>
                        </div>
                        {/* will show a message if all data is submitted correctly */}
                        <div className="message">{message ? <p>{message}</p> : null}</div>
                    </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SideMenu
