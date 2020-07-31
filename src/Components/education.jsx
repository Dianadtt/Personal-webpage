import React, { Component } from 'react';
import data from "../education.json"
import education from '../assets/education.jpg';
import certificate from '../assets/certificate.jpg';
import language from '../assets/language.jpg';
import Card from './card';
import CardHeader from './card-header';
import CardContent from './card-content';


class Education extends Component {
    render() {
        return (
            <div>
                <div className="education">
                    <div id="header-education" className="banner-text">
                        <img src={education} alt="education" />
                        <h4>Education</h4>
                    </div>    
                        {data.map(school => {
                        return (
                            <Card key={school.id} zoomOnHover={true}>
                                <CardHeader 
                                    logo={`${process.env.PUBLIC_URL}/staticAssets/${school.img}`}
                                    logoAlt="school"
                                    title={school.university}
                                    period={school.period}
                                    location={school.location}
                                    additional={school.title}
                                    />
                                <CardContent text={school.description}/>
                            </Card>
                        )
                    })}
                </div>


                <div id="header-education" className="banner-text">
                    <img src={certificate} alt="certificate" />
                    <h4>Licenses & Certifications</h4>
                </div>
                <div className="banner-text">
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


                <div id="header-education" className="banner-text">
                    <img src={language} alt="language" />
                    <h4>Languages</h4>
                    <div >
                    <ul>
                        <li>Romanian</li>
                        <li>Hungarian</li>
                        <li>English</li>
                    </ul>
                </div>
                </div>
               


            </div>
        )
    }
}

export default Education