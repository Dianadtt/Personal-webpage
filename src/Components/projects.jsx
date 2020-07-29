import React, { Component } from 'react';

import data from "../projects.json"
class Project extends Component {

    

    render() {
        return (
            <div className="container">
                <div className="project">
                    {data.map(project=> {
                        return (
                            <div key={project.id}>
                                <div className="card">
                                    <h5>{project.title}</h5>
                                    <p id="text">{project.description}</p>

                                   
                                    <img id="project-image" src={`${process.env.PUBLIC_URL}/staticAssets/${project.img}`} alt="project"></img>
                                    
                                    <div className="links">
                                        <a rel="noopener noreferrer" href={project.linkForCode} target="_blank">
                                            <i className="fa fa-github" aria-hidden="true"></i>
                                Source Code
                                </a>

                                        <a rel="noopener noreferrer" href={project.linkForProject} target="_blank">
                                            <i className="fa fa-link" aria-hidden="true"></i>
                                Demo
                                </a>
                                       
                                       

                                    </div>
                                   

                                </div>
                              
                            </div>


                        )
                    })}


                </div>


            </div>
        )
    }
}

export default Project