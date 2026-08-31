import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Projects from "./components/Projects.jsx";
import Speaking from "./components/Speaking.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <div aria-hidden="true" className="bg-washes fixed inset-0 -z-10" />
      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-[60]" />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Speaking />
        <Experience />
      </main>
      <Contact />
    </>
  );
}
