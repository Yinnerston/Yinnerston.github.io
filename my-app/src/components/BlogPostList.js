import React from 'react'
import ReactScrollableList from 'react-scrollable-list'
import 'constants.css'

/**
 * Static Scrollable list containing all my blog posts.
 * @returns 
 */
function BlogPostList() {
    return (
        <ReactScrollableList
        listItems={[
            {
                id: "12/12/22",
                content: 
                <div>
                    <h3>12/12/22</h3>
                    <p>
                        <a href="https://docs.google.com/document/d/1b-w3BSRZHZiHheeYQfSqR3hu9bZwJ27zXd43SrhooRs/edit?usp=sharing">I completed an Agile Inception Deck Proposal for my new project, Memefeed</a>.
                        The Agile Inception Deck approach (henceforth AID approach) was fascinating to put into practice. In the past, I had written agile proposals by creating epics/user stories, determining the layering of system architecture and modelling how users would interact with the system.
                        The AID approach made me focus on business value proposition of my product.
                    </p>
                    <p>
                        The AID approach made me focus on the value my product would provide to a business. 
                        When designing system architecture, I applied the <a href="https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures">three-layered architecture model</a> and reviewed my product from a purely technical perspective.
                        Using the AID approach helped me categorize the "organizational resources" that were available alongside the correct requirements to prioritize.
                    </p>
                    <p>
                        What's next?
                    </p>
                    <p>
                        I'm going to continue adding to the lucidchart system architecture diagram.
                        I'm also writing up Epics and User stories on Jira. 
                        I have identified <a href="https://www.agilebusiness.org/dsdm-project-framework/moscow-prioririsation.html">MoSCoW Prioritisation</a> as a methodology to look into for refining my requirement prioritisation in this project.
                    </p>
                </div>
            },
            {
                id: "06/12/22",
                content: 
                <div>
                    <h3>6/12/22</h3>
                    <p>
                        I created a dashboard from the <a href="https://console.cloud.google.com/marketplace/product/bigquery-public-data/thelook-ecommerce">theLook eCommerce</a>. 
                        It was a pretty interesting project, as I ended up learning how to use Google Bigquery for storage & queries, schedule updating models in dbt and visualise data using Google Data Studio. 
                        I learnt many things like the best practices for querying BigQuery datasets (including technical details like Broadcast joins) and Kimball's Dimensional Modelling.
                        Terraform fell outside my use-case as the only cloud provider I used was the Google Cloud ecosystem, due to the 1TB of free queries on public datasets and and the free trial they offer to each account. 
                        Likewise, using Airflow would have added costs and complexity beyond my use case, but I read the documentation and took notes <a href="https://docs.google.com/document/d/1dDA3epZMJDD8MFGUDYFgs9X5-l5_Es_mrqsgKdEM0m8/edit?usp=sharing">here</a>.
                    </p>
                    <p>
                        I'll write a longer follow-up blog post on this, but you can view the dashboard I created <a href="https://datastudio.google.com/s/qd1dkgpHtms">here</a> and my code <a href="https://github.com/Yinnerston/data-engineering-zoomcamp">here</a>.
                    </p>
                    <p>
                        I'm planning on writing an injestion script to extract data from Twitter/Amazon and using Github Actions to deploy my code to a Google cloud function. Then to schedule a cronjob with google scheduler to continue to injest data into GCS.
                        I'm avoiding Airflow for this project due to the unnecessary complexity and costs it adds.
                    </p>
                </div>
            },
            {
                id: "27/11/22",
                content: 
                <div>
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
            }
        ]}
        style={{ maxHeight: "var(--blog-post-list-height)", overflowY : "scroll"}}>
        </ReactScrollableList>

    );
}

export default BlogPostList;