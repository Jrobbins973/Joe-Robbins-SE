import React from 'react'

function ContactInfo() {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };


    return (
        <div className='contact-info'>

            <div className='contact-info-content'>
            <h1>About Me</h1>
            <img src = 'https://i.imgur.com/8P3krwf.jpg'/>
            <p>Full Stack Developer with a background in frontend and backend technologies, including JavaScript, React, Ruby, Rails, and Sinatra. I transitioned into this field out of my love for helping others, technology, and learning. </p>
            </div>

        <a href='https://www.linkedin.com/in/joe-robbins-swe/' target="_blank">LinkedIn</a>
        <br></br>
        <a href='https://github.com/Jrobbins973' target="_blank">GitHub</a>
        <br></br>
        <a href='https://medium.com/@joe.robbins.cpt' target="_blank">Medium</a>



        <button onClick={() => openInNewTab('https://docs.google.com/document/d/1AuSzSV9tqUztxQoA3aDiaqFlox52Ex7NpG4aZZDwP6w/edit?usp=sharing')}> View Resume </button>



        </div>
    )
}

export default ContactInfo