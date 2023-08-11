import Navabar from "./components/navbar/navbar"; 
import Profile from "./components/profile/profile";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import './style.css';
import './mediaqueries.css'
 
function App() {
  return (
    <div>
      <Navabar/>
      <Profile/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;
