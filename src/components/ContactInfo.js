import React from 'react'

function ContactInfo() {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };


    return (
        <div className='contact-info'>
            <h1>Joe Robbins</h1>
            <h2>Full Stack Developer with a strong background in frontend and backend technologies, including Ruby, Rails, Sinatra, JavaScript, and React. </h2>

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