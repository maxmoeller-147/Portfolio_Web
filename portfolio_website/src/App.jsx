import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Footer from "./components/footer"

function App() {
  return (
    <>
      {/* Global Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">

      {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[56px_56px] text-primary opacity-[0.03]" />
      </div>

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