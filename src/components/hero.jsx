import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#f4efe6] w-full min-h-[calc(100vh-80px)] p-4 sm:p-6 md:p-10 font-mono flex items-center justify-center relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch relative z-10">
        
        {/* KOLOM KIRI: SYSTEM USER PROFILE CARD */}
        <div className="md:col-span-7 flex flex-col justify-between order-2 md:order-1">
          <div className="bg-[#c85a32] border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white overflow-hidden flex flex-col justify-between h-full">
            
            {/* WINDOW TOP BAR */}
            <div className="bg-black text-white px-4 py-2 flex items-center justify-between border-b-4 border-black">
              <span className="text-xs font-black tracking-widest uppercase">
                system_user_profile.exe
              </span>
              <div className="flex gap-2">
                <span className="w-3 h-3 bg-yellow-400 rounded-full border border-black inline-block" />
                <span className="w-3 h-3 bg-green-400 rounded-full border border-black inline-block" />
                <span className="w-3 h-3 bg-red-400 rounded-full border border-black inline-block" />
              </div>
            </div>

            {/* KONTEN PROFIL */}
            <div className="p-5 md:p-7 flex-1 flex flex-col justify-between gap-4">
              <div>
                {/* Top Badge & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="inline-block bg-yellow-300 text-black border-2 border-black font-black text-xs px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase">
                    ✦ Available for projects
                  </div>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider mb-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  HELLO, I'M
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#fce09b] mb-3 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                  Nuel
                </h2>
                
                {/* Sub-badge Role */}
                <div className="flex flex-wrap items-center gap-3 text-base md:text-lg font-black mb-4">
                  <span>I AM A</span>
                  <span className="bg-black text-[#fce09b] px-3 py-1 border-2 border-white rounded shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] uppercase tracking-wide">
                    Freshgraduate
                  </span>
                </div>

                {/* Deskripsi Singkat */}
                <p className="bg-black/20 border-2 border-dashed border-black/40 p-3 rounded-lg text-xs md:text-sm font-semibold leading-relaxed text-yellow-100">
                  Menggabungkan keajaiban AI, machine learning, dan desain web modern yang rapi sampai ke piksel terakhir.
                </p>
              </div>

              {/* ELEMEN DEKORATIF STICKER */}
              <div className="pt-3 border-t-4 border-black flex flex-wrap items-center justify-between gap-2 text-xs font-black">
                <div className="flex items-center gap-2">
                  <span className="bg-[#a7f3d0] text-black border-2 border-black px-2 py-0.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    📍 MAKASSAR ID
                  </span>
                  <span className="bg-[#bae6fd] text-black border-2 border-black px-2 py-0.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    ⚡ FREEALANCE
                  </span>
                </div>
                <div className="bg-[#fce09b] text-black border-2 border-black px-2.5 py-0.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  &gt;_ STATUS: ONLINE
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* KOLOM KANAN: PHOTO CARD & CONNECT BUTTON */}
        <div className="md:col-span-5 flex flex-col justify-between gap-5 order-1 md:order-2">
          
          {/* WINDOW PHOTO CARD */}
          <div className="bg-white border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col h-full min-h-[350px]">
            
            {/* WINDOW TOP BAR */}
            <div className="bg-black text-white px-4 py-2 flex items-center justify-between border-b-4 border-black">
              <span className="text-xs font-black tracking-widest uppercase">
                photo_view.png
              </span>
              <span className="text-xs font-black bg-red-500 text-white px-2 py-0.5 border border-white">
                IMG
              </span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between gap-3">
              {/* Image Container */}
              <div className="relative w-full flex-1 min-h-[200px] sm:min-h-[220px] rounded-lg overflow-hidden border-3 border-black">
                <Image
                  src="/nuel_fot.JPG"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* 3 KOTAK KEAHLIAN (DENGAN ANIMASI FLOATING SMOOTH & STAGGERED) */}
              <div className="grid grid-cols-3 gap-2">
                
                {/* Kotak 01: AI */}
                <div className="group bg-[#e0f2fe] border-2 border-black p-1.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between animate-[pulse_3s_ease-in-out_infinite] hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-black text-[9px] bg-blue-400 text-black border border-black px-1 rounded">
                      01
                    </span>
                    <span className="text-xs">💡</span>
                  </div>
                  <h3 className="font-black text-[10px] text-black leading-tight truncate">
                    AI
                  </h3>
                </div>

                {/* Kotak 02: Machine Learning */}
                <div className="group bg-[#fef9c3] border-2 border-black p-1.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between animate-[pulse_3s_ease-in-out_infinite_500ms] hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-black text-[9px] bg-yellow-400 text-black border border-black px-1 rounded">
                      02
                    </span>
                    <span className="text-xs">🤖</span>
                  </div>
                  <h3 className="font-black text-[10px] text-black leading-tight truncate">
                    Machine Learning
                  </h3>
                </div>

                {/* Kotak 03: Data Scientist */}
                <div className="group bg-[#ffedd5] border-2 border-black p-1.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between animate-[pulse_3s_ease-in-out_infinite_1000ms] hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-black text-[9px] bg-orange-400 text-black border border-black px-1 rounded">
                      03
                    </span>
                    <span className="text-xs">🚀</span>
                  </div>
                  <h3 className="font-black text-[10px] text-black leading-tight truncate">
                    Data Scientist
                  </h3>
                </div>

              </div>
            </div>
          </div>

          {/* TOMBOL CONNECT */}
          <a
            href="#social-media"
            className="w-full text-center bg-[#c85a32] text-white font-black text-base md:text-lg py-3.5 rounded-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all block uppercase tracking-wider"
          >
            LET'S CONNECT &rarr;
          </a>

        </div>

      </div>
    </section>
  );
}