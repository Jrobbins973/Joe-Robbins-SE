import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Portfolio';
import ContactInfo from './components/ContactInfo';
import Technology from './components/Technology';


function App() {

  const projects = [
    {
      title: 'ApartmentConnect',
      description: "Lets members of an apartment complex communicate with each other via forum, schedule events, request maintenance, and view leasing information.",
      image: 'https://i.imgur.com/K6EavPu.png',
      tags: ['React', 'ChatEngine', 'Firebase'],
      source: 'https://github.com/Jrobbins973/ApartmentConnect-FrontEnd',
      video: '',
      technology: 'React | Ruby on Rails | Postgresql | HTML/CSS | Google Maps API',
      id: 4,
    },
    {
      title: 'Reactr',
      description: "Text based social network. users can create, edit, and delete their own posts, as well as follow other users and comment on their posts.",
      image: 'https://i.imgur.com/RAuy4FJ.png',
      tags: ['React', 'ChatEngine', 'Firebase'],
      source: 'https://github.com/nardling/phase-4-project',
      video: '',
      technology: 'React | Ruby on Rails | HTML/CSS',
      id: 3,
    },
    {
      title: 'MovieBuddy',
      description: "Movie database that allows users to view, comment, and rate movies.",
      image: 'https://i.imgur.com/4ttIp9o.jpg',
      tags: ['React', 'WebRTC'],
      source: 'https://github.com/Jrobbins973/phase-3-front-end-react',
      video: '',
      technology: 'React | Sinatra/Active Record | HTML/CSS | SemanticUI',
      id: 2,
    },
    {
      title: 'Pro-active',
      description:"Health and Wellness app designed for those working from home. Provides stretches to do, along with equipment to maintain a healthy lifestyle.",
      image: 'https://i.imgur.com/hy1sasZ.png',
      tags: ['React', 'JavaScript'],
      source: 'https://github.com/Jrobbins973/Phase-2-Project',
      video: 'https://www.youtube.com/watch?v=xLumepkzLEM',
      technology: "React | SemanticUI | HTML/CSS",
      id: 1,
    },
    {
      title: 'YourFitnessFriend',
      description: "Simple workout planning app. Lets users plan a workout, view sets and reps, and add / remove them from their schedule.",
      image: 'https://i.imgur.com/r80auoK.png',
      tags: ['JavaScript', 'Express', 'React', 'Node'],
      source: 'https://github.com/Jrobbins973/Exercise-api',
      video: 'https://www.youtube.com/watch?v=N-IjnXJAWWA',
      technology: 'JavaScript | HTML/CSS',
      id: 0,
  },
  ]










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
          <Experience projects = {projects}/>
        </section>

    </div>
  </div>
  );
}

export default App;
