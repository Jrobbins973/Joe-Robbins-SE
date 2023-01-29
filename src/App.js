import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import MyBackground from './components/MyBackground';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src = "https://i.imgur.com/SzaZ9l2.png"/>
          <div className='social-icons'>
          <a href='https://www.linkedin.com/in/joe-robbins-swe/' target="_blank"><FaLinkedinIn size={22}/></a>
          <a href='https://github.com/Jrobbins973' target="_blank"><FaGithub size={22}/></a>
          <a href='https://medium.com/@joe.robbins.cpt' target="_blank"><  FaMedium size={22}/></a>
          </div>
          {/* <button className='button-28'>CONNECT</button> */}
          <a className='contact-me-button' href='mailto:joe.robbins.swe@gmail.com' target="_blank">Lets Connect!</a>
      </div>

    <div className='grid-container'>
      <AboutMe />
      <AboutMe />

        <div data-aos="fade-up" 
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
        <MyBackground />
        </div>
 
      </div>
    </div>
  );
}

export default App;
