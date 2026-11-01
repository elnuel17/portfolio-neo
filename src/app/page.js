import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/project";
import Contact from "@/components/contact";
import About from "@/components/about.";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* 1. SECTION HOME */}
      <div id="home">
        <Hero />
      </div>

      {/* 2. SECTION ABOUT */}
      <div id="about" className="scroll-mt-20">
        <About />
      </div>

      {/* 3. SECTION PROJECTS */}
      <div id="projects" className="scroll-mt-20">
        <Projects />
      </div>

      {/* SECTION CONTACT */}
      <Contact />

      {/* 4. SECTION SOCIAL MEDIA (Mengarahkan langsung ke bagian Footer) */}
      <div id="social-media" className="scroll-mt-20">
        <Footer />
      </div>
    </main>
  );
}