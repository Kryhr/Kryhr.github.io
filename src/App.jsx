import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProjectReveal from "./components/ProjectReveal.jsx";
import About from "./components/About.jsx";
import OtherWork from "./components/OtherWork.jsx";
import SchoolProjects from "./components/SchoolProjects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <ProjectReveal />
        <About />
        <OtherWork />
        <SchoolProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
