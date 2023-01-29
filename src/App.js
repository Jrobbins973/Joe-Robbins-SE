import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src = "https://i.imgur.com/SzaZ9l2.png"/>
      </div>

    <div className='grid-container'>
      <AboutMe />
      <AboutMe />
      <AboutMe />
      <AboutMe />
      <AboutMe />
      <AboutMe />
      <AboutMe />
      <AboutMe />
      </div>

{/* 
    <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div > */}
    </div>
  );
}

export default App;
