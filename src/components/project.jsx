"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectDetails = {
  Experience: {
    category: "REKAM JEJAK / WORK EXPERIENCE",
    title: "Work & Project Experience",
    badgeBg: "#c85a32",
    badgeColor: "#FFFFFF",
    type: "cards_with_image",
    items: [
      {
        src: "/experience/poto.jpeg",
        title: "Teknisi Poles Mobil",
        subtitle: "2022 - 2022",
        desc: "Bekerja di Auto Glaze Makassar, Mall Ratu Indah, dengan penempatan di bengkel resmi Toyota Jalan Urip Sumoharjo. Bertanggung jawab melakukan pencucian kendaraan, membersihkan interior menggunakan vacuum cleaner, serta memindahkan kendaraan yang telah selesai diservis untuk diserahkan kembali kepada teknisi. Memperoleh pengalaman dalam perawatan kendaraan serta memahami alur kerja dan prosedur servis di bengkel Toyota.",
        tech: "Detailing · Car Care",
      },
      {
        src: "/experience/skrip.png",
        title: "Implementasi K-means clustering dan elbow methode untuk pemetaan zona rawan kejahhatan di kota makassar",
        subtitle: "2026 - 2026",
        desc: "Melakukan penelitian menggunakan algoritma K-Means Clustering dan Metode Elbow untuk mengelompokkan serta memetakan tingkat kerawanan kejahatan berdasarkan data kriminalitas di Kota Makassar.",
        tech: "Python · HTML/CSS",
      },
    ],
  },
  Certification: {
    category: "LISENSI & SERTIFIKASI",
    title: "Certifications & Badges",
    badgeBg: "#00FF94",
    badgeColor: "#111111",
    type: "cards_with_image",
    items: [
      {
        src: "/certificates/ser.png",
        fileUrl: "/certificates/Sertifikat_IMANUEL PUTRA KRISTIANG_Fundamental of Associate Network Administrator - Nasional.pdf",
        title: "Associate Network Administrator",
        subtitle: "Kominfo / VSGA",
        desc: "Sertifikasi penguasaan konfigurasi jaringan, VLAN, subnetting, dan routing.",
        tech: "Verified Credential",
      },
      {
        src: "/certificates/cer.png",
        fileUrl: "/certificates/Sertifikat_IMANUEL PUTRA KRISTIANG_Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor.pdf",
        title: "Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor",
        subtitle: "Komdigi/ VSGA",
        desc: "Mempelajari dasar Data Science, pengolahan data, dan penerapannya untuk menghasilkan informasi yang bermanfaat.",
        tech: "Verified Credential",
      },
      {
        src: "/certificates/xer.png",
        fileUrl: "/certificates/Sertifikat_undefined_Menerapkan rekayasa prompt dengan Azure OpenAI Service (1).pdf",
        title: "Menerapkan rekayasa prompt dengan Azure OpenAI Service",
        subtitle: "Komdigi / VSGA",
        desc: "Mempelajari teknik penyusunan prompt yang efektif untuk menghasilkan respons AI yang lebih jelas, relevan, dan sesuai kebutuhan.",
        tech: "Verified Credential",
      },
      {
        src: "/certificates/der.png",
        fileUrl: "/certificates/Sertifikat_undefined_Sistem Manajemen Keamanan Informasi_ Pengenalan Bug Bounty dan Manajemen Kerentanan Sistem.pdf",
        title: "Sistem Manajemen Keamanan Informasi_ Pengenalan Bug Bounty dan Manajemen Kerentanan Sistem.",
        subtitle: "Komdigi / VSGA",
        desc: "Mempelajari konsep keamanan informasi, identifikasi kerentanan sistem, serta mekanisme Bug Bounty untuk menjaga keamanan data dan sistem dari ancaman siber.",
        tech: "Verified Credential",
      },
    ],
  },
  Gallery: {
    category: "GALERI FOTO & AKTIVITAS",
    title: "Photo Showcase",
    badgeBg: "#FF5C8D",
    badgeColor: "#FFFFFF",
    type: "gallery_grid",
    images: [
      { src: "/gallery/asisi.jpg", title: "My Style", tag: "Event" },
      { src: "/gallery/z.jpg", title: "Mine", tag: "Daily" },
      { src: "/gallery/utr.jpg", title: "Graduation", tag: "Proud" },
      { src: "/gallery/KKN.jpg", title: "KKN", tag: "Achievement" },
    ],
  },
  Design: {
    category: "PORTFOLIO DESAIN UI/UX",
    title: "Design Showcase & Assets",
    badgeBg: "#4D9DE0",
    badgeColor: "#FFFFFF",
    type: "cards_with_image",
    items: [
      {
        src: "/design/cos_baju_6-removebg.png",
        title: "Baju Organisasi",
        subtitle: "Projects Design",
        desc: "Kaos organisasi elegan dengan desain minimalis di depan dan grafis teknologi modern di bagian belakang.",
        tech: "Figma · System Design",
      },
      {
        src: "/design/logo.jpeg",
        title: "Logo Donasi Online",
        subtitle: "Projects Design",
        desc: "Konsep logo berbentuk simbol tak terhingga (infinity) yang melambangkan kebaikan dan kepedulian tanpa batass.",
        tech: "Prototyping · UX Research",
      },
      {
        src: "/design/adha.png",
        title: "Ucapan Selamat Hari Raya",
        subtitle: "Projects Design",
        desc:"Konten ucapan hari raya bertema Iduladha yang informatif, ringan, dan cocok untuk publikasi di media sosial.",
        tech: "Prototyping · UX Research",
      },
      {
        src: "/design/asss2.png",
        title: "Ucapan Selamat Hari Raya",
        subtitle: "Projects Design",
        desc: "Poster digital ucapan hari raya Kristiani yang elegan dan siap diunggah untuk media sosial.",
        tech: "Prototyping · UX Research",
      },
    ],
  },
};

const projects = [
  {
    id: "#01",
    keyName: "Experience",
    category: "FEATURED WORK",
    title: "Experience",
    desc: "Rekam jejak pengalaman kerja, freelance, dan proyek web yang pernah digarap.",
    tech: ["Academic", "Industry Work"],
    color: "#c85a32",
    textColor: "#FFFFFF",
    badgeBg: "#FFED47",
    badgeColor: "#111111",
    rotate: "-rotate-1",
  },
  {
    id: "#02",
    keyName: "Certification",
    category: "TRAINING & CERTIFICATION",
    title: "Certificates",
    desc: "Daftar sertifikasi profesional dan pencapaian keahlian teknis.",
    tech: ["Kominfo", "Microsoft"],
    color: "#00FF94",
    textColor: "#111111",
    badgeBg: "#FF5C8D",
    badgeColor: "#FFFFFF",
    rotate: "rotate-2",
  },
  {
    id: "#03",
    keyName: "Gallery",
    category: "SNAPSHOTS",
    title: "Gallery",
    desc: "Kumpulan momen foto seputar kegiatan, workspace, dan aktivitas seru.",
    tech: ["Photo", "Activity"],
    color: "#FF5C8D",
    textColor: "#FFFFFF",
    badgeBg: "#00FF94",
    badgeColor: "#111111",
    rotate: "-rotate-2",
  },
  {
    id: "#04",
    keyName: "Design",
    category: "CREATION",
    title: "Design",
    desc: "Menampilkan berbagai karya kreatif dalam bidang desain grafis dan visual.",
    tech: ["Phtoshop"],
    color: "#4D9DE0",
    textColor: "#FFFFFF",
    badgeBg: "#FFED47",
    badgeColor: "#111111",
    rotate: "rotate-1",
  },
];

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const selectedData = activeModal ? projectDetails[activeModal] : null;

  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="min-h-screen py-24 px-8 bg-[#FFED47] border-b-4 border-black relative overflow-hidden font-mono flex items-center justify-center scroll-mt-20"
    >
      {/* ELEMEN HIASAN BACKGROUND NEUBRUTALISM */}
      <motion.div 
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: -3 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        className="absolute bottom-10 left-10 bg-[#00FF94] text-black border-3 border-black px-4 py-2 font-black text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 select-none"
      >
        ⚡ EXPLORE MY WORKS
      </motion.div>

      <div className="absolute top-20 left-16 text-4xl font-black select-none opacity-100" style={{ color: "#FF5C8D", transform: "rotate(-15deg)" }}>
        ✦ ✦
      </div>

      {/* KONTEN UTAMA */}
      <div className="max-w-5xl w-full mx-auto relative z-20">

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-black pb-6"
        >
          <div>
            <div className="bg-black text-[#FFED47] text-[11px] font-black px-3 py-1 border-2 border-black rounded w-fit mb-3 shadow-[3px_3px_0px_0px_#FF5C8D]">
              MY CREATIONS
            </div>

            <h2 className="text-6xl md:text-7xl font-black text-black uppercase tracking-tight leading-none">
              Projects<span className="text-[#FF5C8D]">.</span>
            </h2>
          </div>
        </motion.div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              onClick={() => setActiveModal(project.keyName)}
              className={`border-4 border-black rounded-2xl p-7 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer flex flex-col justify-between relative ${project.rotate}`}
              style={{ backgroundColor: project.color }}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span 
                    className="border-2 border-black px-3 py-1 text-xs font-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    style={{ backgroundColor: project.badgeBg, color: project.badgeColor }}
                  >
                    {project.category}
                  </span>
                  <span className="text-2xl font-black text-black bg-white px-2 py-0.5 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {project.id}
                  </span>
                </div>

                <h3 
                  className="text-3xl font-black uppercase mb-3 tracking-wide"
                  style={{ color: project.textColor }}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="text-sm font-bold mb-6 leading-relaxed opacity-90"
                  style={{ color: project.textColor }}
                >
                  {project.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="bg-white text-black border-2 border-black px-2.5 py-0.5 text-xs font-extrabold rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center bg-black text-white p-3 rounded-xl border-2 border-black group hover:bg-white hover:text-black transition-colors duration-200">
                  <span className="text-xs font-black tracking-wider uppercase pl-2">
                    Open {project.title} ➔
                  </span>
                  <span className="bg-[#FFED47] text-black w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center font-black text-sm group-hover:translate-x-1 transition-transform">
                    ➔
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MODAL POP-UP UTAMA */}
      <AnimatePresence>
        {activeModal && selectedData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#f4efe6] border-4 border-black rounded-2xl p-6 md:p-8 max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-[12px_12px_0px_0px_#FF5C8D] relative"
            >
              {/* TOMBOL CLOSE */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 bg-[#FF5C8D] text-white border-2 border-black font-black w-10 h-10 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 transition-all flex items-center justify-center text-lg cursor-pointer z-10"
              >
                ✕
              </button>

              {/* HEADER POPUP */}
              <div className="mb-6">
                <span 
                  className="border-2 border-black text-xs font-black px-3 py-1 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase"
                  style={{ backgroundColor: selectedData.badgeBg, color: selectedData.badgeColor }}
                >
                  {selectedData.category}
                </span>
                <h3 className="text-4xl font-black text-black uppercase mt-2">
                  {selectedData.title}<span className="text-[#FF5C8D]">.</span>
                </h3>
              </div>

              {/* TAMPILAN 1: GALERI GRID */}
              {selectedData.type === "gallery_grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {selectedData.images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className="bg-white border-3 border-black rounded-xl p-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-pointer group"
                    >
                      <div className="w-full h-48 bg-gray-200 rounded-lg border-2 border-black overflow-hidden relative">
                        <img
                          src={img.src}
                          alt={img.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white text-black border-2 border-black font-black text-xs px-3 py-1 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            🔍 CLICK TO ZOOM
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between items-center">
                        <h4 className="font-black text-black text-sm">{img.title}</h4>
                        <span className="bg-[#FFED47] text-black border border-black text-[10px] font-extrabold px-2 py-0.5 rounded">
                          {img.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* TAMPILAN 2: EXPERIENCE, CERTIFICATION & DESIGN */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedData.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white border-3 border-black rounded-xl p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
                    >
                      <div>
                        {/* FITUR CLICK TO ZOOM GAMBAR */}
                        <div 
                          onClick={() => setSelectedImage({ src: item.src, title: item.title, tag: item.subtitle })}
                          className="w-full h-44 bg-gray-200 rounded-lg border-2 border-black overflow-hidden mb-4 relative cursor-pointer group"
                        >
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white text-black border-2 border-black font-black text-xs px-3 py-1 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                              🔍 CLICK TO ZOOM
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-black text-black uppercase leading-tight">{item.title}</h4>
                          <span className="bg-[#FFED47] text-black border border-black text-[10px] font-extrabold px-2 py-0.5 rounded ml-2 whitespace-nowrap">
                            {item.subtitle}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-gray-700 mb-4 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      {item.fileUrl && (
                        <a
                          href={item.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#00FF94] text-black border-2 border-black text-xs font-black px-3 py-1 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 transition-all text-center block"
                        >
                          📄 View Credential
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL POP-UP FULLSCREEN PHOTO VIEWER */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[60] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.7, rotate: 2 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-4 border-black rounded-2xl p-4 md:p-6 max-w-4xl w-full shadow-[16px_16px_0px_0px_#00FF94] relative flex flex-col items-center"
            >
              {/* TOMBOL CLOSE FOTO */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-[#FF5C8D] text-white border-3 border-black font-black w-12 h-12 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 transition-all flex items-center justify-center text-xl cursor-pointer z-20"
              >
                ✕
              </button>

              {/* CONTAINER FRAME GAMBAR FULL */}
              <div className="w-full max-h-[70vh] bg-black border-3 border-black rounded-xl overflow-hidden flex items-center justify-center relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              </div>

              {/* FOOTER INFORMASI FOTO */}
              <div className="w-full mt-4 flex justify-between items-center border-t-3 border-black pt-3">
                <h3 className="text-xl md:text-2xl font-black text-black uppercase">
                  {selectedImage.title}
                </h3>
                <span className="bg-[#FFED47] text-black border-2 border-black font-black text-xs px-3 py-1 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {selectedImage.tag}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
}