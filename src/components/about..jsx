"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Daftar gambar carousel
const images = [
  "/foto_nuel.JPG",
  "/dd.jpg",
  "/adc.png",
  "/dar.jpg",
];

// Data Tools
const toolsData = [
  {
    name: "VS Code",
    category: "Code Editor",
    bgColor: "#007ACC",
    textColor: "#FFFFFF",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.12a.999.999 0 0 0-1.276.07L.336 7.377a1 1 0 0 0 .067 1.472l3.66 3.15-3.66 3.15a1 1 0 0 0-.067 1.472l1.313 1.297a1 1 0 0 0 1.276.07l4.12-3.12 9.46 8.63a1.492 1.492 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.24V3.76a1.5 1.5 0 0 0-.85-1.173zM18 16.68l-5.74-4.68L18 7.32v9.36z" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Programming",
    bgColor: "#3776AB",
    textColor: "#FFD43B",
    icon: <span className="font-black text-base">Py</span>,
  },
  {
    name: "Photoshop",
    category: "Image Editing",
    bgColor: "#31A8FF",
    textColor: "#001E36",
    icon: <span className="font-black text-lg tracking-tighter">Ps</span>,
  },
  {
    name: "Canva",
    category: "Design Tool",
    bgColor: "#00C4CC",
    textColor: "#FFFFFF",
    icon: (
      <span className="font-black text-[11px] leading-none tracking-tight">
        Canva
      </span>
    ),
  },
  {
    name: "MS Office",
    category: "Productivity",
    bgColor: "#D83B01",
    textColor: "#FFFFFF",
    icon: <span className="font-black text-lg">O</span>,
  },
];

// Data Hard Skills
const hardSkillsData = [
  { name: "HTML & CSS", level: 95, color: "#FFED47" },
  { name: "JavaScript", level: 90, color: "#00FF94" },
  { name: "React.js", level: 85, color: "#4D9DE0" },
  { name: "Next.js", level: 80, color: "#FF5C8D" },
  { name: "Tailwind CSS", level: 90, color: "#00FF94" },
  { name: "Python", level: 85, color: "#3776AB" },
];

