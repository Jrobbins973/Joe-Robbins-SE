import React from 'react'
import Technology from './Technology';
function ContactInfo() {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };


    return (
        <div className='contact-info'>

            <div className='contact-info-content'>
            <h1>About Me</h1>
            <br></br>
            <img src = 'https://i.imgur.com/8P3krwf.jpg'/>
            <p>Front-End Developer with a background in exercise physiology and clinical research. Experienced in technologies including JavaScript, React, Ruby, Rails, and Sinatra. I transitioned into this field out of my love for helping others, technology, and learning. </p>
            </div>

        <div className='site-links'>
            <div className='site-link-style'>
                <a href='https://www.linkedin.com/in/joe-robbins-swe/' target="_blank">LinkedIn</a>
                
                <a href='https://github.com/Jrobbins973' target="_blank">GitHub</a>
                
                <a href='https://medium.com/@joe.robbins.cpt' target="_blank">Medium</a>
            </div>
        </div>



        
        <button className='resume-button' onClick={() => openInNewTab('https://docs.google.com/document/d/1AuSzSV9tqUztxQoA3aDiaqFlox52Ex7NpG4aZZDwP6w/edit?usp=sharing')}> View Resume </button>

     

        
        </div>
    )
}

export default ContactInfo