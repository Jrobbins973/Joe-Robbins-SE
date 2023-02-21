import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si"
import Projects from './Projects';

function Experience(props) {
    const {projects} = props
    

    const renderProjects = projects.map(project => <Projects key={project.id} project={project}/>)
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    
    return (
        <div className='work-experience'>
            <h1 className='portfolio-title'>Projects</h1>
            <br></br>
            <br></br>

            <div className='project-container'>

            {renderProjects}
            </div>
            {/* <img className='portfolio-img' src= "https://i.imgur.com/K6EavPu.png"/> */}
            
            

            {/* <div className='projects'>
                <h2 style={{marginBottom: '5px'}}>Apartment-Connect | <a href='https://www.youtube.com/watch?v=I21CF9-EHDw' target="_blank">VIDEO DEMO</a></h2>
                <p><i>Flatiron Project</i></p>
                <br></br>
                <p>Central Hub for apartment tenants to access lease information, participate in forums, schedule events, and monitor rent information</p>
                <div className='portfolio-stack'>

                
                </div>

            </div> */}
                {/* <h3 onClick={() => openInNewTab('https://github.com/Jrobbins973')}>Check out my GitHub for other projects I completed during my boot camp!</h3> */}

                
        </div>
    )
}

export default Experience