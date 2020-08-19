import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, FooterLinkList, Footer, FooterSection } from 'react-mdl'
import Main from "./Components/main"
import { Link } from 'react-router-dom'

function App() {
    return (
        <div >
            <Layout  >
                <Header className="header-color" title="Diana Toth" scroll >
                    <Navigation className="header">
                        <Link to="/personal-webpage/landingpage">Home</Link>
                        <Link to="/personal-webpage/about-me">About Me</Link>
                        <Link to="/personal-webpage/resume">Resume</Link>                       
                        <Link to="/personal-webpage/projects">Projects</Link>
                        <Link to="/personal-webpage/contact">Contact</Link>                       
                    </Navigation>
                </Header>
                <Drawer title="Diana Toth">
                    <Navigation >
                        <Link to="/personal-webpage/landingpage">Home</Link>
                        <Link to="/personal-webpage/about-me">About Me</Link>
                        <Link to="/personal-webpage/resume">Resume</Link>                    
                        <Link to="/personal-webpage/projects">Projects</Link>
                        <Link to="/personal-webpage/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
                <Footer className="header-color" size="mini">
                    <FooterSection type="middle" logo="">
                        <FooterLinkList>
                            <a href="/personal-webpage/contact">@DianaToth</a>
                            <div className="social-links ">
                                <p>Folow me:</p>
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
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
