"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  // KODE DITARUH DI SINI: Integrasi Formspree via API fetch
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    try {
      // GANTI KODE_ENDPOINT_KAMU DENGAN ENDPOINT FORMSPREE (misal: https://formspree.io/f/xbjnkyzw)
      const response = await fetch("https://formspree.io/f/xvkkkzoz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setIsSent(false), 5000);
      } else {
        alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      alert("Gagal terhubung ke server. Periksa koneksi internet kamu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      style={{
        minHeight: "100vh",
        padding: "90px 32px",
        backgroundColor: "#111111",
        borderBottom: "4px solid #111111",
        fontFamily: "monospace",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        top: "80px",
        left: "60px",
        fontSize: "36px",
        fontWeight: "900",
        color: "#FFED47",
        userSelect: "none",
        transform: "rotate(-15deg)",
        zIndex: 1
      }}>
        ✦ ✦
      </div>

      {/* KONTEN UTAMA */}
      <div style={{ maxWidth: "650px", width: "100%", margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "36px" }}
        >
          <div style={{
            backgroundColor: "#FF5C8D",
            color: "#FFFFFF",
            fontSize: "11px",
            fontWeight: "900",
            padding: "3px 10px",
            border: "2px solid #FFED47",
            borderRadius: "4px",
            width: "fit-content",
            marginBottom: "10px",
            boxShadow: "3px 3px 0px #00FF94",
          }}>
            LET'S WORK TOGETHER
          </div>

          <h2 style={{
            fontSize: "56px",
            fontWeight: "900",
            color: "#FFED47",
            textTransform: "uppercase",
            lineHeight: 1,
            marginBottom: "12px",
          }}>
            Contact<span style={{ color: "#FF5C8D" }}>.</span>
          </h2>

          <p style={{
            color: "#E5E7EB",
            fontSize: "15px",
            fontWeight: "700",
          }}>
            Ada project menarik atau tawaran kerja sama? Mari ngobrol! 🚀
          </p>
        </motion.div>

        {/* FORM CARD */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "#FFFBF0",
            border: "4px solid #111111",
            borderRadius: "16px",
            padding: "36px",
            boxShadow: "10px 10px 0px #FF5C8D",
            position: "relative",
          }}
        >
          {/* NOTIFIKASI SUKSES */}
          {isSent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                backgroundColor: "#00FF94",
                color: "#111111",
                border: "3px solid #111111",
                borderRadius: "8px",
                padding: "12px 16px",
                fontWeight: "900",
                fontSize: "13px",
                marginBottom: "20px",
                boxShadow: "3px 3px 0px #111111"
              }}
            >
              ✅ Pesan berhasil dikirim! Saya akan segera menghubungi kamu kembali.
            </motion.div>
          )}

          {/* INPUT NAMA WITH POP-UP */}
          <div 
            style={{ marginBottom: "20px", position: "relative" }}
            onMouseEnter={() => setActiveInput("name")}
            onMouseLeave={() => setActiveInput(null)}
          >
            <AnimatePresence>
              {activeInput === "name" && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.95 }}
                  style={{
                    position: "absolute",
                    top: "-28px",
                    right: "0",
                    backgroundColor: "#111111",
                    color: "#FFED47",
                    border: "2px solid #111111",
                    borderRadius: "6px",
                    padding: "2px 8px",
                    fontSize: "11px",
                    fontWeight: "900",
                    boxShadow: "2px 2px 0px #FF5C8D",
                    pointerEvents: "none",
                    zIndex: 10
                  }}
                >
                  👤 Isikan nama lengkap kamu!
                </motion.div>
              )}
            </AnimatePresence>

            <label style={{
              display: "block",
              fontWeight: "900",
              fontSize: "13px",
              color: "#111111",
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}>
              Nama <span style={{ color: "#FF5C8D" }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setActiveInput("name")}
              onBlur={() => setActiveInput(null)}
              placeholder="Masukkan nama kamu"
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "3px solid #111111",
                borderRadius: "8px",
                backgroundColor: "#FFFFFF",
                fontSize: "14px",
                fontWeight: "700",
                color: "#111111",
                outline: "none",
                boxShadow: activeInput === "name" ? "6px 6px 0px #FFED47" : "4px 4px 0px #111111",
                transform: activeInput === "name" ? "translateY(-2px)" : "none",
                transition: "all 0.15s ease",
              }}
            />
          </div>

          {/* INPUT EMAIL WITH POP-UP */}
          <div 
            style={{ marginBottom: "20px", position: "relative" }}
            onMouseEnter={() => setActiveInput("email")}
            onMouseLeave={() => setActiveInput(null)}
          >
            <AnimatePresence>
              {activeInput === "email" && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.95 }}
                  style={{
                    position: "absolute",
                    top: "-28px",
                    right: "0",
                    backgroundColor: "#111111",
                    color: "#00FF94",
                    border: "2px solid #111111",
                    borderRadius: "6px",
                    padding: "2px 8px",
                    fontSize: "11px",
                    fontWeight: "900",
                    boxShadow: "2px 2px 0px #FF5C8D",
                    pointerEvents: "none",
                    zIndex: 10
                  }}
                >
                  ✉️ Pastikan alamat email aktif!
                </motion.div>
              )}
            </AnimatePresence>

            <label style={{
              display: "block",
              fontWeight: "900",
              fontSize: "13px",
              color: "#111111",
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}>
              Email <span style={{ color: "#FF5C8D" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setActiveInput("email")}
              onBlur={() => setActiveInput(null)}
              placeholder="email@kamu.com"
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "3px solid #111111",
                borderRadius: "8px",
                backgroundColor: "#FFFFFF",
                fontSize: "14px",
                fontWeight: "700",
                color: "#111111",
                outline: "none",
                boxShadow: activeInput === "email" ? "6px 6px 0px #00FF94" : "4px 4px 0px #111111",
                transform: activeInput === "email" ? "translateY(-2px)" : "none",
                transition: "all 0.15s ease",
              }}
            />
          </div>

          {/* INPUT PESAN WITH POP-UP */}
          <div 
            style={{ marginBottom: "28px", position: "relative" }}
            onMouseEnter={() => setActiveInput("message")}
            onMouseLeave={() => setActiveInput(null)}
          >
            <AnimatePresence>
              {activeInput === "message" && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.95 }}
                  style={{
                    position: "absolute",
                    top: "-28px",
                    right: "0",
                    backgroundColor: "#111111",
                    color: "#FF5C8D",
                    border: "2px solid #111111",
                    borderRadius: "6px",
                    padding: "2px 8px",
                    fontSize: "11px",
                    fontWeight: "900",
                    boxShadow: "2px 2px 0px #FFED47",
                    pointerEvents: "none",
                    zIndex: 10
                  }}
                >
                  💬 Tuliskan ide atau detail projectmu!
                </motion.div>
              )}
            </AnimatePresence>

            <label style={{
              display: "block",
              fontWeight: "900",
              fontSize: "13px",
              color: "#111111",
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}>
              Pesan <span style={{ color: "#FF5C8D" }}>*</span>
            </label>
            <textarea
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setActiveInput("message")}
              onBlur={() => setActiveInput(null)}
              placeholder="Ceritakan detail project atau ide kamu di sini..."
              rows={4}
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "3px solid #111111",
                borderRadius: "8px",
                backgroundColor: "#FFFFFF",
                fontSize: "14px",
                fontWeight: "700",
                color: "#111111",
                outline: "none",
                resize: "vertical",
                boxShadow: activeInput === "message" ? "6px 6px 0px #FF5C8D" : "4px 4px 0px #111111",
                transform: activeInput === "message" ? "translateY(-2px)" : "none",
                transition: "all 0.15s ease",
              }}
            />
          </div>

          {/* TOMBOL SUBMIT */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ y: -3, boxShadow: "6px 6px 0px #111111" }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: "100%",
              backgroundColor: "#FFED47",
              color: "#111111",
              fontWeight: "900",
              fontSize: "15px",
              padding: "16px",
              border: "3px solid #111111",
              borderRadius: "10px",
              boxShadow: "4px 4px 0px #111111",
              cursor: isSubmitting ? "wait" : "pointer",
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "all 0.15s ease",
            }}
          >
            {isSubmitting ? "Mengirim Pesan..." : "KIRIM PESAN 📨"}
          </motion.button>

        </motion.form>
      </div>
    </section>
  );
}