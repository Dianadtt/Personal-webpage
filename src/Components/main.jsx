import React from 'react';
import LandingPage from "./landingpage"
import AboutMe from "./aboutMe"
import Project from "./projects"
import Experience from "./experience"
import Contact from "./contact"
import Education from "./education"

import {Switch, Route} from "react-router-dom"
// import Experience from './experience';
const baseUrl = '/personal-webpage';
const Main=()=>(
    <Switch>
        <Route exact path={`${baseUrl}/`} component={LandingPage}/>
        <Route exact path={`${baseUrl}/landingpage`} component={LandingPage}/>
        <Route exact path={`${baseUrl}/about-me`} component={AboutMe}/>
        <Route exact path={`${baseUrl}/projects`} component={Project}/>
        <Route exact path={`${baseUrl}/experience`} component={Experience}/>
        <Route exact path={`${baseUrl}/education`} component={Education}/>
        <Route exact path={`${baseUrl}/contact`} component={Contact}/>
       
    </Switch>

)
export default Main