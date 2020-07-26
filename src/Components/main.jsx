import React from 'react';
import LandingPage from "./landingpage"
import AboutMe from "./aboutMe"
import Project from "./projects"
import Experience from "./experience"
import Contact from "./contact"
import Education from "./education"

import {Switch, Route} from "react-router-dom"
// import Experience from './experience';
const Main=()=>(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/landingpage" component={LandingPage}/>
        <Route exact path="/aboutMe" component={AboutMe}/>
        <Route exact path="/projects" component={Project}/>
        <Route exact path="/experience" component={Experience}/>
        <Route exact path="/education" component={Education}/>
        <Route exact path="/contact" component={Contact}/>
       
    </Switch>

)
export default Main