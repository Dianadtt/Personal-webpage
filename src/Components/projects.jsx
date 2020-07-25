import React, { Component } from 'react';

import data from "../projects.json"
class Project extends Component {

    state={
        isActive:false,
        
    }
    handleShow=()=>{
        this.setState({
            isActive:true,
           
        })
    }
    handleHide=()=>{
        this.setState({
            isActive:false
        })
    }

    render() {
        return (
            <div className="container">
                <div className="project">
                    {data.map(project => {
                        return (
                            <div  key={project.id}>
                            <div className="card">
                                <h5>{project.title}</h5>
                                <p>{project.description}</p>

                                <img id="project-image" src={project.img} alt="project"></img>
                                <div className="links">
                                    <a rel="noopener noreferrer" href={project.linkForCode} target="_blank">
                                        <i className="fa fa-github" aria-hidden="true"></i>
                                Source Code
                                </a>

                                    <a rel="noopener noreferrer" href={project.linkForProject} target="_blank">
                                        <i className="fa fa-link" aria-hidden="true"></i>
                                Demo
                                </a>
                                    <i onMouseOver={this.handleShow} onMouseLeave={this.handleHide} id="arrow-down" className="fa fa-angle-down" aria-hidden="true"></i>
                                   
                                   
                                </div>
                               

                            </div>
                             <div className="card">
                             {this.state.isActive? <div onMouseLeave={this.handleHide}  > <p>{project.description}</p></div>:null}
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