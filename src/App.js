import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [useKorean, setUseKorean] = useState(true);
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <div className="wrapper">
      <header>
        <NavBar
          useKorean={useKorean}
          setUseKorean={setUseKorean}
          expanded={navExpanded}
          setExpanded={setNavExpanded}
        />
      </header>
      <main
        className={
          `main-container ${navExpanded ? "main-active" : ""}`
        }
      >
        <About useKorean={useKorean} />
        <Career useKorean={useKorean} />
        <Projects useKorean={useKorean} />
        <Skills useKorean={useKorean} />
        <Contact useKorean={useKorean} />
      </main>
    </div>
  );
}

export default App;
