import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        <section id="home">
          <Hero />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>        
      </main>

      <Footer />

    </>
  )
}

export default App
