import React from "react"
import Layout from "../components/layout"
import gif from "../../static/landing-page-movie.mov.gif"
export default ({location}) => (
  <Layout location={location}>
   <div className="image-explanation-div">
     <div>
     <h1 className='image-heading'>Cypher, Cloud Hosted Databases, Javascript</h1>
     <p className="information">MogwaiJS brings to life an intuitive OGM, keeping
       in mind the declarative nature of the Cypher query language.
       With the ever-increasing popularity of graph databses,
       MogwaiJS makes the process of querying graph Databases
       even simpler in Javascript environments. <i className="arrow right"></i>
     </p>

     </div>
     <div className="logo-image">
     <img src="logo.png"/>
     </div>
     </div>
   <div className="video-explanation-div">
 <img className="giphy-embed"src={gif}/>
    <div className="giphy-info">
     
     <p className="information2">MogwaiJS brings to life an intuitive OGM, keeping
       in mind the declarative nature of the Cypher query language.
       With the ever-increasing popularity of graph databses,
       MogwaiJS makes the process of querying graph Databases
       even simpler in Javascript environments. <br></br><i className="arrow left"></i></p>
       </div>
     </div>
  </Layout>
)