import React from 'react'
import ReactScrollableList from 'react-scrollable-list'


function BlogPostList() {
    return (
        <ReactScrollableList
        listItems={[
            {
                id: "06/12/22",
                content: <div>
                <h3>6/12/22</h3>
                <p>
                    I created a dashboard from the <a href="https://console.cloud.google.com/marketplace/product/bigquery-public-data/thelook-ecommerce">theLook eCommerce</a>. 
                    It was a pretty interesting project, as I ended up learning how to use Google Bigquery for storage & queries, schedule updating models in dbt and visualise data using Google Data Studio. 
                    I learnt many things like the best practices for querying BigQuery datasets (including technical details like Broadcast joins) and Kimball's Dimensional Modelling.
                    Terraform fell outside my use-case as the only cloud provider I used was the Google Cloud ecosystem, due to the 1TB of free queries on public datasets and and the free trial they offer to each account. 
                    Likewise, using Airflow would have added costs and complexity beyond my use case, but I read the documentation and took notes <a href="https://docs.google.com/document/d/1dDA3epZMJDD8MFGUDYFgs9X5-l5_Es_mrqsgKdEM0m8/edit?usp=sharing">here</a>.
                </p>
                <p>
                    I'll write a longer follow-up blog post on this, but you can view the dashboard I created <a href="https://datastudio.google.com/s/qd1dkgpHtms">here</a> and my code <a href="https://github.com/Yinnerston/data-engineering-zoomcamp">here</a>
                </p>
            </div>
            },
            {
                id: "27/11/22",
                content: <div>
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
        ]}>
        </ReactScrollableList>
    );
}

export default BlogPostList;