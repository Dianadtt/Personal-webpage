import React, { Component } from 'react';
import data from "../education.json"
import education from '../assets/education.jpg';
import certificate from '../assets/certificate.jpg';
import language from '../assets/language.jpg';

class Education extends Component {
    render() {
        return (
            <div className="container">
                <div className="education">
                    <div id="header-education" className="card">
                        <img src={education} alt="education" />
                        <h4>Education</h4>
                    </div>
                    {data.map(school => {
                        return (
                            <div key={school.id} className="card">
                                <div className="school-container">
                                    <img id="school-logo" src={school.img} alt="school"></img>
                                   

                                </div>
                                <div className="education-detail">
                                <h5>{school.university}</h5>
                                    <p>{school.period}</p>
                                    <p>{school.location}</p>
                                    <p>{school.title}</p>

                                </div>

                                <p id="text">{school.description}</p>


                            </div>
                        )
                    })}

                </div>

                <div id="header-education" className="card">
                    <img src={certificate} alt="certificate" />
                    <h4>Licenses & Certifications</h4>
                </div>
                <div className="card">
                    <ul>
                        <li><span>Aug 2020</span>Front-end Developer</li><hr></hr>
                        <li><span>May 2019</span>Comunication training</li><hr></hr>
                        <li><span>March 2013</span>Procurement specialist</li><hr></hr>
                        <li><span>Oct 2012</span>Driving license</li><hr></hr>
                        <li><span>June 2012</span>Masters degree in Infrastructure Engineering</li><hr></hr>
                        <li><span>June 2010</span>Licence in Civil Engineering</li><hr></hr>
                        <li><span>June 2006</span>Computer science ceritificate</li><hr></hr>
                        <li><span>June 2006</span>Bachelor degree</li>
                    </ul>

                </div>
                <div id="header-education" className="card">
                    <img src={language} alt="language" />
                    <h4>Languages</h4>
                </div>
                <div className="card">
                    <ul>
                        <li>Romanian</li>
                        <li>Hungarian</li>
                        <li>English</li>
                    </ul>

                </div>

            </div>
        )
    }
}

export default Education