import React from "react";
import selfie from "assets/selfie.png"
import background from "assets/background.png"
import resume from "assets/resume.pdf"
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Homepage.css"

function Homepage() {
    return (
        <div className="homepageDiv" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat" }}>
            <h1>Looking for internships and junior dev positions.</h1>
            <Container fluid >
                <Row>
                    <Col xs={6}>
                        <p>I'm really really really interested in Data Engineering positions!!!</p>
                    </Col>
                    <Col xs={6}>
                        <Image fluid={true} src={selfie} roundedCircle={true}></Image>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <embed src={resume} width="90%" height="1000vh" type="application/pdf" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homepage;