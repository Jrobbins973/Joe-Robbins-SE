import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ContactInfo from './components/ContactInfo';




function App() {
  return (
  <div className="App">
      <div className='header'>
      </div>

    <div className='grid-container'>
      <AboutMe />
      <ContactInfo />
      <Experience />
    </div>
  </div>
  );
}

export default App;
