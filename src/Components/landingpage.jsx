import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl';
import img from '../assets/avatar.jpg';

import RandomQuote from './randomQ'
class Landing extends Component {
    render() {
        return (
            <div className="landing-page">
                {/* <Grid className="landing-grid"> */}
                {/* <Cell col={12}></Cell> */}

                <img className="avatar-img" src={img} alt="Diana Toth" />

                <div className="banner-text">
                    <h1>Front End Developer</h1>
                    <hr />
                    <p>HTML/CSS | JavaScript | React</p>
                    <hr />
                    <div className="social-links">
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/diana-toth-825843111/" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                        {/* git hub account */}
                        <a rel="noopener noreferrer" href="https://github.com/Dianadtt" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        {/* facebook account */}
                        <a rel="noopener noreferrer" href="https://www.facebook.com/diana.toth.33" target="_blank">
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        </a>
                        {/* instagram account */}
                        <a rel="noopener noreferrer" href="https://www.instagram.com/diana.toth/?hl=ro" target="_blank">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                       
                    </div>
                    <hr />
                    <RandomQuote />
                </div>
                {/* </Grid> */}
            </div>
        )
    }
}

export default Landing