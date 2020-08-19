import React, { Component } from 'react';
import Experience from "./experience"
import Education from "./education"
import Skills from "./skills"
import "../pages/card.css"

class Resume extends Component {
    render() { 
    return(
           <div>
               <Experience></Experience>
               <Education></Education>
               <Skills></Skills>
           </div>
          
          

        )
}
}
export default Resume