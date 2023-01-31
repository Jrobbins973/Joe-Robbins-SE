import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ContactInfo from './components/ContactInfo';




function App() {
  return (
  <div className="App">
      <div className='header'>
      <a href="/" onClick={e => {
            let contact = document.getElementById("contact");
            e.preventDefault()
            contact && contact.scrollIntoView({ behavior: "smooth", block: "start"})
          }}> Contact Information </a>

            

<a href="/" onClick={e => {
            let experience = document.getElementById("experience");
            e.preventDefault()
            experience && experience.scrollIntoView({ behavior: "smooth", block: "start"})
          }}> My Experience </a>




          
      </div>

      

    <div className='grid-container'>
      <AboutMe />

        <section id="contact">
          <ContactInfo />
        </section>

        <section id='experience'>
          <Experience />
        </section>

    </div>
  </div>
  );
}

export default App;
