import React from 'react'
import {VscGithub} from "react-icons/vsc"


const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
};

function Projects(props) {
    const {project} = props



    return (
        <div>
            <div className='project-box'>
                <h1>{project.title} <VscGithub className='project-box__github' onClick={() => openInNewTab(project.source)} size={30}/></h1>
                <br></br>
                <br></br>
                <br></br>
                <img src={project.image}/>
                <h2>{project.description}</h2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>{project.technology}</p>
            </div>


        </div>
    )
}

export default Projects