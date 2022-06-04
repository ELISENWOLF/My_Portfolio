import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ParticlesComponent from './components/particles/ParticlesComponent'
import SoundBar from './components/sound/SoundBar'

function App() {
  return (
    <>
      <SoundBar />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <ParticlesComponent id='tsparticles'/>
    </>
  );
}

export default App;
