import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import ThreeDModel from "../ThreeDModel";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms (simplified)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden px-4 md:px-8"
      style={{
        background: "var(--gradient-bg)",
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        ...(window.innerWidth < 768 ? {
          paddingTop: '3.5rem',
          paddingBottom: '2.5rem',
          paddingLeft: '1.2rem',
          paddingRight: '1.2rem',
        } : {})
      }}
    >
      {/* 3D Background Elements */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ y: backgroundY, transformStyle: "preserve-3d" }}
      >
        {/* ...existing code... */}
      </motion.div>

      {/* Section Header - Centered at Top */}
      <div
        className="w-full flex flex-col items-center z-[2] max-w-[1400px] mx-auto"
        style={{
          transformStyle: "preserve-3d",
          marginTop: window.innerWidth < 768 ? '-15rem' : '-8rem',
          paddingBottom: "1.5rem",
        }}
      >
        <motion.div
          className="text-center mb-10 flex flex-col items-center gap-6"
          style={{
            transformStyle: "preserve-3d",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-indigo-500/30 rounded-full backdrop-blur-[10px] mb-4 relative cursor-pointer transition-all duration-300"
            style={{ transformStyle: "preserve-3d", padding: "0.5rem 1rem" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-2xl -z-10" />
            <Sparkles
              className="w-4 h-4 text-indigo-500"
              style={{ transform: "translateZ(5px)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.05em]"
              style={{
                transform: "translateZ(3px)",
                padding: "0.5rem 1rem",
                color: "var(--text-secondary)",
              }}
            >
              ABOUT US
            </span>
            <div
              className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"
              style={{ transform: "translateZ(3px)" }}
            />
          </motion.div>
        </motion.div>
      </div>
      <div
        className="relative flex flex-col xl:flex-row items-center justify-between xl:gap-16 gap-0 z-[2] max-w-[1400px] mx-auto w-full"
        style={{
          transformStyle: "preserve-3d",
          paddingTop: "6rem",
          paddingBottom: "1rem",
        }}
      >
        {/* Left Side - 3D Model (hidden on mobile/tablet) */}
        <motion.div
          className="hidden xl:flex relative items-center justify-center overflow-hidden min-h-[400px] xl:min-h-[500px] xl:w-[420px] 2xl:w-[500px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full overflow-hidden">
            <ThreeDModel />
          </div>
        </motion.div>

        {/* Right Side - About Content */}
        <div className="flex flex-col items-center xl:items-start justify-center flex-1 w-full max-w-2xl px-0 xl:px-0 gap-4 text-center xl:text-left">
          {/* About Description */}
          <motion.div
            className="font-extrabold mb-2"
            style={{
              transformStyle: "preserve-3d",
              fontSize: window.innerWidth < 768 ? '3rem' : '2rem',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="block"
              style={{
                background: "var(--gradient-white-gray)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 100%",
                transform: "translateZ(10px)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              About
            </motion.div>
            <motion.div
              className="block"
              style={{
                background: "var(--gradient-blue)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                transform: "translateZ(8px)",
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Rao Umer
            </motion.div>
          </motion.div>
          <motion.div
            className="text-base md:text-lg max-w-[600px] xl:max-w-[600px] xl:mr-auto leading-relaxed mb-6 text-center xl:text-left"
            style={{
              color: "var(--text-secondary)",
              transform: "translateZ(5px)",
              paddingLeft: window.innerWidth < 768 ? '1.2rem' : undefined,
              paddingRight: window.innerWidth < 768 ? '1.2rem' : undefined,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            Rao Umer, the founder of RTC (Rao Trading Concept), is a seasoned
            Forex trader with 6+ years of market experience. He developed RTC by
            combining ICT, Smart Money Concepts (SMC), and Volume Spread
            Analysis (VSA) into one complete trading methodology. RTC trains
            traders to think like institutions, not retail gamblers.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
