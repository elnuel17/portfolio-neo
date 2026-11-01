"use client";

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Flag untuk mencegah konflik observer saat tombol navigasi diklik
  const isManualScrolling = useRef(false);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "social-media"];

    const observerCallback = (entries) => {
      // Abaikan update observer jika pengguna sedang melakukan klik navigasi manual
      if (isManualScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isManualScrolling.current) return;

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection("social-media");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    
    // Aktifkan flag manual scroll
    isManualScrolling.current = true;

    const resetManualScrollFlag = () => {
      setTimeout(() => {
        isManualScrolling.current = false;
      }, 800); // Waktu tunggu hingga animasi smooth scroll selesai
    };

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      resetManualScrollFlag();
      return;
    }

    if (sectionId === "social-media") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      resetManualScrollFlag();
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // Berikan offset posisi scroll agar tidak tertutup Navbar
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    resetManualScrollFlag();
  };

  const getMenuClass = (sectionName) => {
    const isActive = activeSection === sectionName;
    const paddingClass = isScrolled
      ? "px-3 py-1.5 text-xs md:px-4 md:py-1.5 md:text-sm"
      : "px-3 py-1.5 text-xs md:px-5 md:py-2 md:text-base";

    if (sectionName === "social-media") {
      return `${paddingClass} rounded transition-all duration-150 border-2 whitespace-nowrap ${
        isActive
          ? "border-black bg-white shadow-[3px_3px_0px_0px_#FF5C8D] -translate-y-0.5 text-black font-extrabold"
          : "border-transparent text-black hover:border-black hover:bg-white hover:shadow-[3px_3px_0px_0px_#FF5C8D] hover:-translate-y-0.5"
      }`;
    }

    return `${paddingClass} rounded transition-all duration-150 border-2 whitespace-nowrap ${
      isActive
        ? "border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5 text-black font-extrabold"
        : "border-transparent text-black hover:border-black hover:bg-white hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
    }`;
  };

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto flex justify-center items-center font-mono transition-all duration-300 ${
          isScrolled
            ? "mt-3 w-[92%] max-w-2xl px-4 py-2.5 bg-[#fef08a]/95 backdrop-blur-md border-3 border-black rounded-2xl shadow-[5px_5px_0px_0px_#111111]"
            : "w-full px-6 py-4 bg-[#fef08a]/85 backdrop-blur-md border-b-4 border-black rounded-none shadow-none"
        }`}
      >
        <div className="flex items-center gap-1.5 sm:gap-4 md:gap-6 font-extrabold uppercase tracking-wide py-1.5 max-w-full flex-wrap justify-center">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className={getMenuClass("home")}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className={getMenuClass("about")}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className={getMenuClass("projects")}
          >
            Projects
          </a>
          <a
            href="#social-media"
            onClick={(e) => scrollToSection(e, "social-media")}
            className={getMenuClass("social-media")}
          >
            Social Media
          </a>
        </div>
      </nav>
    </div>
  );
}