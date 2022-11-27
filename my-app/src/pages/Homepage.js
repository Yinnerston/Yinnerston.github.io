import React from "react";
import selfie from "assets/selfie.jpg"
import resume from "assets/resume.pdf"
import { Col, Container, Row } from "react-bootstrap";

function Homepage() {
    return (
        <div>
            <h1>Looking for internships and junior dev positions.</h1>
            <Container>
                <Row>
                    <Col>
                        <p>I'm really really really interested in Data Engineering positions!!!</p>
                    </Col>
                    <Col>
                        <img src={selfie}>
                        </img>
                    </Col>
                </Row>
            </Container>
            <embed src={resume} width="100%" height="1000vh" type="application/pdf" />
        </div>
    );
}

export default Homepage;