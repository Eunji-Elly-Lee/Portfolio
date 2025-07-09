import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [useKorean, setUseKorean] = useState(true);

  return (
    <div className="wrapper">
      <header>
        <NavBar useKorean={useKorean} setUseKorean={setUseKorean} />
      </header>
      <main className="pt-5">
        <About useKorean={useKorean} />
        <Projects useKorean={useKorean} />
        <Skills useKorean={useKorean} />
        <Contact useKorean={useKorean} />
      </main>
    </div>
  );
}

export default App;
