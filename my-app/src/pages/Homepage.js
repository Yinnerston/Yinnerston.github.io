import React from "react";
import bocchi_manager from "assets/bocchi-manager.gif"
import background from "assets/background.png"
import resume from "assets/resume.pdf"
import "./Homepage.css"
import BlogPostList from "components/BlogPostList";

/**
 * Homepage of the app
 * @returns 
 */
function Homepage() {
    return (
        <div className="homepageDiv" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
            <h1>Looking for internships and junior dev positions.</h1>
            <div className="container">
                <div className="textContainer">
                <BlogPostList></BlogPostList>
                </div>
                <img id="homepageImage" src={bocchi_manager} alt="Homepage Gif"></img>
            </div>
            <br></br>
            <a href={resume} download><h1>Resume:</h1></a>
            <embed src={resume} width="90%" height="1100vh" type="application/pdf" />
            
        </div>
    );
}

export default Homepage;