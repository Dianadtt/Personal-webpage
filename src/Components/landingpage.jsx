import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl';
import img from '../assets/avatar.jpg';
import Typical from 'react-typical'
import RandomQuote from './randomQ'
class Landing extends Component {
    render() {
        return (
            <div className="landing-page">



                <div className="banner-text">
                    <img className="avatar-img" src={img} alt="Diana Toth" />
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