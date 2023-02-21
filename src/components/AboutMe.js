import React from 'react'
import { TbArrowBigDownLines } from "react-icons/tb";
import { FiChevronsDown } from "react-icons/fi";
import {BsArrowDownSquare} from "react-icons/bs"


function AboutMe() {
return (
    <div>

    <div className='about-me-box'>
        <div className='about-me-content'>
        <p style={{fontSize: "30px"}}>Welcome! My name is</p>
        <h1 style={{color: 'white'}}>Joe Robbins</h1>
        <h3>I'm a Software Developer</h3>
        <h5 style={{fontSize: '24px'}}>I am currently searching for software engineering roles, and am eager to join a new team where I can continue to learn and expand my skill set</h5>
        </div>
        <a className='down-arrow' href="/" onClick={e => {
            let contact = document.getElementById("contact");
            e.preventDefault()
            contact && contact.scrollIntoView({ behavior: "smooth", block: "start"})
            }}> <FiChevronsDown size={50}/> </a>
        {/* <p>I am a former exercise physiologist and researcher who is now making a career transition into software engineering.  </p>
        <br></br>
        <p>I believe that my unique background and experience will bring a valuable perspective to the field of software engineering. I am excited to take on this new challenge and see where it takes me.</p>
        <br></br>
        <p>Continue scrolling to learn a little more about me and my background. If you want to get straight to business, click the navigation links above.</p> */}
    </div>
    </div>
)
}

export default AboutMe