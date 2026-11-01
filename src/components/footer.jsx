"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Footer() {
    const [hoveredSocial, setHoveredSocial] = useState(null);

    const socialLinks = [
        {
            name: "GitHub",
            label: "𝕏",
            href: "https://github.com/username_kamu",
            bg: "#111111",
            color: "#FFFFFF",
            tooltip: "GitHub / X",
            rotateHover: 8,
            floatDuration: 2.5,
        },
        {
            name: "Instagram",
            label: "📸",
            href: "https://instagram.com/nu3l.m",
            bg: "#FF5C8D",
            color: "#FFFFFF",
            tooltip: "Instagram (@nu3l.m)",
            rotateHover: 8,
            floatDuration: 2.7,
        },
        {
            name: "WhatsApp",
            label: "💬",
            href: "https://wa.me/6281234567890", // Ganti dengan nomor WA kamu
            bg: "#00FF94",
            color: "#111111",
            tooltip: "WhatsApp Chat",
            rotateHover: -8,
            floatDuration: 3.3,
        },
    ];

    return (
        <footer 
            id="social-media" 
            style={{
                backgroundColor: "#FFED47",
                borderTop: "4px solid #111111",
                padding: "48px 32px",
                fontFamily: "monospace",
                position: "relative",
            }}
        >
            <div style={{
                maxWidth: "950px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "24px",
            }}>

                {/* LOGO THANK YOU STATIS (NEUBRUTALISM BADGE) */}
                <div style={{
                    backgroundColor: "#111111",
                    color: "#FFED47",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    border: "3px solid #111111",
                    boxShadow: "4px 4px 0px #FF5C8D",
                    fontSize: "20px",
                    fontWeight: "900",
                    letterSpacing: "0.5px",
                    userSelect: "none",
                }}>
                    {"<"}THANK YOU{"/>"}
                </div>

                {/* HAK CIPTA */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: "13px",
                        fontWeight: "800",
                        color: "#111111",
                        margin: 0,
                    }}
                >
                    © 2026 Nu3l.m rights reserved.
                </motion.p> FD

                {/* SOCIAL LINKS */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ display: "flex", gap: "14px", position: "relative" }}
                >
                    {socialLinks.map((social) => (
                        <div key={social.name} style={{ position: "relative" }}>
                            {/* POP-UP TOOLTIP */}
                            <AnimatePresence>
                                {hoveredSocial === social.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.85 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.85 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                        style={{
                                            position: "absolute",
                                            bottom: "100%",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            marginBottom: "10px",
                                            backgroundColor: "#111111",
                                            color: "#FFED47",
                                            border: "2px solid #111111",
                                            borderRadius: "6px",
                                            padding: "3px 8px",
                                            fontSize: "11px",
                                            fontWeight: "900",
                                            whiteSpace: "nowrap",
                                            boxShadow: "2px 2px 0px #FF5C8D",
                                            pointerEvents: "none",
                                            zIndex: 20,
                                        }}
                                    >
                                        {social.tooltip}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* TOMBOL LINK (FLOATING IDLE + HOVER ROTATE & SCALE) */}
                            <motion.a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredSocial(social.name)}
                                onMouseLeave={() => setHoveredSocial(null)}
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    y: {
                                        duration: social.floatDuration,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut",
                                    },
                                }}
                                whileHover={{ 
                                    scale: 1.15,
                                    rotate: social.rotateHover,
                                    boxShadow: "6px 6px 0px #111111" 
                                }}
                                whileTap={{ 
                                    scale: 0.92, 
                                    rotate: 0,
                                    boxShadow: "2px 2px 0px #111111" 
                                }}
                                style={{
                                    backgroundColor: social.bg,
                                    color: social.color,
                                    fontWeight: "900",
                                    fontSize: "18px",
                                    width: "46px",
                                    height: "46px",
                                    border: "3px solid #111111",
                                    borderRadius: "10px",
                                    boxShadow: "3px 3px 0px #111111",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                }}
                            >
                                {social.label}
                            </motion.a>
                        </div>
                    ))}
                </motion.div>

            </div>
        </footer>
    );
}