import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Gallery", id: "gallery" },
  { label: "Skills", id: "skills" },
  { label: "Certificates", id: "certificates" },
  { label: "Blog", id: "blog" },
  { label: "Resume", id: "resume" },
  { label: "About Me", id: "about" },
  { label: "Contact", id: "contact" },
  { label: "Semester", id: "semester" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [active, setActive] = useState("home");

  const navRef = useRef(null);
  const linksRef = useRef(null);

  // ✅ Scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  // ✅ Detect active section (scroll spy 🔥)
  useEffect(() => {
    const handleScroll = () => {
      links.forEach((l) => {
        const section = document.getElementById(l.id);
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(l.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // overflow check
  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    setShowButton(linksRef.current.scrollWidth > navRef.current.offsetWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{ fontWeight: "bold", fontSize: "1.4rem", color: "var(--accent)" }}
          >
            SM
          </motion.div>

          <div>
            <h1 style={{ margin: 0, fontSize: 14 }}>Sayan Mondal</h1>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              AI • ML • Developer
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div
          ref={linksRef}
          style={{
            display: showButton ? "none" : "flex",
            gap: "2rem",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          {links.map((l) => (
            <motion.div
              key={l.id}
              onClick={() => scrollToSection(l.id)}
              whileHover={{
                scale: 1.1,
                color: "var(--accent)",
                textShadow: "0 0 8px var(--accent)",
              }}
              style={{
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: 500,
                color: active === l.id ? "var(--accent)" : "white",
              }}
            >
              {l.label}

              {/* 🔥 underline animation */}
              {active === l.id && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    background: "var(--accent)",
                    marginTop: "4px",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Hamburger */}
        {showButton && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.8rem",
            }}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "4rem",
              zIndex: 9999,
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontSize: "2rem",
                background: "none",
                border: "none",
                color: "#fff",
              }}
            >
              ✕
            </button>

            {links.map((l) => (
              <div
                key={l.id}
                onClick={() => {
                  scrollToSection(l.id);
                  setIsOpen(false);
                }}
                style={{
                  padding: "1rem",
                  fontSize: 18,
                  cursor: "pointer",
                  color: active === l.id ? "var(--accent)" : "white",
                }}
              >
                {l.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
