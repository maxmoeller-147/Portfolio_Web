import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Projects from "./components/projects"
import Skills from "./components/skills"

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
          <h1>Contact</h1>
        </section>        
      </main>

    </>
  )
}

export default App
