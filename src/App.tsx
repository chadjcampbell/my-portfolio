import "./App.css";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
