import React from 'react'
import { TbArrowBigDownLines } from "react-icons/tb";
import { FiChevronsDown } from "react-icons/fi";



function AboutMe() {
return (
    <div>

    <div className='about-me-box'>
        <div className='about-me-content'>
        <h1>Hi, I'm Joe Robbins!</h1>
        <p>I'm a New Jersey based front-end software engineer; A former exercise physiologist who loves all things health and wellness, exploring the world, and hanging out with my dog Franklin</p>
        <a className='down-arrow' href="/" onClick={e => {
            let contact = document.getElementById("contact");
            e.preventDefault()
            contact && contact.scrollIntoView({ behavior: "smooth", block: "start"})
            }}> <FiChevronsDown /> </a>
        </div>
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