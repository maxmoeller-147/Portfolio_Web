import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Projects from "./components/projects"

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
          <h1>Skills</h1>
        </section>

        <section id="contact">
          <h1>Contact</h1>
        </section>        
      </main>

    </>
  )
}

export default App
