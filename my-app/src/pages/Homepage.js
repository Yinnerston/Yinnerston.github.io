import React from "react";
import selfie from "assets/selfie.png"
import background from "assets/background.png"
import resume from "assets/resume.pdf"
import "./Homepage.css"
import BlogPostList from "components/BlogPostList";

function Homepage() {
    return (
        <div className="homepageDiv" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
            <h1>Looking for internships and junior dev positions.</h1>
            <div className="container">
                <div className="textContainer">
                <BlogPostList></BlogPostList>
                </div>
                <img src={selfie} alt="Selfie"></img>
            </div>
            <br></br>
            <a href={resume} download><h1>Resume:</h1></a>
            <embed src={resume} width="90%" height="1100vh" type="application/pdf" />
            
        </div>
    );
}

export default Homepage;