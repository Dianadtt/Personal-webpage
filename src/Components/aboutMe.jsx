import React, { Component } from 'react';
import img from '../assets/aboutme.jpg';
import me from '../assets/me.jpg';
class AboutMe extends Component {
    render() {
        return (
            <div className="landing-box" id="about-me">
                <div className="image-container">
                    <img className="about-me" src={img} alt="Diana Toth" />
                    <img className="about-me" src={me} alt="Diana Toth" />
                </div>


                <div className="description-container">


                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versi</p>
                    <hr />

                    <div className="social-links">

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

                </div>

            </div>
        )
    }
}

export default AboutMe