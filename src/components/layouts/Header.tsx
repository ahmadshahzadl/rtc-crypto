import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Markets", href: "#markets" },
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
  { label: "Services", href: "#services" },
];

const Header: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handlePdfDownload = async () => {
    setDownloading(true);
    setDownloadProgress(0);
    const url = encodeURI("/RTC – (Rao Trading Concept).pdf");
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const contentLength = response.headers.get("content-length");
      const total = contentLength ? parseInt(contentLength, 10) : 0;
      let loaded = 0;
      const reader = response.body?.getReader();
      const chunks = [];
      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) {
          chunks.push(value);
          loaded += value.length;
          if (total) setDownloadProgress(Math.round((loaded / total) * 100));
        }
      }
      const blob = new Blob(chunks, { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "RTC – (Rao Trading Concept).pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (e) {
      alert("Failed to download PDF");
    }
    setDownloading(false);
    setDownloadProgress(0);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      style={{
        background: isScrolled
          ? theme === "dark"
            ? "rgba(15, 15, 23, 0.95)"
            : "rgba(248, 250, 252, 0.95)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled
          ? theme === "dark"
            ? "1px solid rgba(99, 102, 241, 0.3)"
            : "1px solid rgba(30, 64, 175, 0.3)"
          : "none",
        padding: isScrolled ? "1rem 0" : "1.5rem 0",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
        }}
      >
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Logo */}
          <div
            style={{
              flexShrink: 0,
              width: "33.333333%",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <img
              src="/header_logo.png"
              alt="Logo"
              width={70}
              style={{ WebkitFilter: "drop-shadow(0 2px 2px #d7c6f5)" }}
            />

            {/* Live Indicator */}
            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.25rem 0.75rem",
                borderRadius: "20px",
                background:
                  theme === "dark"
                    ? "rgba(16, 185, 129, 0.1)"
                    : "rgba(5, 150, 105, 0.1)",
                border:
                  theme === "dark"
                    ? "1px solid rgba(16, 185, 129, 0.3)"
                    : "1px solid rgba(5, 150, 105, 0.3)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  theme === "dark"
                    ? "0 4px 12px rgba(16, 185, 129, 0.2)"
                    : "0 4px 12px rgba(5, 150, 105, 0.2)",
                marginTop: "0.1rem",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Live Circle */}
              <motion.div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background:
                    theme === "dark"
                      ? "linear-gradient(135deg, #10b981, #34d399)"
                      : "linear-gradient(135deg, #059669, #10b981)",
                  boxShadow:
                    theme === "dark"
                      ? "0 0 8px rgba(16, 185, 129, 0.6)"
                      : "0 0 8px rgba(5, 150, 105, 0.6)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* LIVE Text */}
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: theme === "dark" ? "#10b981" : "#059669",
                  letterSpacing: "0.05em",
                  textShadow:
                    theme === "dark"
                      ? "0 0 8px rgba(16, 185, 129, 0.4)"
                      : "0 0 8px rgba(5, 150, 105, 0.4)",
                }}
              >
                LIVE
              </span>
            </motion.div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              flex: 1,
              justifyContent: "center",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer"
                style={{
                  color:
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.8)"
                      : "rgba(0, 0, 0, 0.8)",
                  textDecoration: "none",
                }}
                whileHover={{
                  color: theme === "dark" ? "#ffffff" : "#000000",
                  scale: 1.05,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle & PDF Download */}
          <div
            style={{
              flexShrink: 0,
              width: "33.333333%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <motion.button
              onClick={handlePdfDownload}
              style={{
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border:
                  theme === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid rgba(0, 0, 0, 0.2)",
                backgroundColor:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.05)",
                cursor: downloading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                minWidth: 40,
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Download RTC PDF"
              type="button"
              disabled={downloading}
            >
              <Download
                className="w-5 h-5"
                style={{ color: theme === "dark" ? "#a5b4fc" : "#6366f1" }}
              />
              {downloading && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: -6,
                    width: "100%",
                    height: 4,
                    background: "#e0e7ff",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${downloadProgress}%`,
                      height: "100%",
                      background: "#6366f1",
                      transition: "width 0.2s",
                    }}
                  />
                </div>
              )}
            </motion.button>
            <motion.button
              onClick={toggleTheme}
              style={{
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border:
                  theme === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid rgba(0, 0, 0, 0.2)",
                backgroundColor:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.05)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } theme`}
              type="button"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              src="/header_logo.png"
              alt="Logo"
              width={50}
              style={{ WebkitFilter: "drop-shadow(0 2px 2px #d7c6f5)" }}
            />

            {/* Live Indicator */}
            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.2rem 0.6rem",
                borderRadius: "16px",
                background:
                  theme === "dark"
                    ? "rgba(16, 185, 129, 0.1)"
                    : "rgba(5, 150, 105, 0.1)",
                border:
                  theme === "dark"
                    ? "1px solid rgba(16, 185, 129, 0.3)"
                    : "1px solid rgba(5, 150, 105, 0.3)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  theme === "dark"
                    ? "0 3px 8px rgba(16, 185, 129, 0.2)"
                    : "0 3px 8px rgba(5, 150, 105, 0.2)",
                marginTop: "0.1rem",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Live Indicator */}
              <motion.div
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background:
                    theme === "dark"
                      ? "linear-gradient(135deg, #10b981, #34d399)"
                      : "linear-gradient(135deg, #059669, #10b981)",
                  boxShadow:
                    theme === "dark"
                      ? "0 0 6px rgba(16, 185, 129, 0.6)"
                      : "0 0 6px rgba(5, 150, 105, 0.6)",
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* LIVE Text */}
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: "600",
                  color: theme === "dark" ? "#10b981" : "#059669",
                  letterSpacing: "0.05em",
                  textShadow:
                    theme === "dark"
                      ? "0 0 6px rgba(16, 185, 129, 0.4)"
                      : "0 0 6px rgba(5, 150, 105, 0.4)",
                }}
              >
                LIVE
              </span>
            </motion.div>
          </div>

          {/* Mobile Actions */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            {/* PDF Download Button */}
            <motion.button
              onClick={handlePdfDownload}
              style={{
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border:
                  theme === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid rgba(0, 0, 0, 0.2)",
                backgroundColor:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.05)",
                cursor: downloading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                minWidth: 40,
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Download RTC PDF"
              type="button"
              disabled={downloading}
            >
              <Download
                className="w-5 h-5"
                style={{ color: theme === "dark" ? "#a5b4fc" : "#6366f1" }}
              />
              {downloading && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: -6,
                    width: "100%",
                    height: 4,
                    background: "#e0e7ff",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${downloadProgress}%`,
                      height: "100%",
                      background: "#6366f1",
                      transition: "width 0.2s",
                    }}
                  />
                </div>
              )}
            </motion.button>
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              style={{
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border:
                  theme === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid rgba(0, 0, 0, 0.2)",
                backgroundColor:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.05)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } theme`}
              type="button"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border:
                  theme === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid rgba(0, 0, 0, 0.2)",
                backgroundColor:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.05)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              <Menu
                className="w-5 h-5"
                style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 z-[9999]"
            style={{
              backgroundColor:
                theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.3)",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="w-full h-screen flex items-center justify-center absolute right-0 top-0"
              style={{
                background:
                  theme === "dark"
                    ? "linear-gradient(135deg, #1f2937 0%, #000000 50%, #374151 100%)"
                    : "linear-gradient(135deg, #f3f4f6 0%, #ffffff 50%, #e5e7eb 100%)",
              }}
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
                type="button"
              >
                <X
                  className="w-5 h-5"
                  style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}
                />
              </motion.button>

              {/* Menu content */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4">
                <div className="flex flex-col gap-6">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="block transition-all duration-300 cursor-pointer no-underline font-normal hover:opacity-100"
                      style={{
                        color: theme === "dark" ? "white" : "black",
                        fontSize: "4rem",
                        lineHeight: "1.2",
                        letterSpacing: "-0.02em",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 0.3, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        opacity: 1,
                        marginLeft: "1rem",
                        color: theme === "dark" ? "#ffffff" : "#000000",
                      }}
                    >
                      <small
                        className="mr-2"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: theme === "dark" ? "#8b5cf6" : "#6366f1",
                        }}
                      >
                        0{index + 1}.
                      </small>
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
