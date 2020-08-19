import React from 'react';
import LandingPage from "./landingpage"
import AboutMe from "./aboutMe"
import Project from "./projects"
import Contact from "./contact"
import Resume from "./resume"
import {Switch, Route} from "react-router-dom"

const baseUrl = '/personal-webpage';
const Main=()=>(
    <Switch>       
        <Route exact path={`${baseUrl}/`} component={LandingPage}/>
        <Route exact path={`${baseUrl}/landingpage`} component={LandingPage}/>
        <Route exact path={`${baseUrl}/about-me`} component={AboutMe}/>
        <Route exact path={`${baseUrl}/projects`} component={Project}/>
        <Route exact path={`${baseUrl}/contact`} component={Contact}/>
        <Route exact path={`${baseUrl}/resume`} component={Resume}/>      
    </Switch>
)

export default Main