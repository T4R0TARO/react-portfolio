import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <main>
        <Header />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}

export default App;
