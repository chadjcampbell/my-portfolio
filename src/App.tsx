import { useState, useEffect } from "react";
import "./App.css";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Nav } from "./components/nav/Nav";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className="App">
      {loading && <Loading />}
      <main>
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
