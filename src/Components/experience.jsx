import React, { Component } from 'react';
import data from "../experience.json"
class Experience extends Component {
    render() {
        return (

            <div className="experience">
                <div className="card">
                    <h4>Experience</h4>
                </div>
                {data.map(job => {
                    return (
                        <div key={job.id} className="card">
                            <h5>{job.title}</h5>
                            <div >
                            <img id="job-logo" src={`${process.env.PUBLIC_URL}/staticAssets/${job.img}`} alt="job"></img>
                                </div>
                                <div className="company-details">
                                <p>{job.company}</p>
                                <p>{job.period}</p>
                                <p>{job.location}</p>
                            </div>

                            <p id="text">{job.description}</p>
                            <img id="work-img" src={`${process.env.PUBLIC_URL}/staticAssets/${job.workImg}`} alt="work"></img>



                        </div>
                    )
                })}

                
            </div>
        )
    }
}

export default Experience