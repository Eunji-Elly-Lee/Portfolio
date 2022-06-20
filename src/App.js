import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
