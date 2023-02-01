import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { SiRuby } from "react-icons/si";



function Technology() {
return (
    <div className='technology-box'>

        <div className='technology-content'>
        <h1>Tech Stack</h1>

            <div className='icons'>
            <FaReact  size={50}/>
            <SiJavascript style={{marginLeft: '20px'}}size={50}/>
            <SiCss3 style={{marginLeft: '20px'}}size={50}/>
            <SiRuby style={{marginLeft: '20px'}}size={50}/>
            <SiRubyonrails style={{marginLeft: '20px'}}size={50}/>
            </div>

        </div>
        
    </div>
    )
    }
    
export default Technology