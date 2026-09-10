import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Process from "./components/Process.jsx";
import Team from "./components/Team.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./hooks/useReveal.js";

import "./styles/global.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/services.css";
import "./styles/about.css";
import "./styles/process.css";
import "./styles/team.css";
import "./styles/cta-footer.css";

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Team />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
