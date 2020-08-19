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

               



            </div>
        )
    }
}

export default Education