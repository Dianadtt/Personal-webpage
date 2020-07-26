import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, FooterLinkList, Footer, FooterSection } from 'react-mdl'
import Main from "./Components/main"
import { Link } from 'react-router-dom'

//className="demo-big-content"
function App() {
    return (
        <div >
            <Layout  >
                <Header className="header-color" title="Diana Toth" scroll >


                    <Navigation>
                        <Link to="/landingpage">Home</Link>
                        <Link to="/aboutMe">About Me</Link>
                        <Link to="/experience">Experience</Link>
                        <Link to="/education">Education</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Diana Toth">
                    <Navigation >
                        <Link to="/landingpage">Home</Link>
                        <Link to="/aboutMe">About Me</Link>
                        <Link to="/experience">Experience</Link>
                        <Link to="/education">Education</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>

                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
                <Footer className="header-color" size="mini">
                    <FooterSection type="left" logo="@DianaToth">
                        <FooterLinkList>
                            <a href="/">Help</a>
                            <a href="/contact">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </Layout>
        </div>

    );
}

export default App;
