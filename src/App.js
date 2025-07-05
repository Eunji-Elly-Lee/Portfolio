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
      <NavBar useKorean={useKorean} setUseKorean={setUseKorean} />
      <About useKorean={useKorean} />
      <Projects useKorean={useKorean} />
      <Skills useKorean={useKorean} />
      <Contact useKorean={useKorean} />
    </div>
  );
}

export default App;
