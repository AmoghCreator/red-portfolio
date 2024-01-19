import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import Socials from './components/Socials/Socials';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { useSelector } from 'react-redux';

function App() {
  const page = useSelector(state => state.page.value);
  return (
    <div className="App">
      <Socials />
    {page == "Home" && <Intro />}
    {page == "Projects" && <Projects />}
    {page == "Contact" && <Contact/>}
      <Nav />
    </div>
  );
}

export default App;
