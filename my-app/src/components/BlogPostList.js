import React from 'react'
import ReactScrollableList from 'react-scrollable-list'


function BlogPostList() {
    return (
        <ReactScrollableList
        listItems={[
            {
                id: "6/12/22",
                content: <div>
                <h3>6/12/22</h3>
                <p>
                    I created a dashboard from the <a href="https://console.cloud.google.com/marketplace/product/bigquery-public-data/thelook-ecommerce">theLook eCommerce</a>. 
                    It was a pretty interesting project, as I ended up learning how to use Google Bigquery, dbt and Data Studio. 
                    I learnt many things like the best practices for querying BigQuery datasets (including technical details like Broadcast joins) and Kimball's Dimensional Modelling.
                </p>
                <p>
                    I'll write a longer follup up blog post on this, but you can view the dashboard I created <a href="https://datastudio.google.com/s/qd1dkgpHtms">here</a> and my code <a href="https://github.com/Yinnerston/data-engineering-zoomcamp">here</a>
                </p>
                <p>
                    Following the <a href="https://github.com/Yinnerston/data-engineering-zoomcamp">DataTalksClub Zoomcamp!</a>
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