import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si"

function Experience() {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    
    return (
        <div className='work-experience'>
            <h1>Portfolio</h1>
            <img className='portfolio-img' src= "https://i.imgur.com/K6EavPu.png"/>
            <img className='portfolio-img' style={{marginLeft: '20px'}} src= "https://i.imgur.com/4UUJH4U.png"/>
            

            <div className='projects'>
                <h2 style={{marginBottom: '5px'}}>Apartment-Connect | <a href='https://www.youtube.com/watch?v=I21CF9-EHDw' target="_blank">VIDEO DEMO</a></h2>
                <p><i>Flatiron Capstone Project</i></p>
                <br></br>
                <p className='portfolio-desc'>Central Hub for apartment tenants to access lease information, participate in forums, schedule events, and monitor rent information</p>
                <div className='portfolio-stack'>

                <p>React / CSS Front-End </p>
                
                <br></br>
                <p>Ruby on Rails Back-End</p>
                </div>

                <h3 onClick={() => openInNewTab('https://github.com/Jrobbins973')}>Check out my GitHub for other projects I completed during my bootcamp!</h3>

                
            </div>
        </div>
    )
}

export default Experience