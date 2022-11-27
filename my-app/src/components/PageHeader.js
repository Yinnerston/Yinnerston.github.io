import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SocialIcon } from 'react-social-icons';
import "./PageHeader.css"

function PageHeader()   {
    return (
        <Navbar collapseOnSelect sticky="top"
        expand="lg">
            <Navbar.Brand className="MyBrand" >Nathan Yin</Navbar.Brand>
            <Nav>
                <SocialIcon classname="headerIcon" url="https://www.linkedin.com/in/nathanyin/" fgColor="white" />
                <SocialIcon classname="headerIcon" url="https://github.com/Yinnerston" fgColor="white" />
                <SocialIcon classname="headerIcon" network="email" url="nathanzjyin@gmail.com" fgColor="white" label="nathanzjyin@gmail.com"/>
                nathanzjyin@gmail.com
            </Nav>
        </Navbar>
    );
}

export default PageHeader;