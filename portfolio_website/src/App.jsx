import Navbar from "./components/navbar"
import Hero from "./components/hero"

function App() {
  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        <section id="home">
          <Hero />
        </section>

        <section id="projects">
          <h1>Projects</h1>
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
