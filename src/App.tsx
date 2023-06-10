import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import ContactMe from './components/ContactMe/ContactMe';
import Projects from './components/Projects/Projects';

function App() {
  
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path = '/' element = {<LandingPage/>} />
        <Route path = '/about' element = {<AboutMe/>} />
        <Route path = '/resume' element = {<Resume/>} />
        <Route path = '/contact' element = {<ContactMe/>} />
        <Route path = '/projects' element = {<Projects/>} />
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App
