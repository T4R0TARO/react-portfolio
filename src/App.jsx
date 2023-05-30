import "./App.css";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Intro />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
