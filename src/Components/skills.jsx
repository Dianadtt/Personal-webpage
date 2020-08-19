import React, { Component } from 'react';
import "../pages/card.css"

class Skills extends Component {
    render() {
        return (
            <div className="skills" >
                <div id="certificates">
                    <div id="header-skills" >
                        <h2>Certifications</h2>
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
                <div id="languages">
                    <div id="header-skills">
                        <h2 >Languages</h2>
                    </div>
                    <div>
                        <ul>
                            <li>Romanian</li>
                            <li>Hungarian</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
                <div id="technologies" >
                    <div id="header-skills">
                        <h2 >Technologies</h2>
                    </div>
                    <div>
                        <ul>
                            <li className="css">CSS 70%</li>
                            <li className="javascript">JavaScrit 60%</li>
                            <li className="html">HTML 90%</li>
                            <li className="react">React.js 30%</li>
                            <li className="git">GIT 20%</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Skills




