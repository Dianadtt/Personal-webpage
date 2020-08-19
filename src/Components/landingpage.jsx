import React, { Component } from 'react';
import img from '../assets/avatar.jpg';
import Typical from 'react-typical'
import RandomQuote from './randomQ'
import "../pages/landing-page.css"

class Landing extends Component {
    render() {
        return (
            <div className="landing-page">
                <img className="avatar-img" src={img} alt="Diana Toth" />
                <div className="banner-text">

                    <h1>
                        I'm a {''}
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Frontend Developer',
                                1000,
                                'Mountain enthusiast',
                                1000,
                                'Runner',
                                1000,
                                'Team Player',
                                1000,
                            ]}
                        />
                    </h1>
                    <hr />
                    <h1>HTML | CSS | JavaScript | React</h1>
                    <hr />
                    <div className="about-me-links">
                        <h1>A bit about me:</h1>
                        <a href="/personal-webpage/projects"><span>Projects</span></a>
                        <a href="/personal-webpage/resume"><span>Resume</span></a>
                        <a href="/personal-webpage/contact"><span>Contact</span></a>
                    </div>
                    <div className="social-links ">
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/diana-toth-825843111/" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        {/* git hub account */}
                        <a rel="noopener noreferrer" href="https://github.com/Dianadtt" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        {/* facebook account */}
                        <a rel="noopener noreferrer" href="https://www.facebook.com/diana.toth.33" target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        {/* instagram account */}
                        <a rel="noopener noreferrer" href="https://www.instagram.com/diana.toth/?hl=ro" target="_blank">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>                   
                    <hr />
                    <RandomQuote />
                </div>
            </div>
        )
    }
}

export default Landing