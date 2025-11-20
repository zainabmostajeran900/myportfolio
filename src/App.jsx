import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme-provider";
import { IoIosArrowRoundUp } from "react-icons/io";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
const ProjectDetails = React.lazy(() => import('./components/ProjectDetails.jsx'));
import ProjectsArchive from "./components/ProjectsArchive";
import ScrollToTop from "./components/ScrollToTop";

function MainPage() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const { ref } = useInView({
    triggerOnce: false,
    onChange: (inView) => {
      setIsVisible(!inView);
    },
  });
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [location]);

  return (
    <>
      <div className="container mx-auto max-w-[1400px] px-3 sm:px-12 overflow-x-hidden">
        <Navbar />
      </div>
      <div className="container mx-auto max-w-[1400px] px-3 sm:px-16 overflow-x-hidden">
        <section id="hero" ref={ref}>
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      {isVisible && (
        <Link
          to="hero"
          smooth={true}
          offset={-70}
          duration={500}
          className="fixed bottom-2 right-7 p-3"
        >
          <button className="px-2 py-2 bg-[var(--basic)] rounded-lg text-black cursor-pointer border border-white">
            <IoIosArrowRoundUp size={30} />
          </button>
        </Link>
      )}
      <Footer />
    </>
  );
}
function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/archive" element={<ProjectsArchive />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
export default App;