// Data Soft Skills
const softSkillsData = [
  { name: "Problem Solving", level: 90, color: "#FFED47" },
  { name: "Teamwork & Collaboration", level: 95, color: "#00FF94" },
  { name: "Communication", level: 85, color: "#4D9DE0" },
  { name: "Time Management", level: 80, color: "#FFED47" },
  { name: "Adaptability", level: 90, color: "#00FF94" },
  { name: "Critical Thinking", level: 85, color: "#4D9DE0" },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("hard");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Polygon Path Efek Koyakan Kertas
  const tornTopStyle = {
    clipPath:
      "polygon(0% 12px, 3% 0px, 7% 14px, 12% 2px, 17% 15px, 22% 3px, 28% 16px, 34% 1px, 39% 14px, 45% 2px, 51% 16px, 57% 3px, 63% 15px, 69% 1px, 75% 14px, 81% 3px, 87% 16px, 93% 2px, 98% 13px, 100% 0px, 100% 100%, 0% 100%)",
  };

  const tornBottomStyle = {
    clipPath:
      "polygon(0 0, 100% 0, 100% calc(100% - 12px), 97% 100%, 92% calc(100% - 14px), 86% 100%, 80% calc(100% - 12px), 74% 100%, 68% calc(100% - 15px), 62% 100%, 56% calc(100% - 11px), 50% 100%, 44% calc(100% - 14px), 38% 100%, 32% calc(100% - 12px), 26% 100%, 20% calc(100% - 15px), 14% 100%, 8% calc(100% - 11px), 3% 100%, 0 calc(100% - 13px))",
  };

  return (
    <div className="relative w-full bg-[#111111] py-3">
      {/* SEKSYEN ABOUT */}
      <section
        id="about"
        style={{ ...tornTopStyle, ...tornBottomStyle }}
        className="w-full min-h-screen py-20 px-4 md:px-8 bg-[#f4efe6] font-mono flex items-center justify-center relative overflow-hidden scroll-mt-20 my-2"
      >
        {/* LENCANA DEKORASI ATAS */}
        <div className="absolute top-10 left-6 sm:left-12 bg-[#FF5C8D] border-3 border-[#111111] px-3 py-1.5 font-black text-xs shadow-[4px_4px_0px_#111111] -rotate-6 z-20">
          ★ WHO I AM
        </div>

        {/* KONTEN UTAMA */}
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 pb-12 sm:pb-8">
          {/* Kiri — Carousel Foto */}
          <motion.div
            className="lg:col-span-5 w-full flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full max-w-md h-[380px] sm:h-[450px] lg:h-[480px] bg-[#FFED47] border-4 border-[#111111] rounded-2xl shadow-[8px_8px_0px_#111111] relative overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Foto Saya"
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Kanan — Bio, Skills, Tools & CV */}
          <motion.div
            className="lg:col-span-7 w-full flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#4D9DE0] text-white text-[11px] font-black px-2.5 py-0.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] rounded w-fit mb-2">
              GET TO KNOW ME
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] mb-3 uppercase leading-none">
              Tentang Saya
            </h2>

            <p className="text-xs sm:text-sm text-[#222] font-semibold leading-relaxed mb-5">
              Saya seorang pengembang web yang berfokus menciptakan antarmuka
              modern, responsif, dan kaya fungsi. Dengan memadukan unsur seni
              visual dan inovasi AI, saya terdorong melahirkan produk digital
              yang cerdas dan memberikan pengalaman pengguna yang berkesan.
            </p>

            {/* TAB SKILLS & TOOLS */}
            <div className="flex flex-wrap gap-2.5 mb-4 items-center">
              <button
                onClick={() => setActiveTab("hard")}
                className={`px-3 py-2 text-xs font-extrabold uppercase tracking-wide border-2 border-black rounded transition-all duration-150 cursor-pointer ${
                  activeTab === "hard"
                    ? "bg-[#FF5C8D] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5"
                    : "bg-white text-black border-transparent hover:border-black hover:bg-white hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                }`}
              >
                💻 HARD SKILLS
              </button>

              <button
                onClick={() => setActiveTab("soft")}
                className={`px-3 py-2 text-xs font-extrabold uppercase tracking-wide border-2 border-black rounded transition-all duration-150 cursor-pointer ${
                  activeTab === "soft"
                    ? "bg-[#FF5C8D] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5"
                    : "bg-white text-black border-transparent hover:border-black hover:bg-white hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                }`}
              >
                🤝 SOFT SKILLS
              </button>

              <button
                onClick={() => setActiveTab("tools")}
                className={`px-3 py-2 text-xs font-extrabold uppercase tracking-wide border-2 border-black rounded transition-all duration-150 cursor-pointer ${
                  activeTab === "tools"
                    ? "bg-[#FF5C8D] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5"
                    : "bg-white text-black border-transparent hover:border-black hover:bg-white hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                }`}
              >
                🛠️ TOOLS USED
              </button>

              {/* TOMBOL CV */}
              <a
                href="/cv_nuel2.pdf"
                download="cv_nuel2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-black uppercase tracking-wider border-3 border-[#111111] rounded-lg transition-all duration-150 cursor-pointer bg-[#00FF94] text-[#111111] shadow-[4px_4px_0px_0px_#111111] hover:-translate-y-1 hover:bg-[#00e685] hover:shadow-[6px_6px_0px_0px_#111111] active:translate-y-0 active:shadow-[2px_2px_0px_0px_#111111] inline-flex items-center gap-1.5 ml-auto sm:ml-0"
              >
                📄 DOWNLOAD CV 📥
              </a>
            </div>

            {/* KONTEN TAB */}
            <div className="bg-white border-3 border-[#111111] rounded-xl p-4 shadow-[5px_5px_0px_#111111]">
              {activeTab === "tools" ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {toolsData.map((tool) => (
                    <motion.div
                      key={tool.name}
                      whileHover={{
                        y: -2,
                        boxShadow: "4px 4px 0px 0px #111111",
                      }}
                      whileTap={{ y: 0, boxShadow: "2px 2px 0px 0px #111111" }}
                      className="border-2 border-black rounded-lg p-2 flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white cursor-pointer select-none"
                    >
                      <div
                        className="w-8 h-8 border-2 border-black rounded-md flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                        style={{
                          backgroundColor: tool.bgColor,
                          color: tool.textColor,
                        }}
                      >
                        {tool.icon}
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="font-black text-[11px] text-black uppercase truncate">
                          {tool.name}
                        </h4>
                        <span className="text-[9px] font-bold text-gray-500 block truncate">
                          {tool.category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-2.5">
                  {(activeTab === "hard"
                    ? hardSkillsData
                    : softSkillsData
                  ).map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2, boxShadow: "3px 3px 0px #111111" }}
                      whileTap={{ y: 0, boxShadow: "1px 1px 0px #111111" }}
                      className="p-2 rounded-lg border-2 border-[#111111] bg-[#FFFBF0] shadow-[2px_2px_0px_#111111] cursor-pointer select-none"
                    >
                      <div className="flex justify-between text-[11px] font-black text-[#111111] mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>

                      <div className="w-full h-2.5 bg-gray-200 border-2 border-[#111111] rounded-full overflow-hidden">
                        <motion.div
                          key={activeTab + skill.name}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className="h-full"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}