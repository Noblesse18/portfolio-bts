import Hero from "./section/Hero";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./section/About";
import Skill from "./section/Skill";
import Parcours from "./section/Parcours";
import Projet from "./section/Projet";
import Veille from "./section/Veille";
import Contact from "./section/Contact";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Parcours />
      <Projet />
      <Veille />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
