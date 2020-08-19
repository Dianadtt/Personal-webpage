import React, { Component } from 'react';
import "../pages/projects.css"

import data from "../projects.json"
class Project extends Component {
    render() {
        return (
            <div >
                {data.map(project => {
                    return (
                        <div key={project.id}>
                            <div className="banner-text">
                                <div className="project-header">
                                    <div className="bullet">{project.id}</div>
                                    <h2>{project.title}</h2>
                                </div>
                                <div className="project-container">
                                    <img id="project-image" src={`${process.env.PUBLIC_URL}/staticAssets/${project.img}`} alt="project"></img>
                                    <p id="project-description">{project.description}</p>
                                </div>
                                <div id="links">
                                    <a rel="noopener noreferrer" href={project.linkForCode} target="_blank">
                                        Code
                                        </a>
                                    <a rel="noopener noreferrer" href={project.linkForProject} target="_blank">
                                        Demo
                                         </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Project