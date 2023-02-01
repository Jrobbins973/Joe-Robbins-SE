import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ContactInfo from './components/ContactInfo';
import Technology from './components/Technology';


function App() {
  return (
  <div className="App">
      <div className='header'>
        {/* NAV BAR BUTTON */}
        <a href="/" onClick={e => {
            let home = document.getElementById("home");
            e.preventDefault()
            home && home.scrollIntoView({ behavior: "smooth", block: "start"})
          }}> HOME </a>

        {/* NAV BAR BUTTON */}
    <a href="/" onClick={e => {
            let contact = document.getElementById("contact");
            e.preventDefault()
            contact && contact.scrollIntoView({ behavior: "smooth", block: "start"})
          }}> ABOUT ME </a>

            
{/* NAV BAR BUTTON */}
    <a href="/" onClick={e => {
            let experience = document.getElementById("experience");
            e.preventDefault()
            experience && experience.scrollIntoView({ behavior: "smooth", block: "start"})
          }}> PORTFOLIO </a>



          
      </div>

      

    <div className='grid-container'>

      <section id='home'>
      <AboutMe />
      
      </section>

        <section id="contact">
          <ContactInfo />
          <Technology />
        </section>


        <section id='experience'>
          <Experience />
        </section>

    </div>
  </div>
  );
}

export default App;
