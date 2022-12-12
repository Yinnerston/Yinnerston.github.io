import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SocialIcon } from 'react-social-icons';
import "./PageHeader.css"

/**
 * Page header with links to socials.
 * @returns 
 */
function PageHeader()   {
    return (
        <Navbar collapseOnSelect sticky="top"
        expand="lg">
            <Navbar.Brand className="MyBrand" >Nathan Yin</Navbar.Brand>
            <Nav as="ul">
                <SocialIcon className="headerIcon" url="https://www.linkedin.com/in/nathanyin/" fgColor="white" />
                <SocialIcon className="headerIcon" url="https://github.com/Yinnerston" fgColor="white" />
                <SocialIcon className="headerIcon" network="email" url="mailto: nathanzjyin@gmail.com" fgColor="white" label="nathanzjyin@gmail.com"/>
                <p className="MyEmail">
                    nathanzjyin@gmail.com
                </p>
                
            </Nav>
        </Navbar>
    );
}

export default PageHeader;