import './App.css'
import About from './components/About'
import Bot from './components/Bot'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Project from './components/Project'
import Skills from './components/Skills'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Bot></Bot>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
