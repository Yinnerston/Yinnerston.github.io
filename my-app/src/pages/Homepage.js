import React from "react";
import selfie from "assets/selfie.png"
import background from "assets/background.png"
import resume from "assets/resume.pdf"
import "./Homepage.css"

function Homepage() {
    return (
        <div className="homepageDiv" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
            <h1>Looking for internships and junior dev positions.</h1>
            <div className="container">
                <div className="textContainer">
                    <h3>27/11/22</h3>
                    <p>
                       I discovered the field of Data Engineering a week ago and it looks really interesting!
                    </p>
                    <p>
                        Right now, I'm working on a DE project using Docker, Terraform, Google Bigquery, dbt, Data Studio, Apache Spark and Airflow.
                    </p>
                    <p>
                        Following the <a href="https://github.com/Yinnerston/data-engineering-zoomcamp">DataTalksClub Zoomcamp!</a>
                    </p>
                </div>
                <img src={selfie} alt="Selfie"></img>
            </div>
            <br></br>
            <h1>Resume:</h1>
            <embed src={resume} width="90%" height="1300vh" type="application/pdf" />

        </div>
    );
}

export default Homepage;