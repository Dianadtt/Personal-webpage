import React, { Component } from 'react';
import data from "../education.json"
import education from '../assets/education.jpg';
import certificate from '../assets/certificate.jpg';
import language from '../assets/language.jpg';
import Card from './card';
import CardHeader from './card-header';
import CardContent from './card-content';
import "../pages/card.css"


class Education extends Component {
    render() {
        return (
            <div>
                <div className="education">
                    <div id="header-education" className="banner-text">
                        {/* <img src={education} alt="education" /> */}
                        <h2>Education</h2>
                    </div>
                    {data.map(school => {
                        return (
                            <Card key={school.id} zoomOnHover={false}>
                                <CardHeader
                                    // logo={`${process.env.PUBLIC_URL}/staticAssets/${school.img}`}
                                    // logoAlt="school"
                                    title={school.university}
                                    period={school.period}
                                    location={school.location}
                                    additional={school.title}
                                />
                                <CardContent text={school.description} />
                            </Card>
                        )
                    })}
                </div>
                <div className="skills" >

                <div id="certificates">
                    <div id="header-education" >
                        {/* <img src={certificate} alt="certificate" /> */}
                        <h2>Licenses & Certifications</h2>
                    </div>
                    <div >
                        <ul>
                            <li><span>Aug 2020</span>Front-end Developer</li>
                            <li><span>May 2019</span>Comunication training</li>
                            <li><span>March 2013</span>Procurement specialist</li>
                            <li><span>Oct 2012</span>Driving license</li>
                            <li><span>June 2012</span>Masters degree in Infrastructure Engineering</li>
                            <li><span>June 2010</span>Licence in Civil Engineering</li>
                            <li><span>June 2006</span>Computer science ceritificate</li>
                            <li><span>June 2006</span>Bachelor degree</li>
                        </ul>
                    </div>
                </div>




                <div id="languages" >
                    {/* <img src={language} alt="language" /> */}
                    <div id="header-education">
                    <h2 >Languages</h2>
                    </div>
                   
                    <div  >
                        <ul>
                            <li>Romanian</li>
                            <li>Hungarian</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>

                </div>
               


            </div>
        )
    }
}

export default Education